import React, { useState, useEffect, useCallback } from "react";

import "../../utilities.css";
import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = (props) => {
  const [navStatus, updateNavStatus] = useState("NavBar-transparent");

  const handleScroll = (e) => {
    if (window.scrollY > 40) {
      if (navStatus !== "") {
        console.log(window.scrollY);
        updateNavStatus("");
      }
    } else {
      if (navStatus !== "NavBar-transparent") {
        console.log(window.scrollY);
        updateNavStatus("NavBar-transparent");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <nav className={`${navStatus} NavBar-container`}>
        <div className="u-flex NavBar-flexBox u-flex-justifyCenter">
          <h1 className="NavBar-title u-textCenter">tomadto/web</h1>
          {/* <div className="NavBar-link">home</div> */}
          {/* <div className="NavBar-link">projects</div> */}
          {/* <div className="NavBar-link">resume</div> */}
          {/* <div className="NavBar-link">fun</div> */}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
