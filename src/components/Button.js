import React from "react";
import { ArrowIcon } from "./assests/icon/ArrowIcon";

export default function Button({ value, woeid, handleClick }) {
  function handleFetch() {
    handleClick(woeid);
  }

  return (
    <li woeid={woeid} onClick={handleFetch}>
      <button onClick={handleFetch}>{value}</button>
      <ArrowIcon />
    </li>
  );
}
