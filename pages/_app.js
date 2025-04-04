import Navigation from "@/components/Navigation";
import GlobalStyle from "../styles";
import { useEffect, useState } from "react";
import plants from "@/assets/plants";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [hasMounted, setHasMounted] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);
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
  }

  function handleToggleOwned(plantId) {
    if (ownedPlantsIds.includes(plantId)) {
      const updateOwnPlants = ownedPlantsIds.filter((id) => id !== plantId);
      setOwnedPlantsIds(updateOwnPlants);
    } else {
      setOwnedPlantsIds([plantId, ...ownedPlantsIds]);
    }
  }

  if (!hasMounted) return null;

  return (
    <>
      <GlobalStyle />
      <Component
        displayForm={displayForm}
        setDisplayForm={setDisplayForm}
        onAddPlants={handleAddPlants}
        onToggleOwned={handleToggleOwned}
        plants={initialPlants}
        ownedPlantsIds={ownedPlantsIds}
        {...pageProps}
      />
      <Navigation setDisplayForm={setDisplayForm} />
    </>
  );
}
