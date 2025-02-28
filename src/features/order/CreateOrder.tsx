import { useState } from "react";
import { Form, useActionData, useNavigation } from "react-router-dom";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { Store, AppDispatch } from "../../store";
import { getCart, getTotalPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import { Cart } from "../../types/CartTypes";
import { formatCurrency } from "../../utils/helpers";
import { fetchAddress } from "../user/userSlice";

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();

  const {
    username,
    status: addressStatus,
    address,
    position,
    error: addressError} = useSelector((state: Store) => state.user);
  const isLoadingAddress = addressStatus === 'loading';
  const cart:Cart = useSelector(getCart);
  const cartPrice = useSelector(getTotalPrice);

  const formErrors = useActionData();
  const dispatch = useDispatch<AppDispatch>();

  const priorityPrice = withPriority ? cartPrice * 20 / 100 : 0
  const isSubmitting = navigation.state === 'submitting';

  if (!cart.length) return <EmptyCart />

  const handlePriorityCheck = (e) => {
    console.log(withPriority);
    setWithPriority(e.target.checked)
  }

  const handleGeolocation = (e) => {
    e.preventDefault();
    dispatch(fetchAddress())
  }

  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-semibold mb-8">Ready to order? Let's go!</h2>

      {/* <Form method="POST" action="/order/new"> */}
      <Form method="POST">
        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            className="input grow"
            type="text"
            name="customer"
            defaultValue={username}
            placeholder="First Name"
            required />
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input
              className="input w-full"
              type="tel"
              name="phone"
              placeholder="phone number"
              required />
            {formErrors?.phone && <p className="text-red-700 bg-red-100 text-xs rounded-md mt-2">{formErrors.phone}</p>}
          </div>
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center relative">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              placeholder="Address"
              defaultValue={address}
              disabled={isLoadingAddress}
              required />
            {addressStatus === 'error' && <p className="text-red-700 bg-red-100 text-xs rounded-md mt-2">{addressError}</p>}
          </div>
          
          {!position.latitude && !position.longitude && (
            <span className="absolute right-[3px] z-50 top-[3px] md:right-[5px] md:top-[5px]">
            <Button type="small" onClick={handleGeolocation} disabled={ isLoadingAddress }>Use Location</Button>
            </span>
          )}
        </div>

        <div className="mb-12 flex gap-5 items-center">
          <input
            className="h-6 w-6 accent-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            checked={ withPriority }
            onChange={handlePriorityCheck}
          />
          <label className="font-medium" htmlFor="priority">Want to give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              (position.latitude && position.longitude) ?
              `${position.latitude}, ${position.longitude}` :
              ''
            }
          />
          <Button type="primary" disabled={isSubmitting || isLoadingAddress} >
            {isSubmitting ? "Placing Order..." : `Order now for ${formatCurrency(cartPrice + priorityPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
