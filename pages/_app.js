import Navigation from "@/components/Navigation";
import GlobalStyle from "../styles";
import { useState } from "react";
import plants from "@/assets/plants";

export default function App({ Component, pageProps }) {
  const [owned, setOwned] = useState(false);
  const [ownedPlants, setOwnedPlants] = useState([]);
  const [initialPlants, setInitialPlants] = useState(plants);

  function toggleOwned(plantId) {


  }

  return (
    <>
      <GlobalStyle />
      <Component 
      onToggleOwned={toggleOwned}
       plants={plants}
       isOwned={owned}
       ownedPlants={ownedPlants}
        {...pageProps} />
      <Navigation />
    </>
  );
}
