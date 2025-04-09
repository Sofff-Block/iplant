import styled from "styled-components";

export default function PlantFilter({
  onFilterPlants,
  setIsFilter,
  isActive,
  setIsActive,
}) {
  return (
    <PlantFilterWrapper>
      <FilterButton
        $isActive={isActive === "Full Shade"}
        onClick={() => onFilterPlants("Full Shade")}
      >
        Full Shade
      </FilterButton>
      <FilterButton
        $isActive={isActive === "Partial Shade"}
        onClick={() => onFilterPlants("Partial Shade")}
      >
        Partial Shade
      </FilterButton>
      <FilterButton
        $isActive={isActive === "Full Sun"}
        onClick={() => onFilterPlants("Full Sun")}
      >
        Full Sun
      </FilterButton>
      <ClearButton
        $isActive={isActive.length > 0}
        onClick={() => {
          setIsFilter(false);
          setIsActive("");
        }}
      >
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
