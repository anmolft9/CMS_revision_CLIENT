import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSideMenu: false,
  modalShow: true, ///state for the modal to preview for editiing
};

const systemSlice = createSlice({
  name: "adminsystem",
  initialState,
  reducers: {
    setshowSideMenu: (state, { payload }) => {
      state.showSideMenu = payload;
    },
    setModalShow: (state) => {
      state.modalShow = !state.modalShow;
    },
  },
});

const { reducer, actions } = systemSlice;
export const { setshowSideMenu, setModalShow } = actions;

export default reducer;
