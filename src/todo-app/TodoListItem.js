import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import styled from "styled-components";
import cn from "classnames";

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;

  &:nth-child(even) {
    background: #f8f9fa;
  }

  .checkbox {
    cursor: pointer;
    flex: 1; //차지할 수 있는 영역 모두 차지
    display: flex;
    align-items: center;
    svg {
      //icon
      font-size: 1.5rem;
    }
    .text {
      margin-left: 0.5rem;
      /* flex: 1; */
    }

    //checked
    &.checked {
      svg {
        color: #22b8cf;
      }
      .text {
        color: #abd5bd;
        text-decoration: line-through;
      }
    }
  }
  .remove {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #ff6b6b;
    cursor: pointer;

    &:hover {
      color: #ff8787;
    }
  }

  //엘리먼트 사이사이에 테두리를 넣어 줌
  & + & {
    border-top: 1px solid #dee2e6;
  }
`;

const TodoListItem = ({ todo }) => {
  const { text, checked } = todo;
  return (
    <Wrapper>
      <div className={cn("checkbox", { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </Wrapper>
  );
};

export default TodoListItem;
