import React, { useState, useEffect, lazy, Suspense } from "react";
import Highlight from "./components/Highlight";
import ComingWeather from "./components/ComingWeather";
import Degree from "./components/Degree";
import Sidebar from "./components/Sidebar";
import Button from "./components/Button";
// import SearchBar from "./components/SearchBar";
import "./App.css";
const SearchBar = lazy(() => import("./components/SearchBar"));

function App() {
  const proxyurl = "https://api.allorigins.win/raw?url=";

  const [fahrenheit, setFahrenheit] = useState(false);
  const [toggleSearchBar, setToggleSearchBar] = useState(false);
  const [userLocation, setUserLocation] = useState(false);

  const [list, setList] = useState([
    { title: "London", woeid: "44418", latt_long: "51.506321,-0.12714" },
    { title: "Barcelona", woeid: "753692", latt_long: "41.385578,2.168740" },
    {
      title: "Long beach",
      woeid: "2441472",
      latt_long: "33.766720,-118.192398",
    },
  ]);

  const [appState, setAppState] = useState({
    isLoading: true,
    data: null,
  });

  function thirdFetch(query) {
    if (query.length > 0) {
      let apiUrl3 = `https://www.metaweather.com/api/location/search/?query=${query}`;

      fetch(proxyurl + apiUrl3)
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
          setList(res);
        })
        .catch((err) =>
          console.log(
            `There is an error with your fetch operation: ${err.message}`
          )
        );
    }
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

  function handleError(error) {
    alert(`ERROR(${error.code}): ${error.message}`);
  }

  const options = {
    enableHighAccuracy: true,
    maximumAge: 10000,
    timeout: 10000,
  };

  useEffect(() => {
    setTimeout(() => {
      if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser");
      } else {
        navigator.geolocation.getCurrentPosition(
          handleSuccess,
          handleError,
          options
        );
      }
    }, 2500);
  }, [userLocation]);

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

  const locationList = list.map((data) => (
    <Button
      value={data.title}
      woeid={data.woeid}
      lattLong={data.latt_long}
      key={data.woeid}
      handleClick={(val) => {
        setAppState({ isLoading: true });
        secondFetch(val);
        setToggleSearchBar(false);
      }}
    />
  ));

  const LoadInitial = (
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

  const LoadedFetched = (
    <div className="App">
      <div className="aside1">
        <Sidebar
          data={appState.data}
          toggle={(val) => setToggleSearchBar(val)}
          fahr={fahrenheit}
          location={userLocation}
          load={(val) => setUserLocation(val)}
        />

        <Suspense fallback={<div>Loading Search...</div>}>
          <SearchBar
            onChange={(val) => thirdFetch(val)}
            toggle={toggleSearchBar}
            isOpen={(val) => setToggleSearchBar(val)}
          >
            {locationList}
          </SearchBar>
        </Suspense>
      </div>
      <main className="aside2">
        <div className="aside-content">
          <Degree fahr={fahrenheit} convert={(r) => setFahrenheit(r)} />
          <div className="coming__weather__container wrap">{WeatherList}</div>
          <Highlight data={appState.data} />
        </div>
      </main>
    </div>
  );

  return appState.isLoading ? LoadInitial : LoadedFetched;
}

export default App;
