import React, { Component } from "react";

import "../../utilities.css";
import "./Home.css";
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
      <>
        <p>Hello World</p>
      </>
    );
  }
}

export default Home;
