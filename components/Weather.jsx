import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getLocation, getCity } from "../services/weather";
import { global } from "../stitches.config.js";

import {
  Container,
  Card,
  Loading,
  ConvertTemp,
  Celsius,
  Fahrenheit,
} from "./styles";
import Search from "./Search";
import ListCities from "./ListCities";
import Current from "./Current";
import Next from "./Next";

const globalStyles = global({
  body: { margin: 0, backgroundColor: "$grey800", color: "$grey100" },
});

const Weather = () => {
  const [searchQuery, setSearchQuery] = useState("Leiria");
  const [arrCities, setArrCities] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("cities") !== null
        ? JSON.parse(localStorage.getItem("cities"))
        : ["Leiria"]
      : []
  );
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [locale, setLocale] = useState();
  const [metrics, setMetrics] = useState("c");

  const queryByLocation = useQuery(
    ["location", searchQuery],
    async () => await getLocation(lat, lon),
    {
      refetchOnWindowFocus: false,
    }
  );

  const queryByCity = useQuery(
    ["city", searchQuery],
    async () => await getCity(searchQuery, lat, lon),
    {
      refetchOnWindowFocus: false,
      onSuccess: async (e) => {
        setLat(e.coord.lat);
        setLon(e.coord.lon);
        setLocale(e.sys.country);
        setArrCities((oldArr) =>
          oldArr.includes(e.name) ? [...oldArr] : [...oldArr, e.name]
        );
      },
    }
  );

  /**
   * Get users location
   */
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((e) => {
      setLat(e.coords.latitude);
      setLon(e.coords.longitude);
      setSearchQuery("Your Location");
    });
  }, []);

  /**
   * Update localStorage
   */
  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(arrCities));
  }, [arrCities]);

  if (queryByCity.isLoading || queryByLocation.isLoading) {
    return (
      <Container>
        <Card>
          <Loading>Loading...</Loading>
        </Card>
      </Container>
    );
  }

  if (queryByLocation.isError) {
    return (
      <Container>
        <Card>{queryByLocation.error?.message}</Card>
      </Container>
    );
  }
  globalStyles();
  return (
    <Container>
      <Card>
        <Search setArrCities={setArrCities} setSearchQuery={setSearchQuery} />
        <ConvertTemp metrics={metrics}>
          <Celsius metrics={metrics} onClick={() => setMetrics("c")}>
            Celsius
          </Celsius>
          <Fahrenheit metrics={metrics} onClick={() => setMetrics("f")}>
            Fahrenheit
          </Fahrenheit>
        </ConvertTemp>
        <Current
          name={queryByCity.data.name}
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
      </Card>
    </Container>
  );
};

export default Weather;
