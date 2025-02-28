import { createBrowserRouter } from "react-router-dom";
import Home from "../features/ui/Home";
import Menu from "../features/menu/Menu";
import Cart from "../features/cart/Cart";
import CreateOrder from "../features/order/CreateOrder";
import Order from "../features/order/Order";
import AppLayout from "../features/ui/AppLayout";
import Error from "../features/ui/Error";
import { menuLoader, newOrderAction, orderLoader, updateOrderAction } from "../services/apiRestaurant";


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        action: newOrderAction,
        element: <CreateOrder />,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ]
  }
])

export default router;