import { FilterButton, FilterTitle, PlantNeedWrapper } from "./LightNeedFilter";

export default function WaterNeedFilter({ activeFilter, onFilterPlants }) {
  return (
    <PlantNeedWrapper>
      <FilterTitle>Water Need:</FilterTitle>
      <FilterButton
        $isActive={activeFilter.waterNeed === "Low"}
        onClick={() => {
          onFilterPlants("waterNeed", "Low");
        }}
      >
        Low
      </FilterButton>
      <FilterButton
        $isActive={activeFilter.waterNeed === "Medium"}
        onClick={() => onFilterPlants("waterNeed", "Medium")}
      >
        Medium
      </FilterButton>
      <FilterButton
        $isActive={activeFilter.waterNeed === "High"}
        onClick={() => onFilterPlants("waterNeed", "High")}
      >
        High
      </FilterButton>
    </PlantNeedWrapper>
  );
}
