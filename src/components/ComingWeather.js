import React from "react";
import WeatherImage from "./WeatherImage";
import { convertToF } from "./ConvertToF";
import { formatDate } from "./formatDate";

export default function ComingWeather({
  data: { consolidated_weather },
  date,
  index,
  fahr,
  nextday,
}) {
  return (
    <div className={"coming__weather"}>
      <p className="weather__date">
        {nextday
          ? "Tomorrow"
          : formatDate(consolidated_weather[index].applicable_date)}
      </p>
      <div className="image__container">
        <img
          className="weather__class"
          src={WeatherImage(consolidated_weather[index].weather_state_abbr)}
          alt={consolidated_weather[index].weather_state_name}
        />
      </div>
      <div className="degree">
        <span className="c__w__deg">
          {fahr
            ? convertToF(Math.floor(consolidated_weather[index].max_temp))
            : Math.floor(consolidated_weather[index].max_temp)}
          &ordm;{fahr ? "F" : "C"}
        </span>
        <span className="c__w__deg deg__2">
          {fahr
            ? convertToF(Math.floor(consolidated_weather[index].min_temp))
            : Math.floor(consolidated_weather[index].min_temp)}
          &ordm;{fahr ? "F" : "C"}
        </span>
      </div>
    </div>
  );
}
