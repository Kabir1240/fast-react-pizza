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
        onChange={(e) => setQuery(e.target.value)} />
    </form>
  )
}
