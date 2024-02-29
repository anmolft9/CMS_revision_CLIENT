import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/login/userSlice.js";
import systemReducer from "./pages/systemState/SystemSlice.js";
import categoryReducer from "./pages/categories/CategorySlice.js";

// console.log(userReducer);

const store = configureStore({
  reducer: {
    admin: userReducer,
    system: systemReducer,
    category: categoryReducer,
  },
});

export default store;
