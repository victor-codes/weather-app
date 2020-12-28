import React from "react";
import { CloseButton } from "./assests/icon/CloseButton";
import { SearchIcon } from "./assests/icon/SearchIcon";
import { ArrowIcon } from "./assests/icon/ArrowIcon";

export default function SearchBar({ toggle, hideToggle }) {
  let style;
  if (toggle) {
    style = "show";
  } else {
    style = "";
  }
  return (
    <div className={`fixed animate ${style}`} style={{ padding: "20px 46px" }}>
      <div className="close-container">
        <CloseButton hideToggle={hideToggle} />
      </div>
      <form action="">
        <div className="search-icon">
          <SearchIcon />
          <input type="search" placeholder="search location" name="" id="" />
        </div>
        <input type="submit" value="Search" name="" id="" />
      </form>
      <div className="suggestion__container">
        <div className="suggestion__item">
          <ul>
            <li>
              <button>London</button>
              <ArrowIcon />
            </li>
            <li>
              <button>Barcelona</button>
              <ArrowIcon />
            </li>
            <li>
              <button>Long Beach</button>
              <ArrowIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
