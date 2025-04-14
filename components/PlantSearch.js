import { useState, useMemo } from "react";
import Fuse from "fuse.js";

export default function SearchBar({ plants }) {
  const [query, setQuery] = useState("");

  const searchPlants = useMemo(() => {
    if (!query) return plants;
    const fuseInstance = new Fuse(plants, {
      keys: ["name", "botanicalName"],
      threshold: 0.5,
    });
    const results = fuseInstance.search(query);
    return results.map((result) => result.item);
  }, [query, plants]);

  return (
    <div>
      <input
        type="text"
        placeholder="Pflanze suchen..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {searchPlants.map((item) => (
          <li key={item.id}>
            {item.name} — {item.botanicalName}
          </li>
        ))}
      </ul>
    </div>
  );
}
