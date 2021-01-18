import React, { useState, useEffect, useCallback } from "react";

import "../../utilities.css";
import "./Footer.css";
const Footer = (props) => {
  return (
    <>
      <footer className="Footer-container">
        <div className="u-emptySpace" />
        <div>made by tomadto 👀 </div>
        <div>email</div>
        <div>linkedin</div>
        {/* <div>twitter</div> */}
        <div className="u-emptySpace" />
      </footer>
    </>
  );
};

export default Footer;
