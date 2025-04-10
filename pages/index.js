import PlantCard from "@/components/PlantCard";
import PlantFilter from "@/components/PlantFilter";
import styled from "styled-components";

export default function HomePage({
  plants,
  onToggleOwned,
  ownedPlantsIds,
  onAddPlants,
  onFilterPlants,
  activeFilter,
  onClearFilter,
}) {
  if (plants.length === 0) {
    return (
      <>
        <p>No plants match the filter criteria!</p>
        <button
          onClick={() => {
            onClearFilter()
          }}
        >
          disable all filter
        </button>
      </>
    );
  }
  return (
    <>
      <PlantFilter
        onClearFilter={onClearFilter}
        onFilterPlants={onFilterPlants}
        activeFilter={activeFilter}
      />
      
        <PlantList>
          {plants.map((plant) => (
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
