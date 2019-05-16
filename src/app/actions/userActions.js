import axios from 'axios';
import {
    LOGIN_USER, ADD_USER, FETCH_USERS, FETCH_USER_BY_ID, UPDATE_USER
} from './types';

const config = require('../config.json');
const serverUrl = `${config.serverUrl}`;

export const loginUser = (user) => dispatch => {
    axios.post(`${serverUrl}/user/login`, loginUser)
    .then(response => {
        dispatch({
            type: LOGIN_USER,
            payload: response.data.data
        })
    })
    .catch(error => {
        console.log("Error occured", error);
    });
}

export const fetchAllUsers = () => dispatch => {
    axios.get(`${serverUrl}/user`)
    .then(response => {
        dispatch({
            type: FETCH_USERS,
            payload: response.data.data
        })
    })
    .catch(error => {
        console.log("Error occured", error);
    });
}

export const fetchUserById = (id) => dispatch => {
    axios.get(`${serverUrl}/user/${id}`)
    .then(response => {
        dispatch({
            type: FETCH_USER_BY_ID,
            payload: response.data.data
        })
    })
    .catch(error => {
        console.log("Error occured", error);
    });
}

export const addNewUser = (user) => dispatch => {
    axios.post(`${serverUrl}/user`, user)
    .then(response => {
        dispatch({
            type: ADD_USER,
            payload: response.data.data
        })
    })
    .catch(error => {
        console.log("Error occured", error);
    });
}

export const updateUser = (id, user) => dispatch => {
    axios.put(`${serverUrl}/user/${id}`, user)
    .then(response => {
        dispatch({
            type: UPDATE_USER,
            payload: response.data.data
        })
    })
    .catch(error => {
        console.log("Error occured", error);
    });
}
