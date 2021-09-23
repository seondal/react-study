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
      <button onClick={() => history.push("/todo-app")}>
        10장 일정 관리 웹 어플리케이션 만들기
      </button>
      <button onClick={() => history.push("/component-optimize")}>
        11장 컴포넌트 성능 최적화
      </button>
      <button onClick={() => history.push("/immer-tutorial")}>
        12장 immmer를 사용하여 더 쉽게 불변성 유지하기
      </button>
    </div>
  );
};

export default App;
