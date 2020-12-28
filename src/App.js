import React, { useState } from "react";
import Highlight from "./components/Highlight";
import ComingWeather from "./components/ComingWeather";
import Degree from "./components/Degree";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [toggleSearchBar, setToggleSearchBar] = useState(false);
  return (
    <div className="App">
      <div className="aside1">
        <Sidebar toggle={(val) => setToggleSearchBar(val)} />
        <SearchBar
          toggle={toggleSearchBar}
          hideToggle={(val) => setToggleSearchBar(val)}
        />
      </div>
      <main className="aside2">
        <div className="aside-content">
          <Degree />
          <div className="coming__weather__container wrap">
            <ComingWeather
              class1="left"
              date="Tomorrow"
              deg1=""
              deg2=""
              image=""
            />
            <ComingWeather
              class1="right"
              date="Sun, 7 Jun"
              deg1=""
              deg2=""
              image=""
            />
            <ComingWeather
              class1="left"
              date="Mon, 8 Jun"
              deg1=""
              deg2=""
              image=""
            />
            <ComingWeather
              class1="right"
              date="Tue, 9 Jun"
              deg1=""
              deg2=""
              image=""
            />
            <ComingWeather
              class1="left"
              date="Wed, 10 Jun"
              deg1=""
              deg2=""
              image=""
            />
          </div>
          <Highlight />
        </div>
      </main>
    </div>
  );
}

export default App;
