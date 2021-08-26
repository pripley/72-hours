
import './App.css';
import React, { useState, useEffect } from 'react';
import Nasa from './nasa/Nasa';
import Weather from './weather/Weather';
import Ticketmaster from './ticketmaster/Ticketmaster';



function App() {
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

  useEffect(() => {
    locationGrabber()
  }, [])
  return (
    <div className="App">
      <Nasa location={location}/>
      <Weather location={location}/>
      <Ticketmaster lat={latitude} long={longitude}/>
    </div>
  );
}

export default App;
