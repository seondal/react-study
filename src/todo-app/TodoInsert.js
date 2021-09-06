import React from "react";
import { MdAdd } from "react-icons/md";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  background: #495057;

  input {
    background: none;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: white;

    &::placeholder {
      color: #dee2e6;
    }

    flex: 1; //버튼을 제외한 영역을 모두 차지하기
  }

  button {
    //기본 스타일 초기화
    /* background: none; */
    outline: none;
    border: none;
    background: #868e96;
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
    /* display: flex;
    align-items: center; */
    cursor: pointer;
    transition: 0.1s background ease-in;
    &:hover {
      background: #adb5bd;
    }
  }
`;

const TodoInsert = () => {
  return (
    <Wrapper>
      <input placeholder="할 말을 입력하세요" />
      <button type="submit">
        <MdAdd />
      </button>
    </Wrapper>
  );
};

export default TodoInsert;
