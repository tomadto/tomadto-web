import React, { useState, useEffect, useCallback } from "react";
import { Link } from "@reach/router";
import ReactMarkdown from "react-markdown";
// import Modal from "react-modal";

import Home from "../pages/Home.js";
import "../../utilities.css";
import "./Projects.css";
import "./backgrounds.css";
import lorem from "./lorem.json";
import ProjListing from "./ProjListing.js";

//mobile friendliness https://stackoverflow.com/a/55288649

const Projects = (props) => {
  //   const [modalIsOpen, setIsOpen] = useState(false);
  //   const handleClick = () => {
  //     setIsOpen(!modalIsOpen);
  //   };
  const [cardContent, setCardContent] = useState(ProjListing);
  return (
    <Home place="projects">
      <div className="u-flex">
        <div className="u-emptySpace" />
        <div className="u-textCenter Projects-construction">
          🚧 As this site continues development, feel free to{" "}
          <a className="u-bold" href="https://tomadto.s-ul.eu/content/x5AlJQjG">
            view the last version of my portfolio here.
          </a>{" "}
          🚧
        </div>
        <div className="u-emptySpace" />
      </div>
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
              <div className="Projects-date">{card.date}</div>
              <div className="Projects-cardInner " role="button" tabIndex="0" aria-haspopup="true">
                <h3 className="Projects-cardInnerTitle">{card.title}</h3>
                <ReactMarkdown className="Projects-cardInnerText">{card.text}</ReactMarkdown>
                <div className="Projects-cardInnerLink">
                  {card.link &&
                    card.link.map((link) =>
                      link.external ? (
                        <a href={link.linkPath} role="button" tabIndex="0" aria-haspopup="true">
                          {link.linkName}
                        </a>
                      ) : (
                        <Link to={link.linkPath} role="button" tabIndex="0" aria-haspopup="true">
                          {link.linkName}
                        </Link>
                      )
                    )}
                  {card.more && (
                    <Link
                      to={card.more.path}
                      className="u-boldAlt"
                      style={{ color: "var(--text-dark)" }}
                    >
                      {" "}
                      read more ...
                    </Link>
                  )}
                  {/* <button onClick={handleClick}>click</button> */}
                  {/* <Modal isOpen={modalIsOpen} onRequestClose={handleClick}></Modal> */}
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
