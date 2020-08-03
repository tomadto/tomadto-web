import React, { Component } from "react";

import "../../utilities.css";
import "./Home.css";
import lorem from "../modules/lorem.js"
class Home extends Component {
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
      <div className="Home-container Home-flex">
        <div className="Home-emptySpace"/>
        <div className="Home-text">
          {lorem}
        </div>
        <div className="Home-emptySpace"/>
      </div>
    );
  }
}

export default Home;
