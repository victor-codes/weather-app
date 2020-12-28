import React from "react";
import WeatherImage from "./media/Hail.png";

export default function ComingWeather({ date, deg1, deg2, image, class1 }) {
  return (
    <div className={`coming__weather ${class1}`}>
      <p className="weather__date">{date}</p>
      <div className="image__container">
        <img className="weather__class" src={WeatherImage} alt="" />
      </div>
      <div className="degree">
        <span className="c__w__deg">16°C</span>
        <span className="c__w__deg deg__2">11°C</span>
      </div>
    </div>
  );
}
