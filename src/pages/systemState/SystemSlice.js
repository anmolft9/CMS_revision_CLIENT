import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSideMenu: false,
};

const systemSlice = createSlice({
  name: "adminsystem",
  initialState,
  reducers: {
    setshowSideMenu: (state, { payload }) => {
      state.showSideMenu = payload;
    },
  },
});

const { reducer, actions } = systemSlice;
export const { setshowSideMenu } = actions;

export default reducer;
