import React, { useState, useEffect, useCallback } from "react";
import "../pages/Home.css";
import "./About.css";
import "../../utilities.css";
import me from "../../public/img/10-30-2020_Lecture_Adjusted-31.jpg";
import lorem from "./lorem.json";

const About = (props) => {
  // return <div className="Home-text">{lorem.lorem}</div>;
  return (
    <>
      <div className="About-container">
        <div className="About-emptySpace" />
        <div className="About-contentContainer">
          <section>
            <h2 className="u-textCenter">Welcome to my Website!</h2>
            <p>
              I'm Tommy Adebiyi! I sometimes go by <span className="u-it u-bold">tomadto</span>{" "}
              online. I'm a senior at MIT studying Mechanical Engineering & Design ("2A-Design"). I
              like making, coding, trying new things and all things design.
            </p>
            <p></p>
          </section>
          <section>
            <h3>What I've been up to...</h3>
            <ul>
              <li>making this website!</li>
              <li>staffing web.lab a web development class/competition.</li>
              <li>staying at home, playing games, sleeping, and taking care of myself :)</li>
            </ul>
          </section>
          <section>
            <h3>Classes I've taken...</h3>
            <h4>Fa</h4>
            <p>
              I'm Thomas Adebiyi! I sometimes go by <span className="u-it u-bold">tomadto</span>{" "}
              online. I'm a senior at MIT studying Mechanical Engineering & Design ("2A-Design"). I
              like making, coding, trying new things and all things design.
            </p>
          </section>
          <div className="u-flex">
            <div className="About-emptySpace" />
            <img src={me} alt="It's me tommy" />
            <div className="About-emptySpace" />
          </div>
        </div>
        <div className="About-emptySpace" />
      </div>
    </>
  );
};

export default About;
