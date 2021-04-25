import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getLocation, getCity } from "../services/weather";
import {
  Container,
  Card,
  CityTitle,
  CurrentWeather,
  Current,
  NextDays,
  InputContainer,
  Input,
  AddCity,
  List,
  AddButton,
  RemoveButton,
  Loading,
} from "./styles";

const Weather = ({ location }) => {
  const [city, setCity] = useState();
  const [query, setQuery] = useState("");
  const [cities, setCities] = useState(["Leiria"]);
  const [lat, setLat] = useState("39.74362");
  const [lon, setLon] = useState("-8.80705");
  const date = new Date();

  const queryLocation = useQuery(
    [lat, lon],
    async () => await getLocation(lat, lon),
    {
      initialData: location,
      onSuccess: (e) => {
        console.log("queryLocation", e);
      },
    }
  );

  const queryCity = useQuery(query, async () => await getCity(query), {
    enabled: false,
    onSuccess: (e) => {
      console.log("queryCity", e);
      setLat(e ? e.coord.lat : lat);
      setLon(e ? e.coord.lon : lon);
      setCity(e ? e.name : city);
    },
  });

  const handleInput = (e) => {
    setCity(e.target.value);
  };

  const addCity = () => {
    setCities((oldArr) => [...oldArr, city]);
    setQuery(city);
  };

  const showCity = (city) => {
    setQuery(city);
  };

  const removeCity = (item) => {
    setCities(cities.filter((city) => city !== item));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((e) => {
      setLat(e.coords.latitude);
      setLon(e.coords.longitude);
    });
  }, []);

  useEffect(async () => {
    await queryLocation.refetch();
  }, [lat, lon]);

  useEffect(async () => {
    await queryCity.refetch();
  }, [query]);

  if (queryLocation.isLoading)
    return (
      <Container>
        <Loading>Loading...</Loading>
      </Container>
    );
  if (queryLocation.isError)
    return "An error has occurred: " + queryLocation.error.message;
  if (queryCity.isLoading)
    return (
      <Container>
        <Loading>Loading...</Loading>
      </Container>
    );
  if (queryCity.isError)
    return "An error has occurred: " + queryCity.error.message;
  return (
    <Container>
      <Card>
        <InputContainer>
          <Input placeholder="Add Cities" onChange={handleInput} />
          <AddCity onClick={() => addCity()}>
            <a>+</a>
          </AddCity>
        </InputContainer>

        <Current>
          <CityTitle>
            {queryCity.data?.name ? queryCity.data.name : "Leiria"}
          </CityTitle>
          <CurrentWeather>
            {queryLocation.data?.current.weather[0].main}
          </CurrentWeather>
          <img
            src={`http://openweathermap.org/img/wn/${queryLocation.data?.current.weather[0].icon}.png`}
            alt="current weather icon"
          />
          <NextDays>
            Next hours
            {queryLocation.data?.hourly
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
            {queryLocation.data?.daily
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
        </Current>
        <List>
          {cities.map((item) => (
            <li key={item}>
              <AddButton onClick={() => showCity(item)}>{item}</AddButton>
              <RemoveButton onClick={() => removeCity(item)}>
                Remove
              </RemoveButton>
            </li>
          ))}
        </List>
      </Card>
    </Container>
  );
};

export default Weather;
