import { UploadFieldset, UploadLegend } from "./ImageUpload";

export default function WaterNeedFieldset({ editPlant }) {
  return (
    <UploadFieldset>
      <UploadLegend>Water Needs</UploadLegend>
      <label>
        <input
          id="low"
          type="radio"
          name="waterNeed"
          value="Low"
          aria-label="Your plant needs low water"
          defaultChecked={editPlant?.waterNeed === "Low"}
          required
        />
        Low
      </label>
      <label>
        <input
          id="medium"
          type="radio"
          name="waterNeed"
          value="Medium"
          aria-label="Your plant needs medium water"
          defaultChecked={editPlant?.waterNeed === "Medium"}
        />
        Medium
      </label>
      <label>
        <input
          id="high"
          type="radio"
          name="waterNeed"
          value="High"
          aria-label="Your plant needs high water"
          defaultChecked={editPlant?.waterNeed === "High"}
        />
        High
      </label>
    </UploadFieldset>
  );
}
