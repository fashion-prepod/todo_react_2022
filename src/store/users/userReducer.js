import { actionTypes } from "./actionTypes";

const initialState = {
  users: [],
  filterText: "",
  isLoading: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILTER_CHANGE:
      return {
        ...state,
        filterText: action.payload.filterText,
      };
    case actionTypes.SET_USERS:
      return {
        ...state,
        users: action.payload.users,
        isLoading: false,
      };
    case actionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    default:
      return state;
  }
};
