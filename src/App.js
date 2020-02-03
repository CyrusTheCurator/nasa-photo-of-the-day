import React, { useState, useEffect } from "react";
import "./App.css";
import Banner from "./Banner";
import Header from "./Header/Header";
import ImageComponent from "./ImageComponent";

function App() {
  const [currentImageObj, setCurrentImageObj] = useState(
    "No images loaded yet"
  );

  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        console.log(response);
        setCurrentImageObj(response);
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      });
  }, []);

  return (
    <div className="App">
      <Banner />
      <Header />
      <ImageComponent currentImageObj={currentImageObj} />
    </div>
  );
}

export default App;
