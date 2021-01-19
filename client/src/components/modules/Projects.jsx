import React, { useState, useEffect, useCallback } from "react";
// import { Link } from "react-router-dom";
import { Link } from "@reach/router";
import ReactMarkdown from "react-markdown";

import Home from "../pages/Home.js";
import "../../utilities.css";
import "./Projects.css";
import "./backgrounds.css";
import lorem from "./lorem.json";
import ProjListing from "./ProjListing.js";

//mobile friendliness https://stackoverflow.com/a/55288649

const Projects = (props) => {
  const [cardContent, setCardContent] = useState(ProjListing);
  return (
    <Home place="projects">
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
                <p className="Projects-cardInnerText">
                  <ReactMarkdown>{card.text}</ReactMarkdown>
                </p>
                <div className="Projects-cardInnerLink">
                  {card.link
                    ? card.link.map((link) =>
                        link.external ? (
                          <a href={link.linkPath} role="button" tabIndex="0" aria-haspopup="true">
                            {link.linkName}
                          </a>
                        ) : (
                          <Link to={link.linkPath} role="button" tabIndex="0" aria-haspopup="true">
                            {link.linkName}
                          </Link>
                        )
                      )
                    : ""}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="u-emptySpace" />
      </div>
    </Home>
  );
};

export default Projects;
