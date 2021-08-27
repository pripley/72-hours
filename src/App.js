import "./App.css";
import React, { useState, useEffect } from "react";
import Nasa from "./nasa/Nasa";
import Weather from "./weather/Weather";
import Ticketmaster from "./ticketmaster/Ticketmaster";

function App() {
<<<<<<< HEAD
  const [location, setLocation] = useState({});

  let locationGrabber = () => {
    navigator.geolocation.getCurrentPosition((loc) => {
      setLocation(loc);
      console.log(location);
    });
  };
=======
  const [location, setLocation] = useState({}) 
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  
 async function locationGrabber(){
        await navigator.geolocation.getCurrentPosition((loc) => {
        setLatitude(loc.coords.latitude)
        setLongitude(loc.coords.longitude)
        setLocation(loc)
        localStorage.setItem('latitude', loc.coords.latitude )
        localStorage.setItem('longitude', loc.coords.longitude)
        console.log(loc)
       })
       

  }
>>>>>>> 5cd0b4ad859405a94145e053e558ac54516fa025

  useEffect(() => {
    locationGrabber();
  }, []);
  return (
    <div className="App">
<<<<<<< HEAD
      <Nasa location={location} />
      <Weather location={location} />
      <Ticketmaster location={location} />
=======
      <Nasa location={location}/>
      <Weather location={location}/>
      <Ticketmaster lat={latitude} long={longitude}/>
>>>>>>> 5cd0b4ad859405a94145e053e558ac54516fa025
    </div>
  );
}

export default App;
