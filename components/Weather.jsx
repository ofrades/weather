import React, { useState, useEffect } from "react";
import { useQuery, useIsFetching } from "react-query";
import { getLocation, getCity } from "../services/weather";
import { global } from "../stitches.config.js";
import {
  Container,
  Card,
  Status,
  ConvertTemp,
  Celsius,
  Fahrenheit,
} from "./styles";
import Loader from "./Loader";
import Search from "./Search";
import ListCities from "./ListCities";
import Current from "./Current";
import Next from "./Next";

const globalStyles = global({
  body: {
    margin: 0,
    backgroundColor: "$grey800",
    color: "$grey100",
    fontFamily: "$mono",
  },
});

const Weather = () => {
  const isFetching = useIsFetching();
  const [searchQuery, setSearchQuery] = useState();
  const [arrCities, setArrCities] = useState(
    // Get cities array from localStorage
    typeof window !== "undefined"
      ? localStorage.getItem("cities") !== null
        ? JSON.parse(localStorage.getItem("cities"))
        : []
      : []
  );
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [locale, setLocale] = useState();
  const [metrics, setMetrics] = useState("c");

  /**
   * Search by lat and lon
   * Update auto if lat or lon are changed
   */
  const queryByLocation = useQuery(
    ["location", lat, lon],
    async () => await getLocation(lat, lon),
    {
      refetchOnWindowFocus: false,
    }
  );

  /**
   * Search city name
   * Search also by lat and lon if
   * searchQuery == Your Location
   * this will do a reverse call
   * Update auto if searchQuery is changed
   */
  const queryByCity = useQuery(
    ["city", searchQuery],
    async () => await getCity(searchQuery, lat, lon),
    {
      refetchOnWindowFocus: false,
      retry: false,
      onSuccess: (e) => {
        setLat(e.coord.lat);
        setLon(e.coord.lon);
        setLocale(e.sys.country);
        if (searchQuery == "Your Location") {
          setArrCities((oldArr) =>
            oldArr.includes(e.name) ? [...oldArr] : [...oldArr, e.name]
          );
        }
      },
      onError: async () => {
        // If fails remove searchQuery from cities array
        setArrCities(arrCities.filter((city) => city != searchQuery));
        // reverse to user location if error
        // wait 3 secs just to show error to user
        setTimeout(() => {
          setSearchQuery("Your Location");
        }, 3000);
      },
    }
  );

  /**
   * Ask user location
   */
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((e) => {
      setLat(e.coords.latitude);
      setLon(e.coords.longitude);
      setSearchQuery("Your Location");
    });
  }, []);

  globalStyles();
  return (
    <Container>
      <Card initial={{ scale: 0 }} animate={{ scale: 1 }}>
        <Status status={queryByCity.status}>
          {queryByCity.isError && <p>{searchQuery} error fetching...</p>}
        </Status>
        <Search
          setArrCities={setArrCities}
          setSearchQuery={setSearchQuery}
          isFetching={isFetching}
        />
        {queryByLocation.isLoading || queryByCity.isLoading ? (
          <Loader />
        ) : (
          <>
            <ConvertTemp metrics={metrics}>
              <Celsius
                title="Change to Celsius"
                metrics={metrics}
                onClick={() => setMetrics("c")}
              >
                Celsius
              </Celsius>
              <Fahrenheit
                title="Change to Fahrenheit"
                metrics={metrics}
                onClick={() => setMetrics("f")}
              >
                Fahrenheit
              </Fahrenheit>
            </ConvertTemp>
            <Current
              name={
                queryByCity.data?.name
                  ? queryByCity.data.name
                  : queryByLocation.data?.name
              }
              searchQuery={searchQuery}
              data={queryByLocation.data}
              metrics={metrics}
            />
            <Next
              metrics={metrics}
              daily={queryByLocation.data?.daily}
              locale={locale}
            />
            {arrCities && (
              <ListCities
                arrCities={arrCities}
                setArrCities={setArrCities}
                setSearchQuery={setSearchQuery}
              />
            )}
          </>
        )}
      </Card>
    </Container>
  );
};

export default Weather;
