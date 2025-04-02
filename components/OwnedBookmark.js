import { useState } from "react";
import Flower from "@/public/flower.svg";
import styled from "styled-components";

export default function OwnedBookmark() {
  const [owned, setOwned] = useState(false);

  function toggleOwned() {
    setOwned(!owned);
  }

  return (
    <button onClick={toggleOwned}>
      <StyledBookmark />
    </button>
  );
}

const StyledBookmark = styled(Flower)``;
