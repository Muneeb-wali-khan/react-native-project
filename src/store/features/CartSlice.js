import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);
      if (!existingItem) {
        state.items.push({...item, qty: 1});
      } else {
        existingItem.qty += 1;
      }
    },
    removeItem: (state, action) => {
      state.items.pop(action.payload);
    },
    clearCart: state => {
      state.items = [];
    },
    increment: (state, action) => {
      const item = action.payload;
      const findItem = state.items.find(i => i.id === item.id);
      if (findItem) {
        findItem.qty += 1;
      }
    },
    decrement: (state, action) => {
      const item = action.payload;
      const findItem = state.items.find(i => i.id === item.id);
      if (findItem) {
        findItem.qty -= 1;
      }
    },
  },
});

export const {addItem, removeItem, increment, decrement} = cartSlice.actions;
