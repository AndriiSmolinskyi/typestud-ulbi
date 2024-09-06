import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/reduces";

export const store = configureStore({
  reducer: rootReducer, 
});
