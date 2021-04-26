import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getLocation, getCity } from "../services/weather";
import { global } from "../stitches.config.js";

import {
  Container,
  Card,
  CityTitle,
  CurrentWeather,
  CurrentContainer,
  NextDays,
  Loading,
} from "./styles";
import Search from "./Search";
import ListCities from "./ListCities";

const globalStyles = global({
  body: { margin: 0, backgroundColor: "$grey800", color: "$grey100" },
});

const Weather = () => {
  const [searchQuery, setSearchQuery] = useState("Leiria");
  const [arrCities, setArrCities] = useState(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cities"))
      : []
  );
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

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
    localStorage.setItem(
      "cities",
      JSON.stringify(arrCities ? arrCities : ["Leiria"])
    );
  }, [arrCities]);

  /**
   * Change latitude and longitude if
   * new city is searched
   */
  useEffect(async () => {
    setLat(queryByCity.data?.coord.lat);
    setLon(queryByCity.data?.coord.lon);
  }, [queryByCity.isSuccess]);

  if (queryByLocation.isLoading)
    return (
      <Container>
        <Loading>Loading...</Loading>
      </Container>
    );
  if (queryByLocation.isError)
    return "An error has occurred: " + queryByLocation.error.message;
  if (queryByCity.isLoading)
    return (
      <Container>
        <Loading>Loading...</Loading>
      </Container>
    );
  if (queryByCity.isError)
    return "An error has occurred: " + queryByCity.error.message;
  globalStyles();
  return (
    <Container>
      <Card>
        <Search setArrCities={setArrCities} setSearchQuery={setSearchQuery} />

        <CurrentContainer>
          <CityTitle>
            {queryByCity.data?.name ? queryByCity.data.name : searchQuery}
          </CityTitle>
          <CurrentWeather>
            {queryByLocation.data?.current.weather[0].main}
          </CurrentWeather>
          <img
            src={`http://openweathermap.org/img/wn/${queryByLocation.data?.current.weather[0].icon}@4x.png`}
            alt="current weather icon"
          />
          <NextDays>
            Next hours
            {queryByLocation.data?.hourly
              .filter((e, i) => i < 7)
              .map((e) => (
                <div key={e}>
                  <span>{e.weather[0].main}</span>
                  <img
                    src={`http://openweathermap.org/img/wn/${e.weather[0].icon}.png`}
                    alt="next days icons"
                  />
                </div>
              ))}
          </NextDays>
          <NextDays>
            Next days
            {queryByLocation.data?.daily
              .filter((e, i) => i < 7)
              .map((e, i) => (
                <div key={e}>
                  <span>{e.weather[0].main}</span>
                  <span>{i + 1}</span>
                  <img
                    src={`http://openweathermap.org/img/wn/${e.weather[0].icon}.png`}
                    alt="next days icons"
                  />
                </div>
              ))}
          </NextDays>
        </CurrentContainer>
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
