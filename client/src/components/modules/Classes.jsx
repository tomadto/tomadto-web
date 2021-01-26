import React, { useState, useEffect, useCallback } from "react";

import Home from "../pages/Home.js";
import "./Classes.css";

import "../../utilities.css";

const Classes = (props) => {
  return (
    <Home place="classes">
      {" "}
      <div className="u-flex">
        <div className="u-emptySpace" />
        <div>🚧 Under construction! Class galleries coming soon. 🚧</div>
        <div className="u-emptySpace" />
      </div>
      <div className="Classes-container">
        <div className="u-emptySpace" />
        <div className="Classes-contentContainer">
          <h2>2020-2021</h2>
          <div className="Classes-year">
            <section className="Classes-semester">
              {" "}
              <h3>Fall</h3>
              <p>2.s009: Explorations in Product Design</p>
              <p>6.810: Engineering Interactive Technologies</p>
              <p>CMS.S61: Transmedia Art, Extraction, Environmental Justice</p>
              {/* <p>2000</p> */}
            </section>
            <section className="Classes-semester">
              {" "}
              <h3>Spring</h3> <p className="u-it">in progress</p>
            </section>
            <section className="Classes-semester">
              {" "}
              <h3>IAP/January</h3> <p>6.148: web.lab (staff!)</p>
            </section>
          </div>
          <h2>2019-2020</h2>
          <div className="Classes-year">
            <section className="Classes-semester">
              {" "}
              <h3>Fall</h3>
              <p>2.671: Measurement and Instrumentation</p>
              <p>2.s972: Making Virtual Reality and Immersive Experiences</p>
              <p>4.021: Design Studio: How to Design</p>
              <p>4.500: Design Computation: Art, Objects, Space</p>
              <p>24.917: Conlangs: Construct a Language</p>
            </section>
            <section className="Classes-semester">
              {" "}
              <h3>Spring</h3>
              <p>2.005: Thermo-Fluids Engineering I</p>
              <p>4.022: Design Studio: Design Techniques and Technologies</p>
              <p>21G.095: Cultures of Music in East Asia</p>
            </section>
            <section className="Classes-semester">
              {" "}
              <h3>IAP/January</h3> <p>6.148: web.lab</p>
            </section>
          </div>
          <h2>2018-2019</h2>
          <div className="Classes-year">
            <section className="Classes-semester">
              {" "}
              <h3>Fall</h3>
              <p>2.001: Mechanics and Materials I</p>
              <p>2.003: Dynamics and Control I</p>
              <p>5.111: Principles of Chemical Science</p>
              <p>21G.501: Japanese I</p>
            </section>
            <section className="Classes-semester">
              {" "}
              <h3>Spring</h3>
              <p>2.007: Design and Manufacturing I</p>
              <p>2.086: Numerical Computation</p>
              <p>2.678: Electronics for Mechanical Systems</p>
              <p>4.657: Design: The History of Making Things</p>
            </section>
            <section className="Classes-semester">
              {" "}
              <h3>IAP/January</h3> <p>2.670: Mechanical Engineering Tools</p>
            </section>
          </div>
          <h2>2017-2018</h2>
          <div className="Classes-year">
            <section className="Classes-semester">
              {" "}
              <h3>Fall</h3>
              <p>7.016: Introductory Biology</p>
              <p>8.012: Physics I</p>
              <p>18.02: Calculus II</p>
              <p>21G.027: Visualizing Japan in the Modern World</p>
            </section>
            <section className="Classes-semester">
              {" "}
              <h3>Spring</h3>
              <p>2.00B: Toy Product Design</p>
              <p>6.08: Interconnected Embedded Systems</p>
              <p>8.02: Physics II</p>
              <p>18.03: Differential Equations</p>
            </section>
            <section className="Classes-semester">
              {" "}
              <h3>IAP/January</h3> <p>6.S087: Frame by Frame: Animate with Stop Motion!</p>
            </section>
          </div>
        </div>
        <div className="u-emptySpace" />
      </div>
    </Home>
  );
};

export default Classes;
