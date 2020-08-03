import React, { Component } from "react";

import "../../utilities.css";
import "./NavBar.css";
import { Link } from "react-router-dom";
class NavBar extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <>
        <nav className="NavBar-container">
        <div className="NavBar-emptySpace"/>
          <div className="NavBar-flex">
            <header className="NavBar-title">tomadto/web</header>
            <div className="NavBar-link">home</div>
            <div className="NavBar-link">projects</div>
            <div className="NavBar-link">resume</div>
            <div className="NavBar-link">fun</div>
          </div>
          <div className="NavBar-emptySpace"/>
        </nav>
      </>
    );
  }
}

export default NavBar;
