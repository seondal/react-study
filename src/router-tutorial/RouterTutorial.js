import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profiles from "./profiles";
import HistorySample from "./HistorySample";

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
        <li>
          <Link to="/router-tutorial/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/router-tutorial/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/router-tutorial/" component={Home} exact={true} />
        <Route
          path={["/router-tutorial/about", "/router-tutorial/info"]}
          component={About}
        />
        <Route path="/router-tutorial/profiles" component={Profiles} />
        <Route path="/router-tutorial/history" component={HistorySample} />
        <Route
          render={({ location }) => {
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>;
          }}
        />
      </Switch>
    </div>
  );
};

export default App;
