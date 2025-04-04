import PlantCard from "@/components/PlantCard";
import { PlantList } from ".";

export default function MyPlants({ ownedPlants, plants, onToggleOwned }) {
  const myPlants = plants.filter((plant) =>
    ownedPlants.find((id) => id === plant.id)
  );

  if (myPlants.length === 0) {
    return <p>You don&apos;t own any plants yet!</p>;
  }
  return (
    <>
      <h1>Welcome to your Plants!</h1>
      <PlantList>
        {myPlants.map((plant) => (
          <li key={plant.id}>
            <PlantCard
              id={plant.id}
              name={plant.name}
              image={plant.imageUrl}
              botanicalName={plant.botanicalName}
              onToggleOwned={onToggleOwned}
              ownedPlants={ownedPlants}
            ></PlantCard>
          </li>
        ))}
      </PlantList>
    </>
  );
}
