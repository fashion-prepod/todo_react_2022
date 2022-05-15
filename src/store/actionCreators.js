import { actionTypes } from "./actionTypes";
import {bindActionCreators} from 'redux';
import {store} from './index';

export const addTodo = (value) => ({ type: actionTypes.TODO_ADD, payload: { value } });
export const changeFilter = (filterType) => ({type: actionTypes.FILTER_CHANGE , payload: {filterType} });
export const deleteTodo = (id) => ({type: actionTypes.TODO_DELETE, payload: {id}});
export const changeTodoState = (id) => ({type: actionTypes.TODO_DONE, payload: {id} });

const boundedActionCreators = bindActionCreators({addTodo, changeFilter, deleteTodo, changeTodoState}, store.dispatch );

export default boundedActionCreators;
