import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "./features/slices/sliderSlice";
import singleReducer from "./features/slices/singleProductSlice";
import cartReducer from "./features/slices/cartSlice";
import wishReducer from "./features/slices/wishListSlice";

export const store = configureStore({
  reducer: {
    slider: slideReducer,
    singleComic: singleReducer,
    cart: cartReducer,
    wishList: wishReducer,
  },
});
