import React, { useState, useEffect, useCallback } from "react";
// import { Link } from "react-router-dom";
import { Link } from "@reach/router";
// import "../pages/Home.css";
import "../../utilities.css";
import "./Projects.css";
import lorem from "./lorem.json";

const Projects = (props) => {
  // useEffect(() => {
  //   document.addEventListener("touchstart", function () {}, true);
  //   // return () => {
  //   //   document.removeEventListener("touchstart", function () {}, true);
  //   // };
  // });
  return (
    <div className="Projects-container">
      <div className="Projects-emptySpace" />
      <div className="Projects-cardContainer">
        {/*idk if the <a> are truly necessary but see https://stackoverflow.com/a/55288649 */}
        <Link
          to="/landing"
          className="Projects-card"
          role="button"
          tabIndex="0"
          aria-haspopup="true"
        >
          <div className="Projects-cardInner " role="button" tabIndex="0" aria-haspopup="true">
            <h3 className="Projects-cardInnerTitle">a title</h3>
            <p className="Projects-cardInnerText">{lorem.lorem}</p>
          </div>
        </Link>
        <div className="Projects-card">
          <div className="Projects-cardInner "></div>
        </div>
        <div className="Projects-card"></div>
        <div className="Projects-card"></div>
        <div className="Projects-card"></div>
        <div className="Projects-card"></div>
        <div className="Projects-card"></div>
      </div>
      <div className="Projects-emptySpace" />
    </div>
  );
  // return <div className="Home-text">lol</div>;
};

export default Projects;
