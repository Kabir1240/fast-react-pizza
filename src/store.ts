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

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

export type { Store, RootState, AppDispatch };
export default store;
