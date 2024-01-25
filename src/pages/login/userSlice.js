import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "adminUser",
  initialState,
  reducers: {
    setAdminUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

const { reducers, actions } = userSlice;
export const { setAdminUser } = actions;

export default reducers;
