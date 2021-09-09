import React from "react";
import TodoListItem from "./TodoListItem";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 320px;
  max-height: 513px;
  /* overflow-y: auto; */
`;

const TodoList = ({ todos }) => {
  return (
    <Wrapper>
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </Wrapper>
  );
};

export default TodoList;
