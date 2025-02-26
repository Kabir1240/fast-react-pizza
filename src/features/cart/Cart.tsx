import LinkButton from '../ui/LinkButton';
import Button from '../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '../../store';
import { Cart as CartType } from '../../types/CartTypes';
import { CartPizza } from '../../types/PizzaTypes';
import { clearCart, getCart } from './cartSlice';
import EmptyCart from './EmptyCart';

function Cart() {
  const username = useSelector((state:Store) => state.user.username);
  const dispatch = useDispatch();
  const cart: CartType = useSelector(getCart)
  
  const handleClearCart = () => {
    dispatch(clearCart());
  }

  if (!cart.length) return <EmptyCart />

  return (
    <div className='px-4 py-3'>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className='font-semibold text-xl mt-7'>Your cart, { username }</h2>

      <ul className='divide-y divide-stone-300 border-b mt-b'>
        {cart.map((item:CartPizza) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className='mt-6 space-x-2'>
        <Button to="/order/new" type="primary">Order Pizzas</Button>
        <Button type="secondary" onClick={handleClearCart}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
