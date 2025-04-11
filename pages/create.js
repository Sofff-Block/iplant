import PlantForm from "@/components/PlantForm/PlantForm";

export default function CreatePlant({ onAddPlants }) {
  return (
    <>
      <PlantForm onSubmit={onAddPlants}  />
    </>
  );
}
