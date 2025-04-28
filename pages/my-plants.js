import PlantCard from "@/components/PlantCard";
import { PlantList } from ".";
import useSWR from "swr";
import { useState } from "react";
import PlantFilter from "@/components/PlantFilter/PlantFilter";

export default function MyPlants({ onToggleOwned }) {
  const [activeFilter, setActiveFilter] = useState("");
  const [filterNeed, setFilterNeed] = useState("");

  const { data: plants, error, isLoading } = useSWR("/api/plants");

  if (error) return <p>failed to load</p>;
  if (isLoading || !plants) return <p>loading...</p>;

  const myPlants = plants.filter((plant) => plant.isOwned === true);

  const filtered = activeFilter
    ? myPlants.filter((plant) => plant[filterNeed] === activeFilter)
    : myPlants;

  function handleFilterPlants(plantNeed, plantAttribute) {
    setFilterNeed(plantNeed);
    setActiveFilter(plantAttribute);
  }

  function handleClearFilter() {
    setFilterNeed("");
    setActiveFilter("");
  }

  return (
    <>
      <h1>Welcome to your Plants!</h1>
      <PlantFilter
        onClearFilter={handleClearFilter}
        onFilterPlants={handleFilterPlants}
        activeFilter={activeFilter}
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
    </>
  );
}
