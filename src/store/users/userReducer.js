import {actionTypes} from './actionTypes'

const initialState = {
    users: [],
    filterText: ''
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FILTER_CHANGE: 
            return {
                ...state,
                filterText: action.payload.filterText
            };
        case actionTypes.SET_USERS:
            return {
                ...state,
                users: action.payload.users
            }
        default:
            return state;
    }
};