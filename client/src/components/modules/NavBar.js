import React, { Component } from "react";

import "../../utilities.css";
import "./NavBar.css";
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
      <nav className="NavBar-container">
        <div className="NavBar-title">
          <header>tomadto/web</header>
        </div>
      </nav>
    );
  }
}

export default NavBar;
