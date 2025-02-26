import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        placeholder="Search Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-52 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 sm:focus:w-72 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50"/>
    </form>
  )
}
