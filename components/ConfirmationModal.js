import { StyledButton, ButtonContainer } from "@/pages/plants/[id]";
import styled from "styled-components";

export default function ConfirmationModal({
  onDeletePlant,
  plantId,
  isVisible,
  setIsVisible,
}) {
  return (
    <StyledConfirmationWrapper $isVisible={isVisible}>
      <StyledConfirmationContent>
        <h1>Are you sure you want to delete this plant?</h1>
        <ButtonContainer>
          <StyledButton onClick={() => setIsVisible(false)} type="button">
            No, cancel
          </StyledButton>
          <StyledButton
            $isDanger
            onClick={() => onDeletePlant(plantId)}
            type="button"
          >
            Yes, I&apos;m sure.
          </StyledButton>
        </ButtonContainer>
      </StyledConfirmationContent>
    </StyledConfirmationWrapper>
  );
}

const StyledConfirmationWrapper = styled.div`
  width: 100%;
  height: 100%;
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledConfirmationContent = styled.div`
  width: 300px;
  height: 250px;
  font-size: 0.75rem;
  background-color: var(--surface-light);
  color: var(--danger);
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 5px;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
`;
