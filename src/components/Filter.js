function Filter({ onCategoryChange }) {
  function handleChange(e) {
    onCategoryChange(e.target.value);
  }

  return (
    <div className="Filter">
      <select name="filter" onChange={handleChange}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
        <option value="Meat">Meat</option>
      </select>
    </div>
  );
}

export default Filter;
