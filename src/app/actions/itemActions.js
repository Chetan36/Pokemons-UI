import axios from 'axios';
import {
    ADD_ITEM, FETCH_ITEMS, FETCH_ITEM_BY_ID, UPDATE_ITEM
} from '../actions/types';

const config = require('../config.json');
const serverUrl = `${config.serverUrl}`;

export const fetchAllItems = () => dispatch => {
    axios.get(`${serverUrl}/item`)
    .then(response => {
        dispatch({
            type: FETCH_ITEMS,
            payload: response.data.data
        })
    })
    .catch(error => {
        console.log("Error occured", error);
    });
}

export const fetchItemById = (id) => dispatch => {
    axios.get(`${serverUrl}/item/${id}`)
    .then(response => {
        dispatch({
            type: FETCH_ITEM_BY_ID,
            payload: response.data.data
        })
    })
    .catch(error => {
        console.log("Error occured", error);
    });
}

export const addNewItem = (user) => dispatch => {
    axios.post(`${serverUrl}/item`, user)
    .then(response => {
        dispatch({
            type: ADD_ITEM,
            payload: response.data.data
        })
    })
    .catch(error => {
        console.log("Error occured", error);
    });
}

export const updateItem = (id, item) => dispatch => {
    axios.put(`${serverUrl}/item/${id}`, item)
    .then(response => {
        dispatch({
            type: UPDATE_ITEM,
            payload: response.data.data
        })
    })
    .catch(error => {
        console.log("Error occured", error);
    });
}
