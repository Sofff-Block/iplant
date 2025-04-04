import Flower from "@/public/flower.svg";
import styled from "styled-components";

export default function BookmarkButton({ plantId, onToggleOwned, ownedPlantsIds }) {
  return (
    <button onClick={() => onToggleOwned(plantId)}>
      <StyledBookmark $isOwned={ownedPlantsIds.includes(plantId)} />
    </button>
  );
}

const StyledBookmark = styled(Flower)`
  fill: ${({ $isOwned }) => ($isOwned ? "hotpink" : "")};
`;
