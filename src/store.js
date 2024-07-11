import { configureStore } from '@reduxjs/toolkit';
import cartsReducer from './redux/reducer/cartSlice';
import userReducer from './user/userSlice';

export const store = configureStore({
  reducer: {
    carts: cartsReducer,
    user: userReducer,
  },
});
