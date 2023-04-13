import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/getProducts', async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = [...action.payload];
      return state;
    });
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
