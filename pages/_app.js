import Navigation from "@/components/Navigation";
import GlobalStyle from "../styles";
import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/navigation";
import IPlantLogo from "@/public/iplant-logo.svg";
import styled from "styled-components";
import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [hasMounted, setHasMounted] = useState(false);
  const [ownedPlantsIds, setOwnedPlantsIds] = useLocalStorageState(
    "ownedPlantsIds",
    {
      defaultValue: [],
    }
  );

  useEffect(() => {
    setHasMounted(true);
  }, []);

  async function handleAddPlants(newPlant) {
    const response = await fetch("/api/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    });
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

  function handleDeletePlant(id) {
    const updatedPlants = initialPlants.filter((plant) => plant.id !== id);
    setInitialPlants([...updatedPlants]);
    router.push("/");
  }

  if (!hasMounted) return null;

  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalStyle />
      <StyledLogo />
      <Component
        onAddPlants={handleAddPlants}
        onToggleOwned={handleToggleOwned}
        ownedPlantsIds={ownedPlantsIds}
        onEditPlant={handleEditPlant}
        onDeletePlant={handleDeletePlant}
        {...pageProps}
      />

      <Navigation />
    </SWRConfig>
  );
}

const StyledLogo = styled(IPlantLogo)`
  width: 150px;
  margin-bottom: 20px;
`;
