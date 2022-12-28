import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  bestSellerBooks: [],
  test: "can U see ME"
};

export const generalSlice = createSlice({
  name: "general",
  initialState: INITIAL_STATE,
  reducers: {
    
  },
  // extraReducers: (builder) => {
  //   builder
  //   .addCase(getGenres.fulfilled, (state, action) => {
  //     state.genres = action.payload.genres
  //   })
  // },
})