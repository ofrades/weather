import React from "react";

import { CityTitle, CurrentWeather, CurrentContainer } from "./styles";

const Current = ({ name, searchQuery, current }) => {
  return (
    <CurrentContainer>
      <CityTitle>{name ? name : searchQuery}</CityTitle>
      <CurrentWeather>
        <p>{current.temp}°C</p>
        <p>{current.weather[0].main}</p>
      </CurrentWeather>
      <img
        src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`}
        alt="current weather icon"
      />
    </CurrentContainer>
  );
};

export default Current;
