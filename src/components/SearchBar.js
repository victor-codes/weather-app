import React, { useState } from "react";
import { CloseButton } from "./assests/icon/CloseButton";
import { SearchIcon } from "./assests/icon/SearchIcon";

export default function SearchBar({ toggle, isOpen, children, onChange }) {
  const [userInput, setUserInput] = useState("");
  let style;

  function handleChange(e) {
    if (e.key === "Enter") {
      onChange(userInput);
    }
  }

  function handleClick(e) {
    e.preventDefault();
    onChange(userInput);
  }

  toggle ? (style = "show") : (style = "");

  return (
    <aside
      className={`fixed animate ${style}`}
      style={{ padding: "20px 46px" }}
    >
      <div className="close-container">
        <CloseButton isOpen={isOpen} />
      </div>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div className="search-icon">
          <SearchIcon />
          <label htmlFor="Search-for-location">
            <input
              type="text"
              id="Search-for-location"
              placeholder="Search location"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleChange}
              autoComplete="off"
            />
          </label>
        </div>
        <button
          aria-label="Search for location"
          type="submit"
          onClick={(e) => handleClick(e)}
        >
          Search
        </button>
      </form>
      <div className="suggestion__container">
        <div className="suggestion__item">
          <ul>{children}</ul>
        </div>
      </div>
    </aside>
  );
}
