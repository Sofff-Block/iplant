import { useState } from "react";
import Flower from "@/public/flower.svg";
import styled from "styled-components";

export default function OwnedBookmark({ plantId, onToggleOwned, ownedPlants }) {
  return (
    <button onClick={() => onToggleOwned(plantId)}>
      <StyledBookmark $isOwned={ownedPlants.includes(plantId)} />
    </button>
  );
}

const StyledBookmark = styled(Flower)`
  fill: ${({ $isOwned }) => ($isOwned ? "hotpink" : "")};
`;
