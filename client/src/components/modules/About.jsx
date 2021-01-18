import React, { useState, useEffect, useCallback } from "react";
import "../pages/Home.css";
import "./About.css";
import "../../utilities.css";
// import me from "../../public/img/10-30-2020_Lecture_Adjusted-31.jpg";
import lorem from "./lorem.json";

const About = (props) => {
  // return <div className="Home-text">{lorem.lorem}</div>;
  return (
    <>
      <div className="About-container">
        <div className="u-emptySpace" />
        <div className="About-contentContainer">
          <section>
            <h2 className="u-textCenter">Welcome to my Website!</h2>
            <img src="https://tomadto.s-ul.eu/content/yWO6vpgN" alt="It's me tommy" />
            <p>
              I'm Tommy Adebiyi! I sometimes go by <span className="u-bold">tomadto</span> online.
              I'm a senior at MIT studying Mechanical Engineering & Design ("2A-Design"). I like
              making, coding, trying new things and all things design.
            </p>
            <p></p>
          </section>
          <section>
            <h3>What I've been up to...</h3>
            <ul>
              <li>making this website!</li>
              <li>
                staffing{" "}
                <a href="https://weblab.mit.edu" className="u-bold">
                  web.lab
                </a>
                , a web development class and competition.
              </li>
              <li>
                staying at home, playing games, sleeping (kinda...), and taking care of myself. 😊
              </li>
              <li>preparing for my 8th and last semester at MIT.</li>
            </ul>
          </section>
          <section>
            <h3>What I've recently done...</h3>
            <ul>
              <li>survived 2020. 😰</li>
              <li>
                <a
                  href="https://s009kindness.com/images/productSheets/red_spartan_product_sheet_sm.pdf"
                  className="u-bold"
                >
                  launched a product prototype
                </a>{" "}
                as a part of the{" "}
                <a href="https://s009kindness.com/" className="u-bold">
                  2.s009
                </a>{" "}
                red team!
              </li>

              <li>said goodbye to next house...</li>
            </ul>
          </section>
          <section>
            <h4>
              This website was coded in <a href="https://reactjs.org">React!</a>
            </h4>
            <p></p>
          </section>
          <div className="u-flex">
            <div className="u-emptySpace" />

            <div className="u-emptySpace" />
          </div>
        </div>
        <div className="u-emptySpace" />
      </div>
    </>
  );
};

export default About;
