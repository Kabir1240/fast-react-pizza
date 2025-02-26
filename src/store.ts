import { configureStore } from "@reduxjs/toolkit";

import userReducer, { UserState } from "./features/user/userSlice"
import cartReducer, { CartState } from "./features/cart/cartSlice"

interface Store {
  user: UserState,
  cart: CartState,
}

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  }
})

export type { Store };
export default store;
