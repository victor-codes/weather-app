import React from "react";

export default function Degree({ convert }) {
  return (
    <div className="degree__container">
      <button onClick={() => convert(false)} className="celsius">
        <p className="celsius-text">&ordm;C</p>
      </button>
      <button onClick={() => convert(true)} className="fahrenheit">
        <p className="fahrenheit-text">&ordm;F</p>
      </button>
    </div>
  );
}
