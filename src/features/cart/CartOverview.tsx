import { Link } from "react-router-dom";
import { getTotalQuantity, getTotalPrice } from "./cartSlice";
import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalQuantity = useSelector(getTotalQuantity);
  const totalPrice = useSelector(getTotalPrice);

  if (!totalQuantity) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 text-stone-300 text-sm px-4 py-4 uppercase sm:px-6 md:text-base">
      <p className="font-semibold text-stone-300 space-x-4 sm:space-x-6">
        <span>{totalQuantity} pizzas</span>
        <span >{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
