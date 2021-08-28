import React, { useEffect, useState } from "react";

const baseURL = "https://api.nasa.gov/planetary/earth/imagery";
const key = "lSFZ05JWCGUDAxIivpigGy0h4Gg2mJtd2SkKQeFb";

const Nasa = (props) => {
  let lat = props.lat === 0 ? localStorage.getItem("latitude") : props.lat;
  let long = props.long === 0 ? localStorage.getItem("longitude") : props.long;

  const [image, displayImage] = useState("");

  const fetchResults = () => { 
      
    let date = new Date();
    date.setDate(date.getDate() - 3);
    date = date.toISOString().split("T")[0];
   
    let url = `${baseURL}?lon=${long}&lat=${lat}&date=${date}&api_key=${key}`;

    fetch(url)
      .then((res) => res.blob())
      .then((image) => displayImage(URL.createObjectURL(image)))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div className="nasa">
        <h2>Target Location</h2>
      <p>
        <img src={image} alt="Landsat 8 Image" />
      </p>
    </div>
  );
};

export default Nasa;
