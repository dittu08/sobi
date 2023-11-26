// Reducers.js
import { ADD_ITEM, REMOVE_ITEM } from "./Actions";

const initialState = {
    items: [],
    lastItemId: 0,
};

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const newItem = {
                id: state.lastItemId,
                ...action.payload,
            };
            return {
                ...state,
                items: [...state.items, newItem],
                lastItemId: state.lastItemId + 1,
            };
        case REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            }
        default:
            return state;
    }
};

export default itemReducer;