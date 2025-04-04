import Navigation from "@/components/Navigation";
import GlobalStyle from "../styles";
import { useState } from "react";
import plants from "@/assets/plants";

export default function App({ Component, pageProps }) {
  const [ownedPlantsIds, setOwnedPlantsIds] = useState([]);

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
        onToggleOwned={handleToggleOwned}
        plants={plants}
        ownedPlantsIds={ownedPlantsIds}
        {...pageProps}
      />
      <Navigation />
    </>
  );
}
