import React, { useState, useEffect, useCallback } from "react";

// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Home from "./pages/Home.js";
import Landing from "./pages/Landing.js";
import NavBar from "./modules/NavBar.js";

import "../utilities.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

const App = () => {
  /*react router equivalent

    return (
  <>
    <NavBar />
    <BrowserRouter>
      <Switch>
        <Route component={Landing} path="/landing" />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} default />
      </Switch>
    </BrowserRouter>
  </>
    );
  */
  return (
    <>
      <NavBar />
      <Router>
        <Landing path="/landing" />
        <Home path="/:place" />
        <Home exact path="/" />
        <NotFound default />
      </Router>
    </>
  );
};

export default App;
