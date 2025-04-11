import { useState } from "react";

export default function SearchBar({ plants }) {
  // const [query, setQuery] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    const query = event.target.elements.query.value;
    const result = plants.filter((plant) => plant.name.includes(query));
    console.log("result: ", result);
  }

  return (
    <form onChange={(event) => handleSearch(event)}>
      <label htmlFor="search-bar">
        <input
          id="search-bar"
          name="query"
          type="text"
          placeholder="Search plant..."
        />
        <button type="submit">search</button>
      </label>
    </form>
  );
}
