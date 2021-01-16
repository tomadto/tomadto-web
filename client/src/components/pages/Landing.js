import React, { Component } from "react";

import "../../utilities.css";
// import "./Home.css";
// import lorem from "../modules/lorem.js"
import lorem from "../modules/lorem.json"
function Landing(props){

    return (
      <div className="Home-container Home-flex">
        {/* <div className="Home-emptySpace"/> */}
        <div className="Home-text">
          {lorem.lorem}
        </div>
        {/* <div className="Home-emptySpace"/> */}
      </div>
    );
  
}

export default Landing;
