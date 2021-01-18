import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Link } from "@reach/router";
import "../../utilities.css";
import "./Home.css";
// import "normalize.css";button>

import About from "../modules/About.jsx";
import Projects from "../modules/Projects.jsx";
import NotFound from "../pages/NotFound.js";
import lorem from "../modules/lorem.json";

const Home = (props) => {
  const pageToNumber = (page) => {
    if (page === "about") {
      return 0;
    } else if (page === "projects") {
      return 1;
    } else if (page === "fun") {
      return 2;
    } else {
      return "NotFound";
    }
  };
  const pages = [<About />, <Projects />];
  const [content, selectContent] = useState(() => {
    if (props.place) {
      return pageToNumber(props.place);
    } else {
      return 0;
    }
  });

  const handleClick = (e) => {
    console.log(e.target);
    selectContent(pageToNumber(e.target.textContent));
  };
  if (content === "NotFound") {
    return <NotFound />;
  } else {
    return (
      <>
        <div className="u-flex Home-miniNav-Container">
          <div className="u-emptySpace" />
          <div className="Home-miniNav">
            <Link
              to="/about"
              className={`${content === 0 ? "u-textDark " : "u-textGrey "}u-textCenter Home-link`}
              onClick={handleClick}
            >
              about
            </Link>
            <Link
              to="/projects"
              className={`${content === 1 ? "u-textDark " : "u-textGrey "}u-textCenter Home-link`}
              onClick={handleClick}
            >
              projects
            </Link>
            <Link
              to="/fun"
              className={`${content === 2 ? "u-textDark " : "u-textGrey "}u-textCenter Home-link`}
              onClick={handleClick}
            >
              fun
            </Link>
            <Link to="/fun" className="u-textGrey u-textCenter Home-link">
              resume
            </Link>
            <Link to="/fun" className="u-textGrey u-textCenter Home-link">
              classes
            </Link>
          </div>
          <div className="u-emptySpace" />
        </div>
        <hr className="Home-horizontalLine" />
        <div className="Home-container">
          {/* <div className="Home-emptySpace"/> */}
          {pages[content]}
          {/* <div className="Home-emptySpace"/> */}
        </div>
      </>
    );
  }
};

export default Home;
