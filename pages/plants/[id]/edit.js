import PlantForm from "@/components/PlantForm";
import { useRouter } from "next/router";

export default function EditPlant({ plants }) {
  const router = useRouter();
  const { id } = router.query;

  const plantEdit = plants.find((plant) => plant.id === id);
  return <PlantForm $isEdit editPlant={plantEdit}/>;
}
