import { createAsyncThunk } from "@reduxjs/toolkit";
import { nytAPI } from "../../api/nytimesAPI";

export const getBestSellers = createAsyncThunk(
  "best-sellers/get",
  async () => {
    const res = await nytAPI;
    return res.data;
  }
);