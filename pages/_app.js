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
  const [displayForm, setDisplayForm] = useState(false);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [isFilter, setIsFilter] = useState(false)
  const [ownedPlantsIds, setOwnedPlantsIds] = useLocalStorageState(
    "ownedPlantsIds",
    { defaultValue: [] }
  );
  const [initialPlants, setInitialPlants] = useLocalStorageState(
    "initialPlants",
    { defaultValue: plants }
  );


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
    const filterPlants = initialPlants.filter(
      (plant) => plant.lightNeed === plantNeed
    );
    setFilteredPlants(filterPlants);
    setIsFilter(true)
  }

  if (!hasMounted) return null;

  return (
    <>
      <GlobalStyle />
      <StyledLogo />
      <Component
        displayForm={displayForm}
        setDisplayForm={setDisplayForm}
        onAddPlants={handleAddPlants}
        onToggleOwned={handleToggleOwned}
        plants={initialPlants}
        ownedPlantsIds={ownedPlantsIds}
        onFilterPlants={handleFilterPlants}
        filteredPlants={filteredPlants}
        isFilter={isFilter}
        setIsFilter={setIsFilter}
        {...pageProps}
      />

      <Navigation setDisplayForm={setDisplayForm} />
    </>
  );
}

const StyledLogo = styled(IPlantLogo)`
  width: 150px;
  margin-bottom: 20px;
`;
