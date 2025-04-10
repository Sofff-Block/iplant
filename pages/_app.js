import Navigation from "@/components/Navigation";
import GlobalStyle from "../styles";
import { useEffect, useState } from "react";
import plants from "@/assets/plants";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/navigation";
import IPlantLogo from "@/public/iplant-logo.svg";
import styled from "styled-components";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [hasMounted, setHasMounted] = useState(false);
  const [ownedPlantsIds, setOwnedPlantsIds] = useLocalStorageState(
    "ownedPlantsIds",
    { defaultValue: [] }
  );
  const [initialPlants, setInitialPlants] = useLocalStorageState(
    "initialPlants",
    { defaultValue: plants }
  );
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

  if (!hasMounted) return null;

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
