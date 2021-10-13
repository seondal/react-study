import React, { Component, useState } from "react";
import { useHistory } from "react-router";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin: 30px;
  background-color: violet;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: grey;
    color: white;
  }
`;

const App = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <Button onClick={() => history.push("/hooks-tutorial")}>8장 Hooks</Button>
      <Button onClick={() => history.push("/styling-react")}>
        9장 컴포넌트 스타일링
      </Button>
      <Button onClick={() => history.push("/todo-app")}>
        10장 일정 관리 웹 어플리케이션 만들기
      </Button>
      <Button onClick={() => history.push("/component-optimize")}>
        11장 컴포넌트 성능 최적화
      </Button>
      <Button onClick={() => history.push("/immer-tutorial")}>
        12장 immmer를 사용하여 더 쉽게 불변성 유지하기
      </Button>
      <Button onClick={() => history.push("/router-tutorial")}>
        13장 리액트 라우터로 SPA 개발하기
      </Button>
      <Button onClick={() => history.push("/news-viewer")}>
        14장 외부 API를 연동하여 뉴스 뷰어 만들기
      </Button>
    </Wrapper>
  );
};

export default App;
