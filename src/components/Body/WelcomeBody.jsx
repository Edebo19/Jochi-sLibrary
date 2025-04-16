import React from "react";
import "../CSS/Body.css";

const WelcomeBody = ({setHome}) => {
  return (
    <div className="WelcomeBody">
      <div className="hold-writeup">
        <h3>Looking for the best poems? <br/> We've got you covered</h3>
        <p>
          Scan through our variety of carefully selected poems that makes you
          want to jump into poetry.
        </p>
        <button className="homebtn" onClick={()=> setHome(false)}>Start Looking</button>
      </div>
    </div>
  );
};

export default WelcomeBody;
