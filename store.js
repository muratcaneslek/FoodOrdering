import { configureStore } from '@reduxjs/toolkit';
import shoppingReducer from './src/Redux/shopping-slice';

export const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
   
  }
})