import { formatCurrency } from "../../utils/helpers";
import { CartPizza } from "../../types/PizzaTypes";
import DeleteItemButton from "../ui/DeleteItemButton";
import UpdateItemQuantity from "./UpdateItemQuantity";

interface CartItemProps {
  item: CartPizza,
} 

function CartItem({ item }:CartItemProps) {
  // const { pizzaId, name, quantity, totalPrice } = item;
  const { name, quantity, totalPrice } = item;
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        
        <UpdateItemQuantity pizzaId={item.pizzaId} pizzaQuantity={quantity}/>
        <DeleteItemButton id={item.pizzaId}/>
      </div>
    </li>
  );
}

export default CartItem;
