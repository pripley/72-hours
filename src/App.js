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
  const [operationCol, setOperationCol] = useState('')
  const [operationAni,setOperattionAni] = useState('')

  function OperationGenerator(){
    function randomNumber(min, max) {
      let step1 = max - min + 1;
      let step2 = Math.random() * step1;
      let result = Math.floor(step2) + min
      return result
    }
    let operationColor = ['Red','Blue','Yellow','Pink','Violet','Green','Brown','Gray','White','Black','Scarlet','Marron','Saphire','Umber','Chocolate','Steel','Navy','Flamingo','Mint','Pearl','Peach','Gold']
    let operationAnimal = ['Cat','Dog','Wolf','Mouse','Rat','Wombat','Fox','Horse','Donkey','Zebra','Snake','Aligater','Lion','Naked-Molerat','Hawk','Pigion','Pikichu','Eagle','Dodo','Trout','Wolverine']
    let OppNum = randomNumber(0,19)
    setOperationCol(operationColor[randomNumber(OppNum)])
    console.log(operationCol)
    }
    
  
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

          <div>
            <div></div>
            <Nasa lat={latitude} long={longitude} />
          </div>
          <div>
            <Weather lat={latitude} long={longitude} />
            <Ticketmaster lat={latitude} long={longitude} />
          </div>
          <Nasa lat={latitude} long={longitude} />
        </div>      
        
        <div>
          <Weather lat={latitude} long={longitude} />
          <Ticketmaster lat={latitude} long={longitude} />

        </div>
        <Footer />
      </div>
     
    </div>
    
  );
}

export default App;
