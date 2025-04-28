import { useState } from "react";
import { UploadFieldset, UploadLegend } from "./ImageUpload";

export default function FertiliserSeasonFieldset({
  onToggle,
  fertiliserSeason,
}) {
  return (
    <UploadFieldset>
      <UploadLegend>Fertiliser Season</UploadLegend>
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
    </UploadFieldset>
  );
}
