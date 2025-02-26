import { useDispatch } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import Button from "../ui/Button";
import { removeItem } from "./cartSlice";
import { CartPizza } from "../../types/PizzaTypes";

interface CartItemProps {
  item: CartPizza,
} 

function CartItem({ item }:CartItemProps) {
  const dispatch = useDispatch();
  // const { pizzaId, name, quantity, totalPrice } = item;
  const { name, quantity, totalPrice } = item;

  const handleDelete = () => {
    dispatch(removeItem(item.pizzaId))
  }
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type="small" onClick={handleDelete}>Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
