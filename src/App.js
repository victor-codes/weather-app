import React, { useState, useEffect, lazy, Suspense } from "react";
import Highlight from "./components/Highlight";
import ComingWeather from "./components/ComingWeather";
import Degree from "./components/Degree";
import Sidebar from "./components/Sidebar";
import formatDate from "./components/formatDate";
import "./App.css";
const SearchBar = lazy(() => import("./components/SearchBar"));

function App() {
  const [fahrenheit, setFahrenheit] = useState(false);
  const [toggleSearchBar, setToggleSearchBar] = useState(false);
  const [appState, setAppState] = useState({
    isLoading: true,
    data: null,
  });
  const proxyurl = "https://api.allorigins.win/raw?url=";
  let lattLong;

  function thirdFetch(query) {
    let apiUrl3 = `https://www.metaweather.com/api/location/search/?query=${query}`;
    fetch(proxyurl + apiUrl3)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTp error! status: ${response.status}`);
        } else {
          return response;
        }
      })
      .then((res) => {
        res.json();
      })
      .then((res) => {
        lattLong = res;
        console.log(lattLong);
      })
      .catch((err) =>
        console.log(
          `There is an error with your fetch operation: ${err.message}`
        )
      );
  }

  function secondFetch(woeid) {
    let apiUrl = `https://www.metaweather.com/api/location/${woeid}`;
    return fetch(proxyurl + apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          return response;
        }
      })
      .then((res) => res.json())
      .then((res) => {
        setAppState({ isLoading: false, data: res });
      })
      .catch((err) =>
        console.log(
          `There is a problem with your fetch operation: ${err.message}`
        )
      );
  }

  function handleSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const apiUrl = `https://www.metaweather.com/api/location/search/?lattlong=${latitude},${longitude}`;

    fetch(proxyurl + apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          return response;
        }
      })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let woeid = res[0]["woeid"];
        secondFetch(woeid);
      })
      .catch((err) => {
        console.log("Can’t access " + err.message + apiUrl + " response");
      });
  }

  function handleError() {
    alert(
      "Unable to retrieve your location, you need to allow access your location"
    );
  }

  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    }
  }, [setAppState]);

  const weather = [
    {
      index: "1",
      id: "second-day",
      nextday: true,
    },
    {
      index: "2",
      id: "third-day",
    },
    {
      index: "3",
      id: "fourth-day",
    },
    {
      index: "4",
      id: "fifth-day",
    },
    {
      index: "5",
      id: "sixth-day",
    },
  ];

  const WeatherList = weather.map((data) => (
    <ComingWeather
      id={data.id}
      index={data.index}
      data={appState.data}
      fahr={fahrenheit}
      key={data.id}
      nextday={data.nextday}
    />
  ));

  if (appState.isLoading) {
    return (
      <div className="App">
        <div className="parent">
          <div className="container">
            <div className="child"></div>
          </div>
        </div>
        <p
          style={{
            textAlign: "center",
            fontSize: "1.6rem",
            color: "#ffffff",
            marginTop: "80px",
          }}
        >
          Hold on, fetching data may take some time :)
        </p>
      </div>
    );
  } else
    return (
      <div className="App">
        <div className="aside1">
          <Sidebar
            data={appState.data}
            toggle={(val) => setToggleSearchBar(val)}
            fahr={fahrenheit}
          />

          <Suspense fallback={<div>Loading Search...</div>}>
            <SearchBar
              toggle={toggleSearchBar}
              hideToggle={(val) => setToggleSearchBar(val)}
            />
          </Suspense>
        </div>
        <main className="aside2">
          <div className="aside-content">
            <Degree convert={(r) => setFahrenheit(r)} />
            <div className="coming__weather__container wrap">{WeatherList}</div>
            <Highlight data={appState.data} />
          </div>
        </main>
      </div>
    );
}

export default App;
