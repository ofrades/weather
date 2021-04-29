import React, { useState } from "react";
import { CityTitle, CurrentWeather, CurrentContainer } from "./styles";
import { Bar } from "react-chartjs-2";
import { theme } from "../stitches.config.js";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

const Current = ({ name, data, metrics }) => {
  const graph = {
    labels: data?.hourly
      .filter((e, i) => i % 2 !== 0 && i < 20)
      .map((e) => new Date(e.dt * 1000).getHours("HH") + "h"),
    datasets: [
      {
        label: "Temperature",
        type: "line",
        data: data?.hourly
          .filter((e, i) => i % 2 !== 0)
          .map((e) =>
            metrics == "f"
              ? Math.round((e.temp - 273.15) * 1.8 + 32)
              : Math.round(e.temp - 273.15)
          ),
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
      <CityTitle>{name}</CityTitle>
      <CurrentWeather>
        <p>
          {metrics == "f"
            ? `
🌡️ ${Math.round((data?.current.temp - 273.15) * 1.8 + 32)}°`
            : `🌡️ ${Math.round(data?.current.temp - 273.15)}°`}
        </p>
        <img
          src={`https://openweathermap.org/img/wn/${data?.current?.weather[0].icon}@4x.png`}
          alt="current weather icon"
        />
        <p>{data?.current.weather[0].description}</p>
        <Bar
          data={graph}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            scales: {
              yAxes: {
                display: true,
                gridLines: { lineWidth: 0 },
              },
              xAxes: {
                display: true,
                gridLines: { lineWidth: 0 },
              },
            },
          }}
        />
      </CurrentWeather>
    </CurrentContainer>
  );
};

export default Current;
