import React, { Component, useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main.js";
import HooksTutorial from "./hooks-tutorial/HooksTutorial.js";
import StylingReact from "./styling-react/StylingReact.js";
import TodoApp from "./todo-app/TodoApp.js";
import ComponentOptimize from "./component-optimize/TodoApp.js";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/hooks-tutorial" component={HooksTutorial} />
        <Route exact path="/styling-react" component={StylingReact} />
        <Route exact path="/todo-app" component={TodoApp} />
        <Route exact path="/component-optimize" component={ComponentOptimize} />
      </Switch>
    </Router>
  );
};

export default App;
