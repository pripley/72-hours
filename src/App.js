import "./App.css";
import React, { useState, useEffect } from "react";
import Nasa from "./nasa/Nasa";
import Weather from "./weather/Weather";
import Ticketmaster from "./ticketmaster/Ticketmaster";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Target from "./Components/Target";

function App() {
  const [location, setLocation] = useState({});
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [operationCol, setOperationCol] = useState("");
  const [operationAni, setOperattionAni] = useState("");  

  async function locationGrabber() {
    await navigator.geolocation.getCurrentPosition((loc) => {
      setLatitude(loc.coords.latitude);
      setLongitude(loc.coords.longitude);
      setLocation(loc);
      localStorage.setItem("latitude", loc.coords.latitude);
      localStorage.setItem("longitude", loc.coords.longitude);
      console.log(loc);
    });
  }

  useEffect(() => {
    locationGrabber();
  }, []);

  return (
    <div className="main">
      <div className="mainDiv">
        <Header />
        <div className="mainContent">         
            <div>              
              <Nasa lat={latitude} long={longitude} />
              <Target/>
            </div>
            <div>
              <Weather lat={latitude} long={longitude} />
              <Ticketmaster lat={latitude} long={longitude} />
            </div>            
          </div>          
          <Footer />
        </div>
       
      </div>   
  );
}

export default App;
