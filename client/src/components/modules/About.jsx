import React, { useState, useEffect, useCallback } from "react";
import "../pages/Home.css";
import Home from "../pages/Home.js";
import "./About.css";
import "../../utilities.css";
// import me from "../../public/img/10-30-2020_Lecture_Adjusted-31.jpg";
import lorem from "./lorem.json";

const About = (props) => {
  // return <div className="Home-text">{lorem.lorem}</div>;
  return (
    <Home place="about">
      <div className="About-container">
        <div className="u-emptySpace" />
        <div className="About-contentContainer">
          <h2 className="u-textCenter">Hello, I'm Tommy Adebiyi.</h2>
          <div className="About-contentContainerImg">
            <img src="https://tomadto.s-ul.eu/content/yWO6vpgN" alt="It's me tommy" />
          </div>
          <div className="About-contentContainerBody">
            <section>
              <p>
                I'm a recent graduate of MIT in Mechanical Engineering & Design. I like making,
                coding, gaming, trying new things and all things design. I use she/they pronouns!
              </p>
              <p></p>
            </section>
            <section>
              <h3>What I've been up to...</h3>
              <ul>
                <li>maintaining this website!</li>
                <li>
                  recently left Heirloom, a carbon removal startup near San Francisco, and trying to
                  find the path I want to take next.
                </li>

                <li>
                  riding{" "}
                  <a href="https://tomadto.s-ul.eu/vinSHsOF" className="u-bold">
                    my euc
                  </a>
                  , learning how to 3d print, figuring out what it means to "adult"...
                </li>
              </ul>
            </section>
            <section>
              <h3>What I've recently done...</h3>
              <ul>
                <li>
                  staffed{" "}
                  <a href="http://web.mit.edu/2.009/www/index.html" className="u-bold">
                    2.009: Product Engineering Processes
                  </a>
                  , a senior-level MechE capstone class, in fall 2021. (take a look at{" "}
                  <a href="https://tomadto.s-ul.eu/cY8wbSNa" className="u-bold">
                    this cool bokeh
                  </a>{" "}
                  I made.)
                </li>
                <li>graduated from MIT!!!</li>
                <li>
                  staffed{" "}
                  <a href="https://weblab.mit.edu" className="u-bold">
                    web.lab
                  </a>
                  , a web development class and competition.
                </li>
                <li>
                  <a
                    href="https://s009kindness.com/images/productSheets/red_spartan_product_sheet_sm.pdf"
                    className="u-bold"
                  >
                    launched a product prototype
                  </a>{" "}
                  as a part of the{" "}
                  <a href="https://s009kindness.com/" className="u-bold">
                    MIT 2.s009
                  </a>{" "}
                  red team!
                </li>
                <li>
                  <a href="https://tomadto.s-ul.eu/content/ajSO5m3n" className="u-bold">
                    made a cool jacket
                  </a>{" "}
                  that makes configurable music and noise as you move and dance with it.
                </li>
                <li>said goodbye to next house...</li>
              </ul>
            </section>
            <section>
              <p>
                <span className="u-it">
                  This site is built in{" "}
                  <a href="https://reactjs.org" className="u-bold">
                    React
                  </a>{" "}
                  and a work in progress. Check out the repo on{" "}
                  <a href="https://github.com/tomadto/tomadto-web" className="u-bold">
                    GitHub!
                  </a>
                </span>
              </p>
            </section>
          </div>
          <div className="u-flex">
            <div className="u-emptySpace" />
            <div className="u-emptySpace" />
          </div>
        </div>
        <div className="u-emptySpace" />
      </div>
    </Home>
  );
};

export default About;
