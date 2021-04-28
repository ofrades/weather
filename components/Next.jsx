import React from "react";
import { NextDays } from "./styles";
import dayjs from "dayjs";

const Next = ({ daily, locale }) => {
  dayjs.locale(locale);
  return (
    <NextDays>
      {daily?.map((e, i) => (
        <div key={i}>
          <p>🗓️ {dayjs().add(i, "day").format("MM/DD")}</p>
          <img
            src={`http://openweathermap.org/img/wn/${e.weather[0].icon}.png`}
            alt="next days icons"
          />
          <p>
            🌡️ {Math.round(e.temp.min)}° {Math.round(e.temp.max)}°
          </p>
          <p>{e.rain ? "💧" + e.rain + "%" : "☀️"}</p>
        </div>
      ))}
    </NextDays>
  );
};

export default Next;
