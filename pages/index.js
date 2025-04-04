import BookmarkButton from "@/components/BookmarkButton";
import PlantCard from "@/components/PlantCard";
import styled from "styled-components";

export default function HomePage({ plants, onToggleOwned, ownedPlantsIds }) {
  return (
    <div>
      <h1>{"iPlan{t}"}</h1>
      <PlantList>
        {" "}
        {plants.map((plant) => (
          <li key={plant.id}>
            {" "}
            <PlantCard
              id={plant.id}
              name={plant.name}
              image={plant.imageUrl}
              botanicalName={plant.botanicalName}
              onToggleOwned={onToggleOwned}
              ownedPlantsIds={ownedPlantsIds}
            />
            <BookmarkButton
              plantId={plant.id}
              onToggleOwned={onToggleOwned}
              ownedPlantsIds={ownedPlantsIds}
            ></BookmarkButton>
          </li>
        ))}
      </PlantList>
    </div>
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
