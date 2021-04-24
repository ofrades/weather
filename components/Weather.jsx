import { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { getLocation, getCity } from "../services/weather";
import {
  Container,
  Cities,
  Current,
  NextDays,
  InputContainer,
  Input,
  Button,
  List,
} from "./styles";

const Weather = ({ location }) => {
  const [city, setCity] = useState();
  const [query, setQuery] = useState("");
  const [cities, setCities] = useState([]);
  const [lat, setLat] = useState("39.74362");
  const [lon, setLon] = useState("-8.80705");

  const queryLocation = useQuery(
    [lat, lon],
    async () => await getLocation(lat, lon),
    {
      initialData: location,
    }
  );

  const queryCity = useQuery(query, async () => await getCity(query), {
    enabled: false,
    onSuccess: (e) => {
      setLat(e?.coord.lat || lat);
      setLon(e?.coord.lon || lon);
    },
  });

  const handleInput = (e) => {
    setCity(e.target.value);
  };

  const addCity = () => {
    setCities((old) => [...old, city]);
    setQuery(city);
  };

  const showCity = (item) => {
    setQuery(item);
  };

  const removeCity = (item) => {
    setCities(cities.filter((e) => e !== item));
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

  return (
    <Container>
      <Cities>
        <InputContainer>
          <Input placeholder="Add Cities" onChange={handleInput} />
          <Button onClick={() => addCity()}>+</Button>
        </InputContainer>
        <List>
          <h1>List of Cities</h1>
          {cities.map((item) => (
            <li key={item}>
              <p>{item}</p>
              <button onClick={() => showCity(item)}>Show ></button>
              <button onClick={() => removeCity(item)}>Remove x</button>
            </li>
          ))}
        </List>
      </Cities>

      <Current>
        <h1>Current day</h1>
        <h2>{queryLocation.data?.current.weather[0].main}</h2>
        {queryCity.data?.name ? queryCity.data.name : "Leiria"}
        <img
          src={`http://openweathermap.org/img/wn/${queryLocation.data?.current.weather[0].icon}.png`}
          alt="weather status icon"
        />
      </Current>
      <NextDays>
        <h1>Next Days</h1>
        {queryLocation.data?.daily.map((e, i) => (
          <>
            <span>
              {e.weather[0].main} {}
            </span>
            <img
              src={`http://openweathermap.org/img/wn/${e.weather[0].icon}.png`}
              alt="weather status icon"
            />
          </>
        ))}
      </NextDays>
    </Container>
  );
};

export default Weather;
