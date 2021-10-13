import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main.js";
import HooksTutorial from "./hooks-tutorial/HooksTutorial.js";
import StylingReact from "./styling-react/StylingReact.js";
import TodoApp from "./todo-app/TodoApp.js";
import ComponentOptimize from "./component-optimize/TodoApp.js";
import ImmerTutorial from "./immer-tutorial/ImmerTutorial.js";
import RouterTutorial from "./router-tutorial/RouterTutorial.js";
import NewsViewer from "./news-viewer/NewsViewer.js";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/hooks-tutorial" component={HooksTutorial} />
        <Route path="/styling-react" component={StylingReact} />
        <Route path="/todo-app" component={TodoApp} />
        <Route path="/component-optimize" component={ComponentOptimize} />
        <Route path="/immer-tutorial" component={ImmerTutorial} />
        <Route path="/router-tutorial" component={RouterTutorial} />
        <Route path="/news-viewer" component={NewsViewer} />
      </Switch>
    </Router>
  );
};

export default App;
