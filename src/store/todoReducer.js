import { actionTypes } from "./actionTypes";
import { FILTER_TYPE } from "../constants/filterConstants";

const initialState = {
  todos: [],
  currentFilter: FILTER_TYPE.ALL,
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TODO_ADD:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), value: action.payload.value, done: false },
        ],
      };
    case actionTypes.TODO_DELETE:
      return {
        ...state,
        todos: state.todos.filter((elem) => elem.id !== action.payload.id),
      };
    case actionTypes.TODO_DONE:
      return {
        ...state,
        todos: state.todos.map((todo) => ({
          ...todo,
          done: action.payload.id === todo.id ? !todo.done : todo.done,
        })),
      };
    case actionTypes.FILTER_CHANGE:
      return {
        ...state,
        currentFilter: action.payload.filterType,
      };
    default:
      return state;
  }
};
