import Navigation from "@/components/Navigation";
import GlobalStyle from "../styles";
import { useEffect, useState } from "react";
import plants from "@/assets/plants";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/navigation";
import IPlantLogo from "@/public/iplant-logo.svg";
import styled from "styled-components";
import useSWR from "swr";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [hasMounted, setHasMounted] = useState(false);
  const [ownedPlantsIds, setOwnedPlantsIds] = useLocalStorageState(
    "ownedPlantsIds",
    { defaultValue: [] }
  );
  // const [initialPlants, setInitialPlants] = useLocalStorageState(
  //   "initialPlants",
  //   { defaultValue: plants }
  // );
  const {
    data: initialPlants,
    isLoading,
    error,
  } = useSWR("/api/plants", { fallbackData: [] });

  const [activeFilter, setActiveFilter] = useState("");

  const filtered = activeFilter
    ? initialPlants.filter((plant) => plant.lightNeed === activeFilter)
    : initialPlants;

  useEffect(() => {
    setHasMounted(true);
  }, []);

  function handleAddPlants(newPlant) {
    setInitialPlants([newPlant, ...initialPlants]);
    router.push("/");
  }

  function handleEditPlant(updatedPlant, plantId) {
    const updatePlants = plants.filter((plant) => plant.id !== plantId);
    setInitialPlants([updatedPlant, ...updatePlants]);
    router.push(`/plants/${plantId}`);
  }

  function handleToggleOwned(plantId) {
    if (ownedPlantsIds.includes(plantId)) {
      const updateOwnPlants = ownedPlantsIds.filter((id) => id !== plantId);
      setOwnedPlantsIds(updateOwnPlants);
    } else {
      setOwnedPlantsIds([plantId, ...ownedPlantsIds]);
    }
  }

  function handleFilterPlants(plantNeed) {
    setActiveFilter(plantNeed);
  }

  function handleClearFilter() {
    setActiveFilter("");
  }

  function handleDeletePlant(id) {
    const updatedPlants = initialPlants.filter((plant) => plant.id !== id);
    setInitialPlants([...updatedPlants]);
    router.push("/");
  }

  if (!hasMounted) return null;
  if (error) return <p>failed to load</p>;
  if (isLoading) return <p>loading...</p>;

  return (
    <>
      <GlobalStyle />
      <StyledLogo />
      <Component
        onAddPlants={handleAddPlants}
        onToggleOwned={handleToggleOwned}
        plants={filtered}
        ownedPlantsIds={ownedPlantsIds}
        onFilterPlants={handleFilterPlants}
        activeFilter={activeFilter}
        onClearFilter={handleClearFilter}
        onEditPlant={handleEditPlant}
        onDeletePlant={handleDeletePlant}
        {...pageProps}
      />

      <Navigation />
    </>
  );
}

const StyledLogo = styled(IPlantLogo)`
  width: 150px;
  margin-bottom: 20px;
`;
