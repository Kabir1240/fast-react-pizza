import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

function Menu() {
  const menuData = useLoaderData();

  return (
    <ul>
      {menuData.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
        ))}
    </ul>
  );
}

export default Menu;
