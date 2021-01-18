import React, { useState, useEffect, useCallback } from "react";

import "../../utilities.css";
import "./NavBar.css";
import { Link } from "react-router-dom";
const Footer = (props) => {
  return (
    <>
      <footer className="NavBar-container">
        <div className="u-flex NavBar-flexBox u-flex-justifyCenter"></div>
      </footer>
    </>
  );
};

export default Footer;
