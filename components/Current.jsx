import React from "react";
import { CityTitle, CurrentWeather, CurrentContainer } from "./styles";
import { Line } from "react-chartjs-2";
import { theme } from "../stitches.config.js";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
const Current = ({ name, searchQuery, data }) => {
  const graph = {
    labels: data?.hourly
      .filter((e, i) => i % 2 !== 0 && i < 20)
      .map((e) => new Date(e.dt * 1000).getHours("HH")),
    datasets: [
      {
        label: "Temperature",
        data: data?.hourly.filter((e, i) => i % 2 !== 0).map((e) => e.temp),
        borderColor: theme.colors.yellow500.value,
      },
      {
        label: "Humidity",
        data: data?.hourly.filter((e, i) => i % 2 !== 0).map((e) => e.humidity),
        borderColor: theme.colors.blue500.value,
      },
    ],
  };

  return (
    <CurrentContainer>
      <CityTitle>{name ? name : searchQuery}</CityTitle>
      <CurrentWeather>
        <p>Now</p>
        <p>🌡️{data?.current.temp}°</p>
        <img
          src={`http://openweathermap.org/img/wn/${data?.current.weather[0].icon}@4x.png`}
          alt="current weather icon"
        />
        <Line
          data={graph}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            scales: {
              yAxes: {
                display: true,
                gridLines: { display: false },
              },
              xAxes: {
                display: true,
                gridLines: { display: false },
              },
            },
          }}
        />
      </CurrentWeather>
    </CurrentContainer>
  );
};

export default Current;
