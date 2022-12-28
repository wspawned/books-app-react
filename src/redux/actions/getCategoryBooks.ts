import { createAsyncThunk } from "@reduxjs/toolkit";
import { googleAPI } from "../../api/googleAPI";

export const getCategoryBooks = createAsyncThunk(
  "category-books/get",
  async ({paramsCategory, paramsPage}) => {
    const res = await googleAPI.get(``, {
      params: {
        q : `subject:${paramsCategory}`,
        startIndex : (paramsPage-1)*15,
      },
    });
    return res.data;
  }
);