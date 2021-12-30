import React from "react";
import Logo from "../assets/desktop/logo.svg";

const Header = () => {
  return (
    <header>
      <div class="header-container">
        <h2>devjobs</h2>
        <div id="toggle">
          <input type="checkbox" id="switch" />
          <label htmlFor="switch"></label>
        </div>
      </div>
    </header>
  );
};

export default Header;
