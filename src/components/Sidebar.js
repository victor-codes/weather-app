import React from "react";
import { Location } from "./assests/icon/Location";
import Background from "./media/Cloud-background.png";
import TodayWeather from "./media/Shower.png";

export default function Sidebar({ toggle }) {
  return (
    <div className="fixed">
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
            onClick={() => toggle(true)}
            // onFocus={() => toggle(true)}
            className="input1"
          >
            Seach for places{" "}
          </button>
          <button style={{ padding: "0" }}>
            <div className="location-btn">
              <Location />
            </div>
          </button>
        </div>
        <div className="today__weather__image">
          <img src={TodayWeather} alt="" />
        </div>
        <div className="today__weather__data" style={{ marginTop: "88px" }}>
          <h1>
            <span className="first__h1">15</span>
            <span className="celsuis-ascii">&ordm;</span>{" "}
            <span className="today-weather-text">C</span>
          </h1>
          <h2>Shower</h2>
          <div className="today-data">
            <p className="today-data-text">Today</p>
            <span style={{ padding: "0px 16px" }}>.</span>
            <p className="today-data-text">Fri, 5 Jun</p>
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
            <p className="current__location">Helsinki</p>
          </div>
        </div>
      </div>
    </div>
  );
}
