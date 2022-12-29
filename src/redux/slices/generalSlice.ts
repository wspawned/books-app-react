import { createSlice } from "@reduxjs/toolkit";
import { getCategoryBooks } from "../actions/getCategoryBooks";
import type {  ListBookType } from "../actions/getCategoryBooks";

interface GeneralState {
  bookList: BookListType,
}

export interface BookListType {
  totalItems: number,
  items: ListBookType[] | [] ,
}

const INITIAL_STATE:GeneralState = {
  bookList: { totalItems:0, items: []},
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