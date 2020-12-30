import React from "react";
import { CloseButton } from "./assests/icon/CloseButton";

export default function Modal({ message }) {
  return (
    <div className="overlay">
      <div className="overlay-container">
        <div>
          <CloseButton />
        </div>
        <h1 className="overlay-text">{message}</h1>
      </div>
    </div>
  );
}
