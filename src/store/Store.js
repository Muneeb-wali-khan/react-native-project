// store/Store.js
import { configureStore } from '@reduxjs/toolkit';
import { productApi } from './features/ProductSlice';
import { cartSlice } from './features/CartSlice';

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    cart: cartSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
