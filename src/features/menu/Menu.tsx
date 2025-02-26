import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { MenuPizza } from "../../types/PizzaTypes";

function Menu() {
  const menuData = useLoaderData();

  return (
    <ul className="divide-y divide-stone-300">
      {menuData.map((pizza:MenuPizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
        ))}
    </ul>
  );
}

export default Menu;
