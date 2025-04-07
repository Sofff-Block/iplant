import PlantForm from "@/components/PlantForm";

export default function CreatePlant({onAddPlants, setDisplayForm}) {
  return (
    <>
      <h1>{"iPlan{t}"}</h1>
      <PlantForm onAddPlants={onAddPlants} setDisplayForm={setDisplayForm} />
    </>
  );
}
