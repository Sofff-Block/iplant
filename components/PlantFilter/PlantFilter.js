import styled from "styled-components";
import LightNeedFilter from "./LightNeedFilter";
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
  margin-bottom: 20px;
  &:hover {
    background-color: var(--highlight);
    cursor: pointer;
  }
`;
