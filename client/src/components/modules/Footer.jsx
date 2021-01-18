import React, { useState, useEffect, useCallback } from "react";

import "../../utilities.css";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = (props) => {
  return (
    <>
      <footer className="Footer-container">
        <div className="u-emptySpace" />
        <div>made by tomadto 👀</div>
        <div className="u-emptySpace" />
      </footer>
    </>
  );
};

export default Footer;
