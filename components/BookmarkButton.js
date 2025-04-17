import Flower from "@/public/flower.svg";
import styled from "styled-components";

export default function BookmarkButton({ plantId, onToggleOwned, owned }) {
  return (
    <button onClick={() => onToggleOwned(plantId, owned)}>
      <StyledBookmark $isOwned={owned} />
    </button>
  );
}

const StyledBookmark = styled(Flower)`
  fill: ${({ $isOwned }) => ($isOwned ? "hotpink" : "")};
`;
