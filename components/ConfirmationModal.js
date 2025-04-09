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
  background-color: black;
  color:white;
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
  position: fixed;
  z-index:10;
  top:240px;
  left:20px;
  right:20px;
  font-size:0.75rem;
  display: flex;
  flex-direction: column;
  gap:10px;
  text-align: center;
  
`;
