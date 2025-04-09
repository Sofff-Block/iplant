import PlantCard from "@/components/PlantCard";
import PlantFilter from "@/components/PlantFilter";
import styled from "styled-components";

export default function HomePage({
  plants,
  onToggleOwned,
  ownedPlantsIds,
  onAddPlants,
  onFilterPlants,
  filteredPlants,
  isFilter,
  setIsFilter,
  isActive,
  setIsActive,
}) {
  if (isFilter && filteredPlants.length === 0) {
    return <p>No plants match the filter criteria!</p>;
  }
  return (
    <>
      <PlantFilter
        setIsFilter={setIsFilter}
        onFilterPlants={onFilterPlants}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      {isFilter ? (
        <PlantList>
          {filteredPlants.map((plant) => (
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
      ) : (
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
