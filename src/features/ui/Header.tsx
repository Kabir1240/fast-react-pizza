import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Username from "../user/Username";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-yellow-400 uppercase px-4 py-3 border-b border-stone-200 sm:px-6">
      <Link className="tracking-widest" to='/'>
        Fast React Pizza
      </Link>
      <SearchBar />
      <Username />
    </header>
  )
}
