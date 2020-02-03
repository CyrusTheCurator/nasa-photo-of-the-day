import React from "react";
import "./Banner.css";
import logoImg from "./Images/NASAmeatball1200.jpg";
function Banner() {
  return (
    <div className="banner">
      <img id="bannerImg" src={logoImg} alt="NASA Logo" />
    </div>
  );
}
export default Banner;
