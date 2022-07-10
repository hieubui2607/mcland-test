import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authState/authReducer";

const rootReducer = {
  auth: authReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
