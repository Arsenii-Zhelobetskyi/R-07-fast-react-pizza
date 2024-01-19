import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./features/ui/Home.jsx";
import Menu, { loader as menuLoader } from "./features/menu/Menu.jsx";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order.jsx";
import AppLayout from "./features/ui/AppLayout.jsx";
import Error from "./features/ui/Error.jsx";

import { action as updateOrderAction } from "./features/order/UpdateOrder.jsx";
const router = createBrowserRouter([
  //use this way of defining routes to use all cool NEW features of react-router-dom
  {
    element: <AppLayout />, // if it has no path it will used as a layout
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
