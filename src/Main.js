import React, { Component, useState } from "react";
import { useHistory } from "react-router";

const App = () => {
  const history = useHistory();
  return (
    <div>
      <button onClick={() => history.push("/hooks-tutorial")}>8장 Hooks</button>
      <button onClick={() => history.push("/styling-react")}>
        9장 컴포넌트 스타일링
      </button>
    </div>
  );
};

export default App;
