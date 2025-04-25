import { FilterButton } from "./LightNeedFilter";

export default function WaterNeedFilter({ activeFilter, onFilterPlants }) {
  return (
    <>
      <FilterButton
        $isActive={activeFilter === "Low"}
        onClick={() => onFilterPlants("waterNeed", "Low")}
      >
        Low
      </FilterButton>
      <FilterButton
        $isActive={activeFilter === "Medium"}
        onClick={() => onFilterPlants("waterNeed", "Medium")}
      >
        Medium
      </FilterButton>
      <FilterButton
        $isActive={activeFilter === "High"}
        onClick={() => onFilterPlants("waterNeed", "High")}
      >
        High
      </FilterButton>
    </>
  );
}
