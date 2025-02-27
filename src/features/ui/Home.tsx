import { useSelector } from "react-redux";
import CreateUser from "../user/CreateUser";
import Button from "./Button";
import { Store } from "../../store";

function Home() {
  const username = useSelector((state:Store) => state.user.username)
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="text-stone-700 text-xl font-semibold mb-8 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username==='' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
            Continue Ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
