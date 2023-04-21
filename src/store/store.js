import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSLice";



export const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  }
})