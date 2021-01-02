import React from "react";

export default function Degree({ fahr, convert }) {
  let stylesFah;
  let stylesCel;
  fahr ? (stylesFah = "clicked") : (stylesCel = "clicked");

  return (
    <div className="degree__container">
      <button
        aria-label="Convert fahrenheit to celsius"
        style={{ transition: "100ms ease-out all" }}
        onClick={() => convert(false)}
        className={`celsius ${stylesCel}`}
      >
        <span
          style={{ transition: "100ms ease-out all" }}
          className="celsius-text"
        >
          &ordm;C
        </span>
      </button>
      <button
        aria-label="Convert celsuis to fahrenheit"
        style={{ transition: "100ms ease-out all" }}
        onClick={() => convert(true)}
        className={`fahrenheit ${stylesFah}`}
      >
        <span
          style={{ transition: "100ms ease-out all" }}
          className="fahrenheit-text"
        >
          &ordm;F
        </span>
      </button>
    </div>
  );
}
