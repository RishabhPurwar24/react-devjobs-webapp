import React from "react";
import BgPatternHeader from "../assets/desktop/bg-pattern-header.svg";
import Logo from "../assets/desktop/logo.svg";

const Header = () => {
  return (
    <header>
      <div id="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div class="toggle"></div>
    </header>
  );
};

export default Header;
