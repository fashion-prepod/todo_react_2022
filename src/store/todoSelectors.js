import {FILTER_TYPE}  from '../constants/filterConstants';

export const selectTodos = (state) => state.todo.todos; 
export const selectFilter = (state) => state.todo.currentFilter; 
export const selectFilteredTodos = ({todo: {todos, currentFilter}}) => todos.filter(
    (todo) =>
      (todo.done && currentFilter === FILTER_TYPE.DONE) ||
      (!todo.done && currentFilter === FILTER_TYPE.UNDONE) ||
      currentFilter === FILTER_TYPE.ALL
);



    

