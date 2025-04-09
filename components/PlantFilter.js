import styled from "styled-components";

export default function PlantFilter({ onFilterPlants, setIsFilter }) {
  return (
    <PlantFilterWrapper>
      <button onClick={() => onFilterPlants("Full Shade")}>Full Shade</button>
      <button onClick={() => onFilterPlants("Partial Shade")}>
        Partial Shade
      </button>
      <button onClick={() => onFilterPlants("Full Sun")}>Full Sun</button>
      <button onClick={() => setIsFilter(false)}>clear</button>
    </PlantFilterWrapper>
  );
}

const PlantFilterWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 1rem;
`;
