import { useState } from "react";
import PlantCard from "./PlantCard";

export default function SearchBar({ plants }) {
  const [query, setQuery] = useState("");
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Pflanze suchen..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {filteredPlants.length > 0 ? (
          filteredPlants.map((plant) => (
            <li key={plant.id}>
              <PlantCard
                id={plant.id}
                name={plant.name}
                image={plant.imageUrl}
                botanicalName={plant.botanicalName}
              />
            </li>
          ))
        ) : (
          <li>Keine Treffer</li>
        )}
      </ul>
    </div>
  );
}
{
}
