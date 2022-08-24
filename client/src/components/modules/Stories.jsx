import React, { useState, useEffect, useCallback } from "react";
import { Link } from "@reach/router";
import ReactMarkdown from "react-markdown";

import Home from "../pages/Home.js";
import "../../utilities.css";
import cardContent from "./ProjListing.js";

const Stories = (props) => {
  return (
    <Home>
      <div className="u-flex">
        <div className="u-emptySpace" />
        <h1>404 Not Found :)</h1>
        <h1>404 Not Found :)</h1>
        {cardContent.map((card) => (
          <p>test</p>
        ))}
        <div className="u-emptySpace" />
      </div>
    </Home>
  );
};

export default Stories;
