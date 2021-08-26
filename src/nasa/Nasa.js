import React, { useEffect, useState } from "react";

const baseURL = "https://api.nasa.gov/planetary/earth/imagery";
const key = "g2Aa7esA2tdERwMZ1r7P0RlHzNLvAfuvMLaONh9R";

const Nasa = (props) => {
  let lat = "1.5";
  let lon = "100.75";

  const [image, displayImage] = useState("");

  const fetchResults = async () => {
    let url = `${baseURL}?lon=${lon}&lat=${lat}&api_key=${key}`;

    fetch(url)
      .then((res) => res.blob())
      .then((image) => displayImage(URL.createObjectURL(image)))
      .catch((err) => console.log(err));
  };

  useEffect(fetchResults, []);

  return (
    <div className="main">
      <div className="mainDiv">
        <h2>NASA Landsat 8 image</h2>
        <p>
          <img src={image} alt="" style={{ width: 300 }} />
        </p>
      </div>
    </div>
  );
};

export default Nasa;
