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
      console.log(state.items);
    },
    removeItem: (state, action) => {
      state.items.pop(action.payload);
    },
  },
});

export const {addItem, removeItem} = cartSlice.actions;
