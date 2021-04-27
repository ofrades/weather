import React from "react";
import { NextDays } from "./styles";
import dayjs from "dayjs";

const Next = ({ daily, locale }) => {
  dayjs.locale(locale);
  return (
    <NextDays>
      {daily.map((e, i) => (
        <div key={i}>
          <span>
            {e.temp.min}°C/{e.temp.max}°C
          </span>
          <span>rain : {e.rain}%</span>
          <span>{e.weather[0].main}</span>
          <span>{dayjs().add(i, "day").format("MM/DD")}</span>
          <img
            src={`http://openweathermap.org/img/wn/${e.weather[0].icon}.png`}
            alt="next days icons"
          />
        </div>
      ))}
    </NextDays>
  );
};

export default Next;
