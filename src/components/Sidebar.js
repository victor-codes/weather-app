import React from "react";
import { Location } from "./assests/icon/Location";
import Background from "./media/Cloud-background.webp";
import { formatDate } from "./formatDate";
import WeatherImage from "./WeatherImage";
import { convertToF } from "./ConvertToF";

export default function Sidebar({
  toggle,
  fahr,
  data: { consolidated_weather, title },
  load,
  location,
}) {
  return (
    <aside className="fixed">
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img className="cloud-background" src={Background} alt="" />
        <div className="form__field">
          <button
            aria-label="Seach for places"
            onClick={() => toggle(true)}
            className="input1"
          >
            Seach for places
          </button>
          <button aria-label="Go to current Location" style={{ padding: "0" }}>
            <div className="location-btn" onClick={() => load(!location)}>
              <Location />
            </div>
          </button>
        </div>
        <div className="today__weather__image">
          <img
            src={WeatherImage(consolidated_weather[0].weather_state_abbr)}
            alt=""
          />
        </div>
        <div className="today__weather__data" style={{ marginTop: "88px" }}>
          <h1 style={{ textAlign: "center" }}>
            <span className="first__h1">
              {fahr
                ? convertToF(Math.round(consolidated_weather[0].the_temp))
                : Math.round(consolidated_weather[0].the_temp)}
            </span>
            <span className="celsuis-ascii">&ordm;</span>
            <span className="today-weather-text">{fahr ? "F" : "C"}</span>
          </h1>
          <h2>{consolidated_weather[0].weather_state_name}</h2>
          <div className="today-data">
            <p className="today-data-text">Today</p>
            <span style={{ padding: "0px 16px" }}>•</span>
            <p className="today-data-text">
              {formatDate(consolidated_weather[0].applicable_date)}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gridGap: "9px",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "32px",
            }}
          >
            <Location current="true" />
            <p className="current__location">{title}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
