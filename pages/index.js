import PlantCard from "@/components/PlantCard";
import styled from "styled-components";

export default function HomePage({
  plants,
  onToggleOwned,
  ownedPlantsIds,
  onAddPlants,
}) {
  return (
    <>
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
