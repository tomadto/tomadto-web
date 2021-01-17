import React, { useState, useEffect, useCallback } from "react";
// import "../pages/Home.css";
import "../../utilities.css";
import "./Projects.css";
import lorem from "./lorem.json";

const Projects = (props) => {
  return (
    <div className="Projects-container">
      <div className="Projects-emptySpace" />
      <div className="Projects-cardContainer">
        <div className="Projects-card">
          <div className="Projects-cardInner"></div>
        </div>
        <div className="Projects-card">
          <div className="Projects-cardInner"></div>
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
