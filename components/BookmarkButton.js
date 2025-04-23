import Flower from "@/public/flower.svg";
import styled from "styled-components";

export default function BookmarkButton({ plantId, onToggleOwned, owned }) {
  return (
    <button onClick={() => onToggleOwned(plantId)}>
      <StyledBookmark $isOwned={owned} />
    </button>
  );
}

const StyledBookmark = styled(Flower)`
  fill: ${({ $isOwned }) => ($isOwned ? "var(--highlight)" : "")};
  width: 30px;
`;
