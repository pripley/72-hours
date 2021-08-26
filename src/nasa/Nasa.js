import React, { useEffect, useState } from "react";

const baseURL = "https://api.nasa.gov/planetary/earth/imagery";
const key = "g2Aa7esA2tdERwMZ1r7P0RlHzNLvAfuvMLaONh9R";

const Nasa = () => {
  let lon = "86.1581";
  let lat = "39.7684";
  const [image, displayImage] = useState('');

  const fetchResults = () => {
    let url = `${baseURL}?lat=${lat}&lon=${lon}&api_key=${key}`;

    fetch(url)
      .then((res) => res.blob())      
      .then((image) => displayImage(URL.createObjectURL(image)))
      .catch((err) => console.log(err));
      
  };

  useEffect(fetchResults,[])

  return (
    <div className="main">
      <div className="mainDiv">        
        <p><img src={image} alt="" style={{ width: 300 }} /></p>
      </div>
    </div>
  );
};

export default Nasa;
