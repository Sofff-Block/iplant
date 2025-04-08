import styled from "styled-components";
import { useRef } from "react";

export default function ConfirmationPopover({ onDeletePlant, plantId }) {
  const popoverRef = useRef(null);

  return (
    <div id="my-popover" ref={popoverRef} popover="auto">
      <h1>Are you sure you want to delete this plant?</h1>
      <button onClick={() => popoverRef.current?.hidePopover()} type="button">
        No, cancel
      </button>
      <button onClick={() => onDeletePlant(plantId)} type="button">
        Yes, I&apos;m sure.
      </button>
    </div>
  );
}

const StyledPopoverWrapper = styled.div`
  background-color: lightgreen;
`;
