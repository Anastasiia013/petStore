import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const product = state.find((item) => item.id === action.payload.id);
      if (product) {
        product.count += 1;
      } else {
        state.push({ ...action.payload, count: 1 });
      }
    },
    increaseCountInCart(state, action) {
      const product = state.find((item) => item.id === action.payload);
      if (product) {
        product.count += 1;
      }
    },
    decreaseCountinCart(state, action) {
      const product = state.find((item) => item.id === action.payload);
      if (product) {
        product.count -= 1;
        if (product.count <= 0) {
          return state.filter((item) => item.id !== action.payload);
        }
      }
    },
    deleteFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    clearCart() {
      return [];
    },
  },
});

export const {
  addToCart,
  increaseCountInCart,
  decreaseCountinCart,
  deleteFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;