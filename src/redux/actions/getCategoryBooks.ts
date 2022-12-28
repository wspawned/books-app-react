import { createAsyncThunk } from "@reduxjs/toolkit";
import { googleAPI } from "../../api/googleAPI";

export const getCategoryBooks = createAsyncThunk(
  "category-books/get",
  async () => {
    const res = await googleAPI;
    return res.data;
  }
);