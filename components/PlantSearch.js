export default function SearchBar({ query, setQuery }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Pflanze suchen..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
