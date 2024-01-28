import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalPrice: 0,
    totalQty: 0,
  },
  reducers: {
    addToCart(state, action) {
      const itemInCart = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.qty = action.payload.qty;
        itemInCart.amount = action.payload.qty * action.payload.price;
      } else {
        state.cart.push({
          ...action.payload,
          amount: action.payload.qty * action.payload.price,
        });
      }
      state.totalPrice = state.cart
        .map((item) => item.amount)
        .reduce((a, b) => a + b);

      state.totalQty = state.cart
        .map((itemQty) => itemQty.qty)
        .reduce((a, b) => a + b);
    },

    increaseQty(state, action) {
      const exist = state.cart.find(
        (product) => product.id === action.payload.id
      );

      if (exist) {
        exist.qty++;
      } else {
        action.payload.qty++;
      }
    },

    decreaseQty(state, action) {
      const exist = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (exist) {
        exist.qty--;
      } else {
        action.payload.qty--;
      }
    },

    clearCart(state, action) {
      return (state = {
        cart: [],
        totalPrice: 0,
        totalQty: 0,
      });
    },

    removeFromCart(state, action) {
      state.cart = state.cart.filter(
        (filteredItem) => filteredItem.id !== action.payload.id
      );
      state.totalPrice -= action.payload.amount;
      state.totalQty -= action.payload.qty;
    },
  },
});

export const {
  addToCart,
  increaseQty,
  decreaseQty,
  clearCart,
  removeFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
