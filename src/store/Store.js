// store/Store.js
import { configureStore } from '@reduxjs/toolkit';
import { productApi } from './features/ProductSlice';

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
