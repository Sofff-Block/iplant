import PlantCard from "@/components/PlantCard";
import { PlantList } from ".";
import useSWR from "swr";
import { useState } from "react";
import PlantFilter from "@/components/PlantFilter/PlantFilter";

export default function MyPlants({ onToggleOwned }) {
  const [filters, setFilters] = useState({});

  const { data: plants, error, isLoading } = useSWR("/api/plants");

  if (error) return <p>failed to load</p>;
  if (isLoading || !plants) return <p>loading...</p>;

  const myPlants = plants.filter((plant) => plant.isOwned === true);


  const filtered = Object.keys(filters).length
    ? myPlants.filter((plant) =>
        Object.entries(filters).every(([key, value]) => plant[key] === value)
      )
    : myPlants;

    function handleFilterPlants(plantNeed, plantAttribute) {
      setFilters((prevFilters) => {
        if (prevFilters[plantNeed] === plantAttribute) {
          const updatedFilters = { ...prevFilters };
          delete updatedFilters[plantNeed];
          return updatedFilters;
        } else {
          return {
            ...prevFilters,
            [plantNeed]: plantAttribute,
          };
        }
      });
    }

  function handleClearFilter() {
    setFilters({});
  }

  return (
    <main>
      <h1>Welcome to your Plants!</h1>
      <PlantFilter
        onClearFilter={handleClearFilter}
        onFilterPlants={handleFilterPlants}
        activeFilter={filters}
      />
      {filtered.length === 0 ? (
        <p>You don&apos;t own any plants yet!</p>
      ) : filtered.length === 0 && activeFilter ? (
        <p>No plants match the criteria!</p>
      ) : (
        <PlantList>
          {filtered.map((plant) => (
            <li key={plant._id}>
              <PlantCard
                id={plant._id}
                name={plant.name}
                image={plant.imageUrl}
                botanicalName={plant.botanicalName}
                onToggleOwned={onToggleOwned}
                owned={plant.isOwned}
              />
            </li>
          ))}
        </PlantList>
      )}
    </main>
  );
}
