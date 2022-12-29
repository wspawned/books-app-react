import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const userDatabase = [
  {
    username: "user",
    password: "user"
  },
  {
    username: "admin",
    password: "admin"
  }
];

const INITIAL_STATE:UserState = {
  userDatabase: userDatabase,
  
};

export const usersSlice = createSlice({
  name: "users",
  initialState: INITIAL_STATE,
  reducers: {
    
  },
})

interface UserState {
  userDatabase: User[],
}

interface User {
  username: string,
  password: string,
}

