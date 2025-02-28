import { useDispatch } from "react-redux";
import Button from "./Button";
import { removeItem } from "../cart/cartSlice";

interface DeleteItemButtonProps {
  id: number,
} 

export default function DeleteItemButton({ id }: DeleteItemButtonProps) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeItem(id))
  }
  return (
    <Button type="small" onClick={handleDelete}>Delete</Button>
  )
}
