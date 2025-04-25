import styled from "styled-components";
import LightNeedFilter from "./LightNeedFilter";

export default function PlantFilter({
  onFilterPlants,
  activeFilter,
  onClearFilter,
}) {
  return (
    <PlantFilterWrapper>
      <LightNeedFilter
        activeFilter={activeFilter}
        onFilterPlants={onFilterPlants}
      />
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

const ClearButton = styled.button`
  visibility: ${({ $isActive }) => ($isActive ? "visible" : "hidden")};
  background-color: black;
  color: white;
  padding: 5px;
  font-size: 13px;
  border-radius: 8px;
`;
