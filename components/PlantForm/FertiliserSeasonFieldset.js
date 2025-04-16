import { useState } from "react";

export default function FertiliserSeasonFieldset({
  onToggle,
  fertiliserSeason,
}) {
  return (
    <fieldset>
      <legend>Fertiliser Season</legend>
      {["Spring", "Summer", "Fall", "Winter"].map((season) => (
        <label key={season}>
          <input
            type="checkbox"
            name="fertiliserSeason"
            value={season}
            checked={fertiliserSeason.includes(season)}
            onChange={() => onToggle(season)}
          />
          {season}
        </label>
      ))}
    </fieldset>
  );
}
