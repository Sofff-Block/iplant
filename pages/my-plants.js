import PlantCard from "@/components/PlantCard";
import { PlantList } from ".";
import useSWR from "swr";

export default function MyPlants({ ownedPlantsIds, onToggleOwned }) {
  const { data: plants } = useSWR("/api/plants");
  const myPlants = plants.filter((plant) => ownedPlantsIds.includes(plant._id));

  if (myPlants.length === 0) {
    return <p>You don&apos;t own any plants yet!</p>;
  }
  return (
    <>
      <h1>Welcome to your Plants!</h1>
      <PlantList>
        {myPlants.map((plant) => (
          <li key={plant._id}>
            <PlantCard
              id={plant._id}
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
