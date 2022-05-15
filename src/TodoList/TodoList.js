import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from 'react-redux';
import {selectFilteredTodos} from '../store/todoSelectors';
import actionCreators from '../store/actionCreators';



function TodoList() {
  const filteredTodos = useSelector(selectFilteredTodos);
  const {changeTodoState, deleteTodo} = actionCreators;

  return (
    <>
      {filteredTodos.map((elem) => (
        <TodoItem
          key={elem.id}
          id={elem.id}
          value={elem.value}
          done={elem.done}
          deleteTodo={deleteTodo}
          onChangeTodoState={changeTodoState}
        />
      ))}
    </>
  );
}

export default React.memo(TodoList);
