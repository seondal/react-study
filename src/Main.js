import React, { Component, useState } from "react";
import { useHistory } from "react-router";

const App = () => {
  const history = useHistory();
  return (
    <div>
      <button onClick={() => history.push("/hooks-tutorial")}>8장 Hooks</button>
    </div>
  );
};

export default App;
