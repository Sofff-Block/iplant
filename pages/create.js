import PlantForm from "@/components/PlantForm";

export default function CreatePlant({ onAddPlants }) {
  return (
    <>
      <PlantForm onAddPlants={onAddPlants}  />
    </>
  );
}
