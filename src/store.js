import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/login/userSlice.js";
import systemReducer from "./pages/systemState/SystemSlice.js";

// console.log(userReducer);

const store = configureStore({
  reducer: {
    admin: userReducer,
    system: systemReducer,
  },
});

export default store;
