function FilterTabs({ activeFilter, setActiveFilter }) {
  const filters = ["All", "To do", "In Progress", "Completed"];

  return (
    <div className="filter-tabs">
      {filters.map((filter) => (
        <button
          key={filter}
          className={activeFilter === filter ? "active" : ""}
          onClick={() => setActiveFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default FilterTabs;