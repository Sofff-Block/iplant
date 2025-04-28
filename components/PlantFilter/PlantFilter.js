import styled from "styled-components";
import LightNeedFilter, { FilterButton } from "./LightNeedFilter";
import WaterNeedFilter from "./WaterNeedFilter";
import DropDown from "@/public/chevron-down.svg";
import DropUp from "@/public/chevron-up.svg";
import { useState } from "react";

export default function PlantFilter({
  onFilterPlants,
  activeFilter,
  onClearFilter,
}) {
  const [isDropped, setIsDropped] = useState(false);
  return (
    <PlantFilterContainer>
      <PlantFilterMenu onClick={() => setIsDropped(!isDropped)}>
        <h3>Filter</h3>
        {isDropped ? <MenuIconUp /> : <MenuIconDown />}
      </PlantFilterMenu>
      {isDropped ? (
        <PlantFilterWrapper>
          <LightNeedFilter
            activeFilter={activeFilter}
            onFilterPlants={onFilterPlants}
            setIsDropped={setIsDropped}
          />
          <WaterNeedFilter
            activeFilter={activeFilter}
            onFilterPlants={onFilterPlants}
            setIsDropped={setIsDropped}
          />
        </PlantFilterWrapper>
      ) : (
        ""
      )}
      <PlantFilterDisplayOptions>
        <DisplayActiveFilter $isActive={activeFilter.length > 0}>
          {activeFilter}
        </DisplayActiveFilter>
        <ClearButton
          $isActive={activeFilter.length > 0}
          onClick={() => {
            onClearFilter();
            setIsDropped(true);
          }}
        >
          clear
        </ClearButton>
      </PlantFilterDisplayOptions>
    </PlantFilterContainer>
  );
}

const PlantFilterContainer = styled.div`
  width: 320px;
`;
const PlantFilterMenu = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DisplayActiveFilter = styled(FilterButton)`
  all: unset;
  visibility: ${({ $isActive }) => ($isActive ? "visible" : "hidden")};
  background-color: var(--primary);
  color: white;
  padding: 5px;
  font-size: 13px;
  width: 100px;
  height: 20px;
  text-align: center;
  border-radius: 50px;
`;

const PlantFilterDisplayOptions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MenuIconUp = styled(DropUp)`
  width: 25px;
  stroke-width: 3px;
  color: var(--primary);
`;

const MenuIconDown = styled(DropDown)`
  width: 25px;
  stroke-width: 3px;
  color: var(--primary);
`;
const PlantFilterWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 1rem;
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
  &:hover {
    background-color: var(--highlight);
    cursor: pointer;
  }
`;
