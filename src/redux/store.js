import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./slice/jobslice";

export const store = configureStore({
  reducer: {
    jobs: jobReducer,
  },
});
