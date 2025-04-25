import styled from "styled-components";

export default function LightNeedFilter({ activeFilter, onFilterPlants }) {
  return (
    <>
      <FilterButton
        $isActive={activeFilter === "Full Shade"}
        onClick={() => onFilterPlants("lightNeed", "Full Shade")}
      >
        Full Shade
      </FilterButton>
      <FilterButton
        $isActive={activeFilter === "Partial Shade"}
        onClick={() => onFilterPlants("lightNeed", "Partial Shade")}
      >
        Partial Shade
      </FilterButton>
      <FilterButton
        $isActive={activeFilter === "Full Sun"}
        onClick={() => onFilterPlants("lightNeed", "Full Sun")}
      >
        Full Sun
      </FilterButton>
    </>
  );
}

const FilterButton = styled.button`
  all: unset;
  background-color: ${({ $isActive }) => ($isActive ? "lightgreen" : "white")};
  color: ${({ $isActive }) => ($isActive ? "black" : "black")};
  border: 1px solid black;
  padding: 5px;
  font-size: 13px;
  border-radius: 8px;
`;

export { FilterButton };
