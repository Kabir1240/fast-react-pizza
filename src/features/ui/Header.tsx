import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header>
      <Link to='/'>
        Fast React Pizza
      </Link>
      <SearchBar />
    </header>
  )
}
