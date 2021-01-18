import React, { useState, useEffect, useCallback } from "react";
// import { Link } from "react-router-dom";
import { Link } from "@reach/router";
// import "../pages/Home.css";
import "../../utilities.css";
import "./Projects.css";
import lorem from "./lorem.json";

//mobile friendliness https://stackoverflow.com/a/55288649

const Projects = (props) => {
  const cardContent = [
    { title: "osu", text: "osu is a game", link: "/projects/osu" },
    { title: "bosu", text: "bosu is a game", link: "/projects/bosu" },
    { title: "osu", text: "osu is a game", link: "/projects/osu" },
    { title: "bosu", text: "bosu is a game", link: "/projects/bosu" },
    { title: "osu", text: "osu is a game", link: "/projects/osu" },
    { title: "bosu", text: "bosu is a game", link: "/projects/bosu" },
    { title: "osu", text: "osu is a game", link: "/projects/osu" },
    { title: "bosu", text: "bosu is a game", link: "/projects/bosu" },
    { title: "osu", text: "osu is a game", link: "/projects/osu" },
    { title: "bosu", text: "bosu is a game", link: "/projects/bosu" },
    { title: "osu", text: "osu is a game", link: "/projects/osu" },
    { title: "bosu", text: "bosu is a game", link: "/projects/bosu" },
  ];
  () => cardContent.forEach((element) => element.push({ key: cardContent.findIndex(element) }));

  return (
    <div className="Projects-container">
      <div className="Projects-emptySpace" />
      <div className="Projects-cardContainer">
        {cardContent.map((card) => (
          <div
            key={card.key}
            className="Projects-card"
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
      <div className="Projects-emptySpace" />
    </div>
  );
};

export default Projects;
