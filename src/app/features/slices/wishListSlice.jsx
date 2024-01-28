import { createSlice } from "@reduxjs/toolkit";

export const WishListSlice = createSlice({
  name: "wishList",
  initialState: { wishListAll: [] },
  reducers: {
    addToWishList(state, action) {
      const alreadyInWishList = state.wishListAll.find(
        (product) => product.id === action.payload.id
      );
      if (alreadyInWishList) {
        state.wishListAll = state.wishListAll.filter(
          (filteredItem) => filteredItem.id !== action.payload.id
        );
      } else {
        state.wishListAll.push({
          ...action.payload,
        });
      }
    },
    removeFromWishList(state, action) {
      state.wishListAll = state.wishListAll.filter(
        (filteredItem) => filteredItem.id !== action.payload.id
      );
    },
  },
});

export const { addToWishList, removeFromWishList } = WishListSlice.actions;
export default WishListSlice.reducer;
