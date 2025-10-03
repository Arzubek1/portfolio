import { configureStore } from "@reduxjs/toolkit";
import NavbarSlice from "./reduxSlice";

export const store = configureStore({
  reducer: {
    navbarStore: NavbarSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store