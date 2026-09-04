import { createSlice } from "@reduxjs/toolkit";

const savedUser = localStorage.getItem("user");

const initialState = {
  isLoggedIn: savedUser ? true : false,
  user: savedUser ? JSON.parse(savedUser) : null,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {

    login: (state, action) => {

      state.isLoggedIn = true;

      state.user = action.payload;

      localStorage.setItem(
        "user",
        JSON.stringify(action.payload)
      );

    },


    logout: (state) => {

      state.isLoggedIn = false;

      state.user = null;

      localStorage.removeItem("user");

    }

  }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;