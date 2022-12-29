import { createSlice } from "@reduxjs/toolkit";
import { getCategoryBooks } from "../actions/getCategoryBooks";
import type {  ListBookType } from "../actions/getCategoryBooks";
import { getSearchedBooks } from "../actions/getSearchedBooks";
import type { PayloadAction } from "@reduxjs/toolkit";

const INITIAL_STATE:GeneralState = {
  bookList: { totalItems:0, items: []},
  searchedWords: "",
};

export const generalSlice = createSlice({
  name: "general",
  initialState: INITIAL_STATE,
  reducers: {
    setSearchedWords: (state, action: PayloadAction<string>) => {
      state.searchedWords = action.payload;
    },
    resetSearchedWords: (state) => {
      state.searchedWords = INITIAL_STATE.searchedWords;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getCategoryBooks.fulfilled, (state, action) => {
      state.bookList.totalItems = action.payload.totalItems;
      state.bookList.items = action.payload.items;
    })
    builder
    .addCase(getSearchedBooks.fulfilled, (state, action) => {
      state.bookList.totalItems = action.payload.totalItems;
      state.bookList.items = action.payload.items;
    })
  },
})

export const { setSearchedWords, resetSearchedWords } = generalSlice.actions;

interface GeneralState {
  bookList: BookListType,
  searchedWords: string,
}

export interface BookListType {
  totalItems: number,
  items: ListBookType[] | [] ,
}