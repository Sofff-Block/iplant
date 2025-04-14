import PlantCard from "@/components/PlantCard";
import PlantFilter from "@/components/PlantFilter";
import SearchBar from "@/components/PlantSearch";
import Link from "next/link";
import { useMemo } from "react";
import { useState } from "react";
import styled from "styled-components";
import Fuse from "fuse.js";

export default function HomePage({
  plants,
  onToggleOwned,
  ownedPlantsIds,
  onAddPlants,
  onFilterPlants,
  activeFilter,
  onClearFilter,
}) {
  const [query, setQuery] = useState("");

  const fuseInstance = useMemo(
    () =>
      new Fuse(plants, {
        keys: ["name", "botanicalName"],
        threshold: 0.4,
      }),
    [plants]
  );

  const searchPlants =
    query === ""
      ? plants
      : fuseInstance.search(query).map((result) => result.item);

  return (
    <>
      <SearchBar query={query} setQuery={setQuery} />
      <PlantFilter
        onClearFilter={onClearFilter}
        onFilterPlants={onFilterPlants}
        activeFilter={activeFilter}
      />
      {plants.length === 0 ? (
        <>
          <h1>Nothing here yet</h1>
          <Link href="/create">Add your first plant here</Link>
        </>
      ) : searchPlants.length === 0 && activeFilter ? (
        <p>No plants match the criteria!</p>
      ) : searchPlants.length === 0 && query !== "" ? (
        <p>{`Unfortunately there are no results for "${query}". `}</p>
      ) : (
        <PlantList>
          {searchPlants.map((plant) => (
            <li key={plant.id}>
              <PlantCard
                onAddPlants={onAddPlants}
                id={plant.id}
                name={plant.name}
                image={plant.imageUrl}
                botanicalName={plant.botanicalName}
                onToggleOwned={onToggleOwned}
                ownedPlantsIds={ownedPlantsIds}
              />
            </li>
          ))}
        </PlantList>
      )}
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
