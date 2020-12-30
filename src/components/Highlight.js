import React from "react";
import { NavigatorIcon } from "./assests/icon/Navigator";

export default function Highlight({ data: { consolidated_weather } }) {
  return (
    <div className="highlight">
      <h3>Today’s Hightlights</h3>
      <div className="highlight-data-container">
        <div className="highlight-item">
          <p>Wind status</p>
          <h4 style={{ marginBottom: "20px" }}>
            {Math.round(consolidated_weather[0].wind_speed * 10) / 10}
            <span>mph</span>
          </h4>
          <div className="highlight-info">
            <NavigatorIcon />
            <span className="highlight-item-span">
              {consolidated_weather[0].wind_direction_compass}
            </span>
          </div>
        </div>
        <div className="highlight-item">
          <p>Humidity</p>
          <h4>
            {consolidated_weather[0].humidity}
            <span>&#37;</span>
          </h4>
          <div>
            <div className="highlight-info">
              <div
                style={{ width: "-webkit-fill-available", maxWidth: "230px" }}
              >
                <div className="guage">
                  <span className="highlight-item-span">0</span>
                  <span className="highlight-item-span">50</span>
                  <span className="highlight-item-span">100</span>
                </div>
                <div className="indicator__container">
                  <div
                    className="indicator"
                    style={{ width: `${consolidated_weather[0].humidity}%` }}
                  ></div>
                </div>
                <span className="highlight-item-span percent">&#37;</span>
              </div>
            </div>
          </div>
        </div>
        <div className="highlight-item">
          <p>Visibility</p>
          <h4>
            {Math.round(consolidated_weather[0].visibility * 10) / 10}
            <span> miles</span>
          </h4>
        </div>
        <div className="highlight-item">
          <p>Air Pressure</p>
          <h4>
            {Math.round(consolidated_weather[0].air_pressure * 10) / 10}{" "}
            <span className="airpressure">mb</span>
          </h4>
        </div>
      </div>
    </div>
  );
}
