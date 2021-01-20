import React, { useState, useEffect, useCallback } from "react";

import Home from "../pages/Home.js";

import "../../utilities.css";

const Play = (props) => {
  return (
    <Home place="play">
      <div className="u-flex">
        <div className="u-emptySpace" />
        <div>
          🚧 coming soon... but for a taste, check out{" "}
          <a href="https://steamcommunity.com/id/hintoftomadto" className="u-bold">
            my Steam
          </a>{" "}
          🚧
        </div>
        <div className="u-emptySpace" />
      </div>
    </Home>
  );
};

export default Play;
