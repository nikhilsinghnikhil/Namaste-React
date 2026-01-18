import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  // yaha ham store karvayenge element ko cart me
  reducer: {
    cart: cartReducer, // alag alag slice ke liye alag alag reducer hoga jaise user ke liye alag , cart ke liye alag.
    // user:userReducer  like this
  },
}); // configureStore(); we use this function for creating our own store

export default appStore;
