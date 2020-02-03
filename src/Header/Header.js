import React from "react";
import HeaderAnchorLink from "./HeaderAnchorLink";
import HeaderMenuButton from "./HeaderMenuButton";
import "./Header.css";

function Header() {
  return (
    <div className="headerContainer">
      <HeaderMenuButton />
      <HeaderAnchorLink />
    </div>
  );
}

export default Header;
