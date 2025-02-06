import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading: boolean = navigation.state === 'loading';

  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />

      <Outlet />

      <CartOverview />
    </div>
  )
}
