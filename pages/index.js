import PlantCard from "@/components/PlantCard";
import PlantFilter from "@/components/PlantFilter/PlantFilter";
import SearchBar from "@/components/PlantSearch";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import { useMemo } from "react";
import Fuse from "fuse.js";

export default function HomePage({ onToggleOwned, onAddPlants }) {
  const { data: plants, isLoading, error } = useSWR("/api/plants");

  const [filters, setFilters] = useState({});

  const filtered = Object.keys(filters).length
    ? plants.filter((plant) =>
        Object.entries(filters).every(([key, value]) => plant[key] === value)
      )
    : plants;

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

  const [query, setQuery] = useState("");

  const fuseInstance = useMemo(
    () =>
      new Fuse(filtered, {
        keys: ["name", "botanicalName"],
        threshold: 0.4,
      }),
    [filtered]
  );

  const searchPlants =
    query === ""
      ? filtered
      : fuseInstance.search(query).map((result) => result.item);

  
  if (error) return <p>failed to load</p>;
  if (isLoading) return <p>loading...</p>;
  return (
    <main>
      <SearchBar query={query} setQuery={setQuery} />
      <PlantFilter
        onClearFilter={handleClearFilter}
        onFilterPlants={handleFilterPlants}
        activeFilter={filters}
      />

      {plants.length === 0 ? (
        <>
          <h1>Nothing here yet</h1>
          <Link href="/create">Add your first plant here</Link>
        </>
      ) : searchPlants.length === 0 && filters ? (
        <p>No plants match the criteria!</p>
      ) : searchPlants.length === 0 && query !== "" ? (
        <p>{`Unfortunately there are no results for "${query}". `}</p>
      ) : (
        <PlantList>
          {searchPlants.toSorted((a, b) => b._id.localeCompare(a._id)).map((plant) => (
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
      )}
    </main>
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
