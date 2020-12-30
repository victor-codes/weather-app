import React, { useEffect, useRef } from "react";
import { CloseButton } from "./assests/icon/CloseButton";
import { SearchIcon } from "./assests/icon/SearchIcon";
import { ArrowIcon } from "./assests/icon/ArrowIcon";

export default function SearchBar({ toggle, hideToggle }) {
  const useFocus = () => {
    const htmlElRef = useRef(null);
    const setFocus = () => {
      htmlElRef.current && htmlElRef.current.focus();
    };

    return [htmlElRef, setFocus];
  };

  const [inpuRef, setInputFocus] = useFocus();

  let style;
  if (toggle) {
    setInputFocus();
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
          <label htmlFor="Search-for-location">
            <input
              type="search"
              placeholder="search location"
              name=""
              id="Search-for-location"
              ref={inpuRef}
            />
          </label>
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
