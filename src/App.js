import React, { useState, useEffect } from "react";
import "./App.css";
import Banner from "./Banner";
import Header from "./Header/Header";
import ImageComponent from "./ImageComponent/ImageComponent";
import axios from "axios";

function App() {
  const [currentImageObj, setCurrentImageObj] = useState(
    "No images loaded yet"
  );

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14"
      )
      .then(response => {
        console.log(response.data.url);
        setCurrentImageObj(response.data);
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      });
  }, []);

  return (
    <div className="App">
      <Banner />
      <Header />
      <h1>Astronomy Photo Of The Day</h1>
      <ImageComponent currentImageObj={currentImageObj} />
    </div>
  );
}

export default App;
