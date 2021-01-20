import React, { useState, useEffect, useCallback } from "react";

import Home from "../pages/Home.js";

import "../../utilities.css";

const Play = (props) => {
  return (
    <Home place="play">
      <div className="u-flex">
        <div className="u-emptySpace" />
        <div>🚧 coming soon... 🚧</div>
        <div className="u-emptySpace" />
      </div>
    </Home>
  );
};

export default Play;
