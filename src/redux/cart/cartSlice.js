import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const product = state.find((item) => item.id === action.payload.id);

      if (product) {
        product.count += action.payload.count || 1;
      } else {
        state.push({ ...action.payload, count: action.payload.count || 1 });
      }
    },
    increaseCountInCart(state, action) {
      const { id, count = 1 } = action.payload;
      const product = state.find(item => item.id === id);
      if (product) {
        product.count += count;
      }
    },
    increaseCount(state, { payload }) {
      const { id } = payload;
      const product = state.find(item => item.id === id);
      if (product) {
        product.count += 1;
      }
    },

    decreaseCountinCart(state, action) {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state[index].count -= 1;
        if (state[index].count === 0) {
          state.splice(index, 1);
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
  increaseCount,
  decreaseCountinCart,
  deleteFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;