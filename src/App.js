import React, { useState, useEffect } from "react";
import "./App.css";
import Banner from "./Banner";
import Header from "./Header/Header";
import NavigationPanel from "./NavigationPanel/NavigationPanel";
import ImageComponent from "./ImageComponent/ImageComponent";
import axios from "axios";

function App() {
  const [currentImageObj, setCurrentImageObj] = useState(
    "No images loaded yet"
  );
  const today = new Date();
  let thisYear = today.getFullYear();
  let thisMonth = today.getMonth() + 1;
  let thisDay = today.getDate();

  if (thisMonth < 10) {
    thisMonth = "0" + thisMonth;
  }

  if (thisDay < 10) {
    thisDay = "0" + thisDay;
  }

  const [date, setDate] = useState(thisYear + "-" + thisMonth + "-" + thisDay);

  useEffect(() => {
    console.log(date);
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
      .then(response => {
        console.log(response.data.url);
        setCurrentImageObj(response.data);
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      });
  }, [date]);

  return (
    <div className="App">
      <Banner />
      <Header />
      <NavigationPanel date={date} setDate={setDate} today={today} />
      <h1>Astronomy Photo Of The Day</h1>
      <ImageComponent currentImageObj={currentImageObj} />
    </div>
  );
}

export default App;
