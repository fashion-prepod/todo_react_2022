import { actionTypes } from "./actionTypes";
import { bindActionCreators } from "redux";
import { store } from "../index";

export const getUsers = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: actionTypes.SET_LOADING,
      payload: {
        isLoading: true,
      },
    });

    const res = await fetch(`https://reqres.in/api/users?page=2`);
    const { data } = await res.json();

    dispatch({
      type: actionTypes.SET_USERS,
      payload: { users: data },
    });
  };
};

export const changeFilter = (filterText) => ({
  type: actionTypes.FILTER_CHANGE,
  payload: { filterText },
});

export default bindActionCreators({ getUsers, changeFilter }, store.dispatch);
