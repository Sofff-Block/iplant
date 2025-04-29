import PlantForm from "@/components/PlantForm/PlantForm";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function EditPlant({ onEditPlant }) {
  const router = useRouter();
  const { id } = router.query;

  const { data: plant, isLoading, error } = useSWR(`/api/plants/${id}`);

  if (error) return <p>failed to load</p>;
  if (isLoading) return <p>loading...</p>;

  return (
    <main>
      <PlantForm isEdit editPlant={plant} onSubmit={onEditPlant} />
    </main>
  );
}
