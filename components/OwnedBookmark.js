import { useState } from "react";
import Flower from "@/public/flower.svg";
import styled from "styled-components";

export default function OwnedBookmark({ plants, plantId }) {
  const [owned, setOwned] = useState(false);
  const [ownedPlants, setOwnedPlants] = useState([]);

  function toggleOwned(plantId) {
    // const newOwnedPlant = plants.filter((plant) => plant.id === id);
    // setOwnedPlants([newOwnedPlant.id, ...ownedPlants]);

    // console.log(ownedPlants);
    // setOwned(!owned);
    if (ownedPlants.includes(plantId)) {
      const updateOwnPlants = ownedPlants.filter((id) => id !== plantId);
      setOwnedPlants(updateOwnPlants);
    } else {
      const updateOwnPlants = [...ownedPlants, plantId];
      setOwnedPlants(updateOwnPlants);
    }

    setOwned(!owned);
  }
  console.log(ownedPlants);
  return (
    <button onClick={() => toggleOwned(plantId)}>
      <StyledBookmark $isOwned={owned} />
    </button>
  );
}

const StyledBookmark = styled(Flower)`
  fill: ${({ $isOwned }) => ($isOwned ? "hotpink" : "")};
`;
