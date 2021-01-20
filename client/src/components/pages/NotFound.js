import React, { Component } from "react";
import Home from "./Home.js";
import "../../utilities.css";
class NotFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Home>
        <div className="u-flex">
          <div className="u-emptySpace" />
          <h1>404 Not Found :(</h1>
          <div className="u-emptySpace" />
        </div>
      </Home>
    );
  }
}

export default NotFound;
