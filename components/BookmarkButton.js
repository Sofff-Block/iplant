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
  fill: ${({ $isOwned }) =>
    $isOwned ? "var(--highlight)" : "var(--surface-light)"};
  width: 30px;
  color: var(--on-surface);
`;

const StyledBookmarkButton = styled.button`
  all: unset;
  background-color: transparent;
  margin: 10px;
  padding: 7px 7px 5px;
  align-self: flex-end;
  border-radius: 15px;
  &:hover {
    background-color: var(--highlight-light);
    cursor: pointer;
  }
`;
