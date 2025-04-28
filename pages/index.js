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

  const [activeFilter, setActiveFilter] = useState("");
  const [filterNeed, setFilterNeed] = useState("");

  const filtered = activeFilter
    ? plants.filter((plant) => plant[filterNeed] === activeFilter)
    : plants;

  function handleFilterPlants(plantNeed, plantAttribute) {
    setFilterNeed(plantNeed);
    setActiveFilter(plantAttribute);
  }

  function handleClearFilter() {
    setFilterNeed("");
    setActiveFilter("");
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
    <>
      <SearchBar query={query} setQuery={setQuery} />
      <PlantFilter
        onClearFilter={handleClearFilter}
        onFilterPlants={handleFilterPlants}
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
