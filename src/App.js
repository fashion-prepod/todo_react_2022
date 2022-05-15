import React from "react";
import { AddTodo } from "./AddTodo/AddTodo";
import TodoList from "./TodoList/TodoList";
import { Filter } from "./Filter/Filter";
import {UserList} from './UsersList/UsersList';


function App() {
  return (
    <>
      <Filter />
      <AddTodo />
      <TodoList />
      <UserList/>
    </>
  );
}

export default App;
