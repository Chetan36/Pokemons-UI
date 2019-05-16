import {
    ADD_ITEM, FETCH_ITEMS, FETCH_ITEM_BY_ID, UPDATE_ITEM
} from '../actions/types'; 

const initialState = {
    addedItem: {},
    items: [],
    fetchedItem: {},
    updatedItem: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_ITEM:
            return {
                ...state,
                addedItem: action.payload
            }
        case FETCH_ITEMS:
            return {
                ...state,
                items: action.payload
            }
        case FETCH_ITEM_BY_ID:
            return {
                ...state,
                fetchedItem: action.payload
            }
        case UPDATE_ITEM:
            return {
                ...state,
                updatedItem: action.payload
            }
        default:
            return state;
    }
}
