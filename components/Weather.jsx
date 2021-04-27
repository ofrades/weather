import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getLocation, getCity } from "../services/weather";
import { global } from "../stitches.config.js";

import { Container, Card, Loading } from "./styles";
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

  const queryByLocation = useQuery(
    ["location", searchQuery],
    async () => await getLocation(lat, lon),
    {
      refetchOnWindowFocus: false,
    }
  );

  const queryByCity = useQuery(
    ["city", searchQuery],
    async () => await getCity(searchQuery),
    {
      refetchOnWindowFocus: false,
    }
  );

  /**
   * Used to get users location
   * and give an name
   */
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((e) => {
      setLat(e.coords.latitude);
      setLon(e.coords.longitude);
      setArrCities((oldArr) => [...oldArr, "Your Location"]);
      setSearchQuery("Your Location");
    });
  }, []);

  /**
   * Update localStorage
   */
  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(arrCities));
  }, [arrCities]);

  /**
   * Change latitude and longitude if
   * new city is searched
   */
  useEffect(async () => {
    setLat(queryByCity.data?.coord.lat);
    setLon(queryByCity.data?.coord.lon);
    setLocale(queryByCity.data?.sys.country);
  }, [queryByCity.isSuccess]);

  if (queryByCity.isLoading || queryByLocation.isLoading) {
    return (
      <Container>
        <Card>
          <Loading>Loading...</Loading>
        </Card>
      </Container>
    );
  }

  if (queryByCity.isError || queryByLocation.isError) {
    return (
      <Container>
        <Card>
          {queryByCity.error?.message || queryByLocation.error?.message}
        </Card>
      </Container>
    );
  }
  globalStyles();
  return (
    <Container>
      <Card>
        <Search setArrCities={setArrCities} setSearchQuery={setSearchQuery} />

        <Current
          name={queryByCity.data.name}
          searchQuery={searchQuery}
          current={queryByLocation.data?.current}
        />
        <Next daily={queryByLocation.data?.daily} locale={locale} />
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
