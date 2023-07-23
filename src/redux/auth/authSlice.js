import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  login: null,
  email: null,
  stateChange: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.userId = action.payload.userId;
      state.email = action.payload.email;
      state.login = action.payload.login;
    },
    authOut: () => initialState,
  },
});

export default authSlice.reducer;
export const { updateUser, authOut } = authSlice.actions;
