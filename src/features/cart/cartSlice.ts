import { createSlice } from "@reduxjs/toolkit"
import { CartPizza } from "../../types/PizzaTypes"
import { Cart } from "../../types/CartTypes";
import { Store } from "../../store";

type PizzaId = number;

interface AddItemAction {
  payload: CartPizza
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
      const item = state.cart.find((item: CartPizza) => item.pizzaId === action.payload.pizzaId)
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      } else {
        state.cart.push(action.payload)
      }
    },
    removeItem(state: CartState, action: RemoveItemAction) {
      const item = state.cart.find((item: CartPizza) => item.pizzaId === action.payload)
      if (!item) return
      if (item.quantity > 1) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
      } else {
        state.cart = state.cart.filter((item:CartPizza) => item.pizzaId !== action.payload);
      }
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
      item.quantity--;

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

const getCart = (state:Store) => state.cart.cart
const getTotalQuantity = (state:Store) => state.cart.cart.reduce((sum: number, item: CartPizza) => sum + item.quantity, 0)
const getTotalPrice = (state:Store) => state.cart.cart.reduce((sum: number, item: CartPizza) => sum + item.totalPrice, 0)
export { getCart, getTotalQuantity, getTotalPrice }

export default cartSlice.reducer
