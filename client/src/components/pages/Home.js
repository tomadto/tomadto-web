import React, { Component } from "react";

import "../../utilities.css";
import "./Home.css";
// import lorem from "../modules/lorem.js"
import lorem from "../modules/lorem.json";
import { Link } from "react-router-dom";
function Home(props) {
  return (
    <>
      <div className="u-flex Home-miniNav-Container">
        <div className="Home-emptySpace" />
        <div className="Home-miniNav u-flex u-flex-justifyCenter">
          <div className="u-textCenter Home-link">about</div>
          <div className="u-textCenter Home-link">projects</div>
          <div className="u-textCenter Home-link">fun</div>
        </div>
        <div className="Home-emptySpace" />
      </div>
      <hr className="Home-horizontalLine" />
      <div className="Home-container u-flex">
        {/* <div className="Home-emptySpace"/> */}
        <div className="Home-text">{lorem.lorem}</div>
        {/* <div className="Home-emptySpace"/> */}
      </div>
    </>
  );
}

export default Home;
