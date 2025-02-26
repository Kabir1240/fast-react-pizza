import { useSelector } from "react-redux"
import { Store } from "../../store";

export default function Username() {
  const username = useSelector((state:Store) => state.user.username)
  if (!username) return null;
  
  return (
    <div className="font-semibold text-sm hidden md:block">
      {username}
    </div>
  )
}
