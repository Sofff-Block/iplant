import styled from "styled-components";

export default function ConfirmationModal({
  onDeletePlant,
  plantId,
  isVisible,
  setIsVisible,
}) {
  return (
    <StyledConfirmationWrapper $isVisible={isVisible}>
      <h1>Are you sure you want to delete this plant?</h1>
      <button onClick={() => setIsVisible(false)} type="button">
        No, cancel
      </button>
      <button onClick={() => onDeletePlant(plantId)} type="button">
        Yes, I&apos;m sure.
      </button>
    </StyledConfirmationWrapper>
  );
}

const StyledConfirmationWrapper = styled.div`
  background-color: lightgreen;
  display: ${({ $isVisible }) => ($isVisible ? "block" : "none")};
`;
