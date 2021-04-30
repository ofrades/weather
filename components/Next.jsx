import React from "react";
import { NextDays } from "./styles";
import dayjs from "dayjs";

const Next = ({ daily, locale, metrics }) => {
  dayjs.locale(locale);
  return (
    <NextDays>
      {daily?.map((e, i) => (
        <div key={i}>
          <h2>🗓️ {dayjs().add(i, "day").format("MM/DD")}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${e.weather[0].icon}.png`}
            alt="next days icons"
          />
          <em>{e.weather[0].description}</em>
          <h4>
            {metrics == "f"
              ? `
🌡️ ${Math.round((e.temp.min - 273.15) * 1.8 + 32)}° ${Math.round(
                  (e.temp.max - 273.15) * 1.8 + 32
                )}°`
              : `🌡️ ${Math.round(e.temp.min - 273.15)}° ${Math.round(
                  e.temp.max - 273.15
                )}°`}
          </h4>
          <p>{e.rain ? "💧" + e.rain + "%" : "☀️"}</p>
        </div>
      ))}
    </NextDays>
  );
};

export default Next;
