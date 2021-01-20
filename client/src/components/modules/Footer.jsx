import React, { useState, useEffect, useCallback } from "react";

import "../../utilities.css";
import "./Footer.css";
const Footer = (props) => {
  return (
    <>
      <footer className="Footer-container">
        <div className="Footer-containerTop">
          <div className="u-emptySpace" />
          <div className="Footer-oneColumn Footer-contentContainer">
            <div className="Footer-containerAuto">made by tomadto 👀</div>
            {/* <div>email: tadebiyi (at) mit.edu</div> */}
          </div>
          <div className="u-emptySpace" />
        </div>
        <div className="u-flex">
          <div className="u-emptySpace" />
          <div className="Footer-contentContainer">
            <a
              className="Footer-containerBottomContent"
              href="https://www.linkedin.com/in/tomad-to/"
            >
              linkedin
            </a>
            <a className="Footer-containerBottomContent" href="mailto:tadebiyi@mit.edu">
              email
            </a>
            <a className="Footer-containerBottomContent" href="mailto:tadebiyi@mit.edu">
              github
            </a>
          </div>
          <div className="u-emptySpace" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
