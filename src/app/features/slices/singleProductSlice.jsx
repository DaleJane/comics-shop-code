import { createSlice } from "@reduxjs/toolkit";

export const SingleProductSlice = createSlice({
  name: "singleComic",
  initialState: { comic: {} },
  reducers: {
    changeSingleComic(state, action) {
      state.comic = action.payload;
    },
  },
});

export const { changeSingleComic } = SingleProductSlice.actions;
export default SingleProductSlice.reducer;
