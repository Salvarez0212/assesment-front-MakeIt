import { configureStore } from '@reduxjs/toolkit';
import productReducer from './feature/productSlice.feature';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
