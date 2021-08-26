import "./App.css";
import React, { useState, useEffect } from "react";
import Nasa from "./nasa/Nasa";
import Weather from "./weather/Weather";
import Ticketmaster from "./ticketmaster/Ticketmaster";

function App() {
  const [location, setLocation] = useState({});

  let locationGrabber = () => {
    navigator.geolocation.getCurrentPosition((loc) => {
      setLocation(loc);
      console.log(location);
    });
  };

  useEffect(() => {
    locationGrabber();
  }, []);
  return (
    <div className="App">
      <Nasa location={location} />
      <Weather location={location} />
      <Ticketmaster location={location} />
    </div>
  );
}

export default App;
