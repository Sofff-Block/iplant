import styled from "styled-components";
import LightNeedFilter from "./LightNeedFilter";
import WaterNeedFilter from "./WaterNeedFilter";

export default function PlantFilter({
  onFilterPlants,
  activeFilter,
  onClearFilter,
}) {
  return (
    <>
      <PlantFilterWrapper>
        <LightNeedFilter
          activeFilter={activeFilter}
          onFilterPlants={onFilterPlants}
        />
        <WaterNeedFilter
          activeFilter={activeFilter}
          onFilterPlants={onFilterPlants}
        />
      </PlantFilterWrapper>
      <ClearButton $isActive={activeFilter.length > 0} onClick={onClearFilter}>
        clear
      </ClearButton>
    </>
  );
}

const PlantFilterWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 1rem;
  width: 320px;
  justify-content: center;
  gap: 70px;
`;

const ClearButton = styled.button`
  all: unset;
  visibility: ${({ $isActive }) => ($isActive ? "visible" : "hidden")};
  background-color: var(--secondary);
  color: white;
  padding: 5px;
  font-size: 13px;
  width: 100px;
  height: 20px;
  text-align: center;
  border-radius: 50px;
  margin-bottom: 20px;
  &:hover {
    background-color: var(--highlight);
    cursor: pointer;
  }
`;
