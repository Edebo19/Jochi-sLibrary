import React from "react";
import "../CSS/Header.css";
import { BiBook } from "react-icons/bi";

const Header = () => {
  return (
    <div className="Header">
      <div className="HeaderWrapper">
        <div className="Logo">
          <BiBook size={30} />
          <i>JOCHI'S LIBRARY</i>
        </div>
        <p>Open App</p>
      </div>
    </div>
  );
};

export default Header;
