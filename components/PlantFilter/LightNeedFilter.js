import styled from "styled-components";

export default function LightNeedFilter({
  activeFilter,
  onFilterPlants,
  setIsDropped,
}) {
  return (
    <PlantNeedWrapper>
      <FilterTitle>Light Need:</FilterTitle>
      <FilterButton
        $isActive={activeFilter.lightNeed === "Full Shade"}
        onClick={() => onFilterPlants("lightNeed", "Full Shade")}
      >
        Full Shade
      </FilterButton>
      <FilterButton
        $isActive={activeFilter.lightNeed === "Partial Shade"}
        onClick={() => onFilterPlants("lightNeed", "Partial Shade")}
      >
        Partial Shade
      </FilterButton>
      <FilterButton
        $isActive={activeFilter.lightNeed === "Full Sun"}
        onClick={() => onFilterPlants("lightNeed", "Full Sun")}
      >
        Full Sun
      </FilterButton>
    </PlantNeedWrapper>
  );
}

const FilterTitle = styled.h5`
  margin: 0;
  font-weight: 400;
  color: var(--secondary);
  margin-bottom: 5px;
`;

const FilterButton = styled.button`
  all: unset;
  text-align: center;
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--primary)" : "var(--surface-light)"};
  color: ${({ $isActive }) =>
    $isActive ? "var(--surface-light)" : "var(--on-surface)"};
  padding: 5px 10px;
  width: 100px;
  font-size: 12px;
  border-radius: 8px;
  font-family: monospace;
`;

const PlantNeedWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export { FilterButton, PlantNeedWrapper, FilterTitle };
