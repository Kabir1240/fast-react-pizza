import { formatCurrency } from "../../utils/helpers";
import Button from "../ui/Button";
import { CartPizza, MenuPizza } from "../../types/PizzaTypes";
import convertToCartPizza from "../../types/convertToCartPizza";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCart } from "../cart/cartSlice";
import DeleteItemButton from "../ui/DeleteItemButton";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";


interface MenuItemProps {
  pizza: MenuPizza,
}

function MenuItem({ pizza }: MenuItemProps) {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  
  const {
    id,
    name,
    unitPrice,
    ingredients,
    soldOut,
    imageUrl } = pizza;
    
  const cartPizza = cart.find((item) => item.pizzaId === id);
  
  const handleAddToCart = () => {
    if (pizza.soldOut) return;
    const cartPizza:CartPizza = convertToCartPizza(pizza)
    dispatch(addItem(cartPizza))
  }

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`} />
      <div className="flex flex-col grow">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between pt-0.5">
          {
            !soldOut ?
            <p className="text-sm">{formatCurrency(unitPrice)}</p> :
            <p className="text-sm uppercase font-medium text-stone-500">Sold out</p>
          }

          
          <div className="flex gap-2">
            {cartPizza && (
              <>
                <UpdateItemQuantity pizzaId={cartPizza.pizzaId} pizzaQuantity={cartPizza.quantity}/>
                <DeleteItemButton id={id}/>
              </>
            )}
            
            {(!soldOut && !cartPizza) && (
              <Button type="small" onClick={handleAddToCart}>Add To Cart</Button>
            )}
          </div>

        </div>
      </div>
    </li>
  );
}

export default MenuItem;
