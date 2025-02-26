import { createSlice } from "@reduxjs/toolkit"
import Pizza from "../../types/Pizza"

type PizzaId = number;

interface AddItemAction {
  payload: Pizza
}

interface RemoveItemAction {
  payload: PizzaId
}

interface IncreaseQuantityAction {
  payload: PizzaId
}

interface DecreaseQuantityAction {
  payload: PizzaId
}

type CartAction = AddItemAction | RemoveItemAction | IncreaseQuantityAction | DecreaseQuantityAction

type Cart = Pizza[]

interface CartState {
  cart: Cart
}

const initialState: CartState = {
  cart: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state: CartState, action: AddItemAction) {
      state.cart.push(action.payload)
    },
    removeItem(state: CartState, action: RemoveItemAction) {
      state.cart.filter((item:Pizza) => item.pizzaId !== action.payload)
    },
    increaseQuantity(state: CartState, action: IncreaseQuantityAction) {
      const item = state.cart.find((item) => item.pizzaId === action.payload)
      if (!item) return;
      item.quantity++;

      item.totalPrice += item.unitPrice;
    },
    decreaseQuantity(state: CartState, action: DecreaseQuantityAction) {
      const item = state.cart.find((item) => item.pizzaId === action.payload)
      if (!item) return;
      item.quantity++;

      item.totalPrice -= item.unitPrice;
    },
    clearCart(state: CartState) {
      state.cart = []
    },
  }
})

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export type { CartState, CartAction };

export default cartSlice.reducer