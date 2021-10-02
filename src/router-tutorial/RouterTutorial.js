import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/router-tutorial/">홈</Link>
        </li>
        <li>
          <Link to="/router-tutorial/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Route path="/router-tutorial/" component={Home} exact={true} />
      <Route
        path={["/router-tutorial/about", "/router-tutorial/info"]}
        component={About}
      />
    </div>
  );
};

export default App;
