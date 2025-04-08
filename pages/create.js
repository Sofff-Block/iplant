import PlantForm from "@/components/PlantForm";

export default function CreatePlant({ onAddPlants, setDisplayForm }) {
  return (
    <>
      <PlantForm onAddPlants={onAddPlants} setDisplayForm={setDisplayForm} />
    </>
  );
}
