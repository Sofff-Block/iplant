import { FilterButton } from "./LightNeedFilter";

export default function WaterNeedFilter({ activeFilter, onFilterPlants }) {
  return (
    <>
      <FilterButton
        $isActive={activeFilter === "Low"}
        onClick={() => onFilterPlants("waterNeed", "Low")}
      >
        Full Shade
      </FilterButton>
      <FilterButton
        $isActive={activeFilter === "Medium"}
        onClick={() => onFilterPlants("waterNeed", "Medium")}
      >
        Partial Shade
      </FilterButton>
      <FilterButton
        $isActive={activeFilter === "High"}
        onClick={() => onFilterPlants("waterNeed", "High")}
      >
        Full Sun
      </FilterButton>
    </>
  );
}
