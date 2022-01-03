import React from "react";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div id="heading">
          <h2>devjobs</h2>
        </div>
        <div id="toggle">
          <input type="checkbox" id="switch" />
          <label htmlFor="switch" id="toggle-label"></label>
        </div>
      </div>
    </header>
  );
};

export default Header;
