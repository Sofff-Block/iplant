import styled from "styled-components";

export default function PlantFilter({
  onFilterPlants,
  activeFilter,
  onClearFilter,
}) {
  return (
    <PlantFilterWrapper>
      <FilterButton
        $isActive={activeFilter === "Full Shade"}
        onClick={() => onFilterPlants("Full Shade")}
      >
        Full Shade
      </FilterButton>
      <FilterButton
        $isActive={activeFilter === "Partial Shade"}
        onClick={() => onFilterPlants("Partial Shade")}
      >
        Partial Shade
      </FilterButton>
      <FilterButton
        $isActive={activeFilter === "Full Sun"}
        onClick={() => onFilterPlants("Full Sun")}
      >
        Full Sun
      </FilterButton>
      <ClearButton $isActive={activeFilter.length > 0} onClick={onClearFilter}>
        clear
      </ClearButton>
    </PlantFilterWrapper>
  );
}

const PlantFilterWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 1rem;
`;

const FilterButton = styled.button`
  all: unset;
  background-color: ${({ $isActive }) => ($isActive ? "lightgreen" : "white")};
  color: ${({ $isActive }) => ($isActive ? "black" : "black")};
  border: 1px solid black;
  padding: 5px;
  font-size: 13px;
  border-radius: 8px;
`;

const ClearButton = styled.button`
  visibility: ${({ $isActive }) => ($isActive ? "visible" : "hidden")};
  background-color: black;
  color: white;
  padding: 5px;
  font-size: 13px;
  border-radius: 8px;
`;
