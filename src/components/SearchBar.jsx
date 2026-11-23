import { Search } from "lucide-react";

function SearchBar({ search, setSearch }) {
  return (
    <div className="search-bar">
      <Search size={20} />

      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Search tasks"
      />
    </div>
  );
}

export default SearchBar;