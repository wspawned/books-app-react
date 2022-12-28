import { createSlice } from "@reduxjs/toolkit";
import { getCategoryBooks } from "../actions/getCategoryBooks";

const INITIAL_STATE = {
  bookList: { totalItems:0, items: []},
  test: "can U see ME"
};

export const generalSlice = createSlice({
  name: "general",
  initialState: INITIAL_STATE,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
    .addCase(getCategoryBooks.fulfilled, (state, action) => {
      state.bookList.totalItems = action.payload.totalItems;
      state.bookList.items = action.payload.items;
    })
  },
})