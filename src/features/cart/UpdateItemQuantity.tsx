import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import { decreaseQuantity, increaseQuantity } from "./cartSlice";

interface UpdateItemQuantityProps {
    pizzaId: number,
    pizzaQuantity: number,
}

export default function UpdateItemQuantity({ pizzaId, pizzaQuantity }: UpdateItemQuantityProps) {
    const dispatch = useDispatch();

    const handleIncreaseQuantity = () => {
        dispatch(increaseQuantity(pizzaId))
    }

    const handleDecreaseQuantity = () => {
        dispatch(decreaseQuantity(pizzaId))
    }

    return (
        <div className="flex gap-1 items-center md:gap-3">
            <Button type="round" onClick={handleDecreaseQuantity}>-</Button>
            <span className="text-sm font-medium">{pizzaQuantity}</span>
            <Button type="round" onClick={handleIncreaseQuantity}>+</Button>
        </div>
    )
}
