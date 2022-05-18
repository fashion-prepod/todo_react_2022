import React from "react";
import { AddTodo } from "./AddTodo/AddTodo";
import TodoList from "./TodoList/TodoList";
import { Filter } from "./Filter/Filter";
import { UserList } from "./UsersList/UsersList";
import { UserFilter } from "./UsersFilter/UserFitler";

function App() {
  return (
    <>
      <Filter />
      <AddTodo />
      <TodoList />
      <UserFilter />
      <UserList />
    </>
  );
}

export default App;
