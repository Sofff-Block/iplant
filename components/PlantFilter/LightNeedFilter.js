import styled from "styled-components";

export default function LightNeedFilter({ activeFilter, onFilterPlants }) {
  return (
    <PlantNeedWrapper>
      <p>light need:</p>
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
    </PlantNeedWrapper>
  );
}

const FilterButton = styled.button`
  all: unset;
  text-align: center;

  background-color: ${({ $isActive }) =>
    $isActive ? "var(--primary)" : "var(--surface-light)"};
  color: ${({ $isActive }) =>
    $isActive ? "var(--surface-light)" : "var(--on-surface)"};
  padding: 5px 10px;
  width: 100px;
  font-size: 13px;
  border-radius: 8px;
`;

const PlantNeedWrapper = styled.div`
align-items: center;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export { FilterButton, PlantNeedWrapper };
