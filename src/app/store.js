import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "./features/slices/sliderSlice";
import singleReducer from "./features/slices/singleProductSlice";
import cartReducer from "./features/slices/cartSlice";
import wishReducer from "./features/slices/wishListSlice";
import logSignReducer from "./features/slices/logSignSlice";

export const store = configureStore({
  reducer: {
    slider: slideReducer,
    singleComic: singleReducer,
    cart: cartReducer,
    wishList: wishReducer,
    loginSignin: logSignReducer,
  },
});
