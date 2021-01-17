import React, { useState, useEffect, useCallback } from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Home from "./pages/Home.js";
import NavBar from "./modules/NavBar.js";

import "../utilities.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);
/**
 * Define the "App" component as a class.
 */
const App = () => {
  // makes props available in this component

  // componentDidMount() {}

  // setUser = (user) => {
  //   this.setState({ user });
  // };

  // handleLogout = () => {
  //   this.setState({ user: undefined });
  // };

  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home
            // path="/"
            // setUser={this.setUser}
            // logout={this.handleLogout}
            // user={this.state.user}
            />
          </Route>
          <Route component={NotFound} default />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
