import {
    LOGIN_USER, ADD_USER, FETCH_USERS, FETCH_USER_BY_ID, UPDATE_USER
} from '../actions/types';

const initialState = {
    loggedInUser: null,
    addedUser: {},
    users: [],
    fetchedUser: {},
    updatedUser: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN_USER:
            return {
                ...state,
                loggedInUser: action.payload
            }
        case ADD_USER:
            return {
                ...state,
                addedUser: action.payload
            }
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload
            }
        case FETCH_USER_BY_ID:
            return {
                ...state,
                fetchedUser: action.payload
            }
        case UPDATE_USER:
            return {
                ...state,
                updatedUser: action.payload
            }
        default:
            return state;
    }
}
