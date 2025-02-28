import { useFetcher, useLoaderData } from "react-router-dom";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";
import { useEffect } from "react";
import { CartPizza, MenuPizza } from "../../types/PizzaTypes";
import UpdateOrder from "./UpdateOrder";

function Order() {
  const fetcher = useFetcher();
  const order = useLoaderData();
  
  useEffect(function() {
    if (!fetcher.data && fetcher.state === 'idle'){
      fetcher.load('/menu')
    }
  })
  
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  console.log(order);

  return (
    <div className="px-4 py-6 space-y-8">
      <div className="flex gap-2 items-center justify-between flex-wrap">
        <h2 className="text-xl font-semibold">Order #{id} Status</h2>

        <div className="space-x-2">
          {priority &&
            <span className="bg-red-500 rounded-full py-1 px-3 text-sm uppercase font-semibold text-red-50 tracking-wide">Priority</span>
          }
          <span className="bg-green-500 rounded-full py-1 px-3 text-sm uppercase font-semibold text-green-50 tracking-wide">{status} order</span>
        </div>
      </div>

      <div className="flex gap-2 items-center justify-between flex-wrap bg-stone-300 px-6 py-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>
      
      <ul className="divide-y divide-stone-300 border-b border-t">
        {cart.map((item:CartPizza) => 
          <OrderItem
            item={item}
            key={item.pizzaId}
            isLoadingIngredients={fetcher.state === 'loading'}
            ingredients={fetcher?.data?.find((el:MenuPizza) => el.id === item.pizzaId)?.ingredients ?? []} />
        )}
      </ul>

      <div className="space-y-2 bg-stone-300 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p className="text-sm font-medium text-stone-600">Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="text-bold">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
      
      {!priority && (
          <UpdateOrder order={ order } />
        )}
    </div>
  );
}

export default Order;
