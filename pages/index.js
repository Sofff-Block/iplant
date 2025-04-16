import PlantCard from "@/components/PlantCard";
import PlantFilter from "@/components/PlantFilter";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";

export default function HomePage({ onToggleOwned, onAddPlants }) {
  const { data: plants, isLoading, error } = useSWR("/api/plants");

  const [activeFilter, setActiveFilter] = useState("");

  const filtered = activeFilter
    ? plants.filter((plant) => plant.lightNeed === activeFilter)
    : plants;

  function handleFilterPlants(plantNeed) {
    setActiveFilter(plantNeed);
  }

  function handleClearFilter() {
    setActiveFilter("");
  }

  if (error) return <p>failed to load</p>;
  if (isLoading) return <p>loading...</p>;

  if (filtered.length === 0 && activeFilter) {
    return (
      <>
        <p>No plants match the filter criteria!</p>
        <button onClick={handleClearFilter}>disable all filter</button>
      </>
    );
  } else if (filtered.length === 0) {
    return (
      <>
        <h1>Nothing here yet</h1>
        <Link href="/create">Add your first plant here</Link>
      </>
    );
  }

  return (
    <>
      <PlantFilter
        onClearFilter={handleClearFilter}
        onFilterPlants={handleFilterPlants}
        activeFilter={activeFilter}
      />

      <PlantList>
        {filtered.map((plant) => (
          <li key={plant._id}>
            <PlantCard
              onAddPlants={onAddPlants}
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
    </>
  );
}

export const PlantList = styled.ul`
  all: unset;
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
