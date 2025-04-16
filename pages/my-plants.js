import PlantCard from "@/components/PlantCard";
import { PlantList } from ".";
import useSWR from "swr";

export default function MyPlants({ onToggleOwned }) {
  const { data: plants, error, isLoading } = useSWR("/api/plants");
  const myPlants = plants.filter((plant) => plant.isOwned === true);

  if (myPlants.length === 0) {
    return <p>You don&apos;t own any plants yet!</p>;
  }

  if (error) return <p>failed to load</p>;
  if (isLoading) return <p>loading...</p>;
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
              owned={plant.isOwned}
            />
          </li>
        ))}
      </PlantList>
    </>
  );
}
