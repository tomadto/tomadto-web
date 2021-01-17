import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../utilities.css";
import "./Home.css";
// import "normalize.css";button>

import About from "../modules/About.jsx";
import Projects from "../modules/Projects.jsx";
import lorem from "../modules/lorem.json";

const Home = (props) => {
  const [content, selectContent] = useState(0);
  const pages = [<About />, <Projects />];
  // useEffect(() =>{

  // })
  const handleClick = (e) => {
    if (e.target.textContent === "about") {
      selectContent(0);
    } else if (e.target.textContent === "projects") {
      selectContent(1);
    } else if (e.target.textContent === "fun") {
      selectContent(2);
    }
  };
  return (
    <>
      <div className="u-flex Home-miniNav-Container">
        <div className="Home-emptySpace" />
        <div className="Home-miniNav u-flex u-flex-justifyCenter">
          <button
            className={`${content === 0 ? "u-textDark " : "u-textGrey "}u-textCenter Home-link`}
            onClick={handleClick}
          >
            about
          </button>
          <button
            className={`${content === 1 ? "u-textDark " : "u-textGrey "}u-textCenter Home-link`}
            onClick={handleClick}
          >
            projects
          </button>
          <button
            className={`${content === 2 ? "u-textDark " : "u-textGrey "}u-textCenter Home-link`}
            onClick={handleClick}
          >
            fun
          </button>
        </div>
        <div className="Home-emptySpace" />
      </div>
      <hr className="Home-horizontalLine" />
      <div className="Home-container u-flex">
        {/* <div className="Home-emptySpace"/> */}
        {pages[content]}
        {/* <div className="Home-emptySpace"/> */}
      </div>
    </>
  );
};

export default Home;
