import React, { useState, useEffect, useCallback } from "react";

import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Home from "./pages/Home.js";
import About from "./modules/About.jsx";
import Classes from "./modules/Classes.jsx";
import Play from "./modules/Play.jsx";
import Projects from "./modules/Projects.jsx";
import Landing from "./pages/Landing.js";
import NavBar from "./modules/NavBar.js";
import Footer from "./modules/Footer.jsx";
import Stories from "./modules/Stories.jsx";

import "../utilities.css";

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { fas } from "@fortawesome/free-solid-svg-icons";

// library.add(fab, fas);

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
    <div className="u-wrapper">
      {/* <div className="u-bg">
        <div className="u-emptySpace" />
        <div className="u-darkBg" />
        <div className="u-emptySpace" />
      </div> */}
      <NavBar />
      <Router>
        {/* <Landing path="/landing" /> */}
        {/* <Home path="/:place" /> */}
        <About exact path="/" />
        <About path="/about" />
        <Projects path="/projects" />
        <Classes path="/classes" />
        <Play path="/play" />
        <Erbs path="/erbs" />
        <Stories path="/stories" />
        <NotFound default />
      </Router>
      <Footer />
    </div>
  );
};

const Erbs = (props) => {
  window.location.href = "https://erbs.tomadto.site/";
  return <h1 class="u-textCenter">redirecting :)</h1>;
};
export default App;
