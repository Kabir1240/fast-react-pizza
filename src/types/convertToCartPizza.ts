import { CartPizza, MenuPizza } from "./PizzaTypes";

const convertToCartPizza = (pizza: MenuPizza, quantity: number = 1): CartPizza => ({
  pizzaId: pizza.id,
  name: pizza.name,
  quantity,
  unitPrice: pizza.unitPrice,
  totalPrice: pizza.unitPrice * quantity,
});

export default convertToCartPizza;
