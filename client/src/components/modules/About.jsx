import React, { useState, useEffect, useCallback } from "react";
import "../pages/Home.css";
import "../../utilities.css";
import lorem from "./lorem.json";

const About = (props) => {
  return <div className="Home-text">{lorem.lorem}</div>;
};

export default About;
