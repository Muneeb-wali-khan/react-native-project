import { createSlice } from "@reduxjs/toolkit";




export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            state.items.push(item);
        },
        removeItem: (state, action) => {
            state.items.pop(action.payload);
        },
    },
});


export const {addItem, removeItem} = cartSlice.actions;