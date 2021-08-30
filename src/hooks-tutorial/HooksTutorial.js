import React, { Component, useState } from "react";
import Counter from "./Counter";
import Info from "./Info";
import Average from "./Average";

const HooksTutorial = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      {visible && <Info />}

      <hr />

      <h1>카운터</h1>
      <Counter></Counter>

      <hr />

      <h1>평균값</h1>
      <Average />
    </div>
  );
};

export default HooksTutorial;
