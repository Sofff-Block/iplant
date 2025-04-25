import Flower from "@/public/flower.svg";
import styled from "styled-components";

export default function BookmarkButton({ plantId, onToggleOwned, owned }) {
  return (
    <StyledBookmarkButton onClick={() => onToggleOwned(plantId)}>
      <StyledBookmark $isOwned={owned} />
    </StyledBookmarkButton>
  );
}

const StyledBookmark = styled(Flower)`
  fill: ${({ $isOwned }) => ($isOwned ? "var(--highlight)" : "")};
  width: 30px;
`;

const StyledBookmarkButton = styled.button`
  all: unset;
  background-color: transparent;
  padding: 10px;
  margin: 0px;
  align-self: flex-end;
  // margin-top: auto;
  //flex-grow: 5;
`;
