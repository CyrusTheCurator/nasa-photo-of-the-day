import React from "react";
import HeaderAnchorLinks from "./HeaderAnchorLinks";
import HeaderMenuButton from "./HeaderMenuButton";
import "./Header.css";

function Header() {
  return (
    <div className="headerContainer">
      <HeaderMenuButton />
      <HeaderAnchorLinks />
    </div>
  );
}

export default Header;
