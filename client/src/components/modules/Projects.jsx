import React, { useState, useEffect, useCallback } from "react";
// import { Link } from "react-router-dom";
import { Link } from "@reach/router";
// import "../pages/Home.css";
import "../../utilities.css";
import "./Projects.css";
import "./backgrounds.css";
import lorem from "./lorem.json";
import ProjListing from "./ProjListing.js";

//mobile friendliness https://stackoverflow.com/a/55288649

const Projects = (props) => {
  const [cardContent, setCardContent] = useState(ProjListing);
  return (
    <div className="Projects-container">
      <div className="u-emptySpace" />
      <div className="Projects-cardContainer">
        {cardContent.map((card) => (
          <div
            key={card.key}
            className={`Projects-card ${card.bgClass}`}
            role="button"
            tabIndex="0"
            aria-haspopup="true"
          >
            <div className="Projects-cardInner " role="button" tabIndex="0" aria-haspopup="true">
              <h3 className="Projects-cardInnerTitle">{card.title}</h3>
              <p className="Projects-cardInnerText">{card.text}</p>
              <Link
                to={card.link}
                className="Projects-cardInnerLink"
                role="button"
                tabIndex="0"
                aria-haspopup="true"
              >
                more...
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="u-emptySpace" />
    </div>
  );
};

export default Projects;
