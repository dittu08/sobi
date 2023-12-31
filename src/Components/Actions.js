// Actions.js
export const ADD_ITEM = 'ADD_ITEM';
export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: {
        ...item,
        id: item.id,
    },
});

export const REMOVE_ITEM = 'REMOVE_ITEM';
export const removeItem = (id) => ({
    type: REMOVE_ITEM,
    payload: id,
});