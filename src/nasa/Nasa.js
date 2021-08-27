import React, { useEffect, useState } from "react";

const baseURL = "https://api.nasa.gov/planetary/earth/imagery";
const key = "lSFZ05JWCGUDAxIivpigGy0h4Gg2mJtd2SkKQeFb";

const Nasa = (props) => {
  // let long = "100.75"
  // let lat = "1.5"
  console.log(props);
  let lat = props.lat === 0 ? localStorage.getItem("latitude") : props.lat;
  let long = props.long === 0 ? localStorage.getItem("longitude") : props.long;

  const [image, displayImage] = useState("");

  const fetchResults = async () => {
    let url = `${baseURL}?lon=${long}&lat=${lat}&date=2021-08-21&api_key=${key}`;

    fetch(url)
      .then((res) => res.blob())
      .then((image) => displayImage(URL.createObjectURL(image)))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchResults();
  }, []);

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
