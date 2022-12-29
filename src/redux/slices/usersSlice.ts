import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const userDatabase = [
  {
    username: "user",
    password: "user",
    isAdmin: false,
  },
  {
    username: "admin",
    password: "admin",
    isAdmin: true,
  }
];

const INITIAL_STATE:UserState = {
  userDatabase: userDatabase,
  activeUser:   {
    username: "",
    password: "",
    isAdmin: false,
  },
};

export const usersSlice = createSlice({
  name: "users",
  initialState: INITIAL_STATE,
  reducers: {
    setActiveUser: (state, action: PayloadAction<User>) => {
      state.activeUser = action.payload;
    },
    resetActiveUser: (state) => {
      state.activeUser = INITIAL_STATE.activeUser;
    },
  },
})

export const { setActiveUser, resetActiveUser } = usersSlice.actions;

interface UserState {
  userDatabase: User[],
  activeUser: User,
}

interface User {
  username: string,
  password: string,
  isAdmin: boolean,
}

