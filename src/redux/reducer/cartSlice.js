import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const fetchCarts = createAsyncThunk('carts/fetchCarts', async (page = 1) => {
  const response = await fetch(`https://dummyjson.com/carts?limit=10&skip=${(page - 1) * 10}`);
  return response.json();
});

export const addCart = createAsyncThunk('carts/addCart', async (newCart) => {
  const response = await fetch('https://dummyjson.com/carts/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCart),
  });
  return response.json();
});

export const deleteCart = createAsyncThunk('carts/deleteCart', async (id) => {
  await fetch(`https://dummyjson.com/carts/${id}`, {
    method: 'DELETE',
  });
  return id;
});

const cartsSlice = createSlice({
  name: 'carts',
  initialState: {
    carts: [],
    status: 'idle',
    error: null,
    currentPage: 1,
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCarts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.carts = action.payload.carts;
      })
      .addCase(fetchCarts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addCart.fulfilled, (state, action) => {
        state.carts.push(action.payload);
        toast.success('Cart added successfully!');
      })
      .addCase(deleteCart.fulfilled, (state, action) => {
        state.carts = state.carts.filter(cart => cart.id !== action.payload);
        toast.success('Cart deleted successfully!');
      });
  },
});

export const { setPage } = cartsSlice.actions;

export default cartsSlice.reducer;
