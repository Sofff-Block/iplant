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
        {isDropped === false && (
          <DisplayActiveFilterWrapper>
            {Object.entries(activeFilter).map(([key, value]) => (
              <DisplayActiveFilter
                key={key}
                $isActive={Object.keys(activeFilter).length > 0}
              >
                {value}
              </DisplayActiveFilter>
            ))}
          </DisplayActiveFilterWrapper>
        )}
        <ClearButton
          $isActive={Object.keys(activeFilter).length > 0}
          onClick={() => {
            onClearFilter();
            setIsDropped(false);
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
  margin-bottom: 1.7rem;
`;
const PlantFilterMenu = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--primary);
`;
const DisplayActiveFilterWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const DisplayActiveFilter = styled(FilterButton)`
  all: unset;
  visibility: ${({ $isActive }) => ($isActive ? "visible" : "hidden")};
  background-color: var(--primary);
  color: white;
  padding: 5px;
  font-size: 10px;
  width: 70px;
  height: 12px;
  text-align: center;
  border-radius: 50px;
`;

const PlantFilterDisplayOptions = styled.div`
  display: flex;
  align-items: center;
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
  margin-left: auto;
  margin-right: 0;
  &:hover {
    background-color: var(--highlight);
    cursor: pointer;
  }
`;
