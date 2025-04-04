import Navigation from "@/components/Navigation";
import GlobalStyle from "../styles";
import { useEffect, useState } from "react";
import plants from "@/assets/plants";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [ownedPlantsIds, setOwnedPlantsIds] = useState([]);

  const [initialPlants, setInitialPlants] = useState(plants);

  function handleAddPlants(newPlant) {
    setInitialPlants([newPlant, ...initialPlants]);
  }

  function handleToggleOwned(plantId) {
    if (ownedPlantsIds.includes(plantId)) {
      const updateOwnPlants = ownedPlantsIds.filter((id) => id !== plantId);
      setOwnedPlantsIds(updateOwnPlants);
    } else {
      setOwnedPlantsIds([plantId, ...ownedPlantsIds]);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Component
        onAddPlants={handleAddPlants}
        onToggleOwned={handleToggleOwned}
        plants={initialPlants}
        ownedPlantsIds={ownedPlantsIds}
        {...pageProps}
      />
      <Navigation />
    </>
  );
}
