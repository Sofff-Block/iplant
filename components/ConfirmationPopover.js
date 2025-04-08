import styled from "styled-components";

export default function ConfirmationPopover({onDeletePlant, plantId}) {
  return (
    <div id="my-popover" popover="auto">
      <h1>Are you sure you want to delete this plant?</h1>
      <button onClick={() => console.log("EXIT")} type="button">
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
