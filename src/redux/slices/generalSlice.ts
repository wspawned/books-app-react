import { createSlice } from "@reduxjs/toolkit";
import { getBestSellers } from "../actions/getBestSellers";

const INITIAL_STATE = {
  bestSellerBooks: {num_results: 0, results: []},
  test: "can U see ME"
};

export const generalSlice = createSlice({
  name: "general",
  initialState: INITIAL_STATE,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
    .addCase(getBestSellers.fulfilled, (state, action) => {
      state.bestSellerBooks.num_results = action.payload.num_results;
      state.bestSellerBooks.results = action.payload.results;
    })
  },
})