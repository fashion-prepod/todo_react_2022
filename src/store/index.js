import { createStore, combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { userReducer } from "./users/userReducer";

export const store = createStore(
    combineReducers({
        todo: todoReducer,
        users: userReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

