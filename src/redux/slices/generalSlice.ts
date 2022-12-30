import { createSlice } from "@reduxjs/toolkit";
import { getCategoryBooks } from "../actions/getCategoryBooks";
import type {  ListBookType } from "../actions/getCategoryBooks";
import { getSearchedBooks } from "../actions/getSearchedBooks";
import type { PayloadAction } from "@reduxjs/toolkit";

const INITIAL_STATE:GeneralState = {
  bookList: { totalItems:0, items: []},
  searchedWords: "",
  pageSize: 15,
  isSideMenuOpen: true,
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
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
    },
    toogleSideMenu: (state) => {
      state.isSideMenuOpen = !state.isSideMenuOpen;
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

export const { setSearchedWords, resetSearchedWords, setPageSize, toogleSideMenu } = generalSlice.actions;

interface GeneralState {
  bookList: BookListType,
  searchedWords: string,
  pageSize: number,
  isSideMenuOpen: boolean,
}

export interface BookListType {
  totalItems: number,
  items: ListBookType[] | [] ,
}