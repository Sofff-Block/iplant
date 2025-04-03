import Navigation from "@/components/Navigation";
import GlobalStyle from "../styles";
import { useState } from "react";
import plants from "@/assets/plants";

export default function App({ Component, pageProps }) {
  const [ownedPlants, setOwnedPlants] = useState([]);

  function toggleOwned(plantId) {
    if (ownedPlants.includes(plantId)) {
      const updateOwnPlants = ownedPlants.filter((id) => id !== plantId);
      setOwnedPlants(updateOwnPlants)
    } else {
    const newOwnedPlant = plants.find((plant) => plant.id === plantId);
    console.log("newOwnedPlant: ", newOwnedPlant);

    setOwnedPlants([newOwnedPlant.id, ...ownedPlants]);
    return;
    }
  }
  console.log("ownedPlants: ", ownedPlants);

  return (
    <>
      <GlobalStyle />
      <Component
        onToggleOwned={toggleOwned}
        plants={plants}
        ownedPlants={ownedPlants}
        {...pageProps}
      />
      <Navigation />
    </>
  );
}
