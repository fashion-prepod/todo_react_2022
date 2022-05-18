import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "./todoReducer";
import { userReducer } from "./users/userReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    todo: todoReducer,
    users: userReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);
