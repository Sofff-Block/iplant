import PlantForm from "@/components/PlantForm/PlantForm";

export default function CreatePlant({ onAddPlants }) {
  return (
    <main>
      
      <PlantForm onSubmit={onAddPlants}  />
    </main>
  );
}
