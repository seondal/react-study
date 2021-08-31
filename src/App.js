import React, { Component, useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main.js";
import HooksTutorial from "./hooks-tutorial/HooksTutorial.js";
import StylingReact from "./styling-react/StylingReact.js";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/hooks-tutorial" component={HooksTutorial} />
        <Route exact path="/styling-react" component={StylingReact} />
      </Switch>
    </Router>
  );
};

export default App;
