import React, { Component } from "react";
import Home from "./Home.js";

class NotFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Home>
        <h1>404 Not Found</h1>
        <p>The page you requested couldn't be found.</p>
      </Home>
    );
  }
}

export default NotFound;
