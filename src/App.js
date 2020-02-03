import React, { useState, useEffect } from "react";
import "./App.css";
import "./Banner";
import "./Header";
import "./ImageComponent";

function App() {
  return (
    <div className="App">
      <Banner />
      <Header />
      <ImageComponent />
    </div>
  );
}

export default App;
