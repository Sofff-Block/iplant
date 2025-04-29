import { UploadFieldset, UploadLegend } from "./ImageUpload";

export default function LightNeedFieldset({ editPlant }) {
  return (
    <UploadFieldset>
      <UploadLegend>Light Needs</UploadLegend>
      <label htmlFor="full-shade">
        <input
          id="full-shade"
          type="radio"
          name="lightNeed"
          value="Full Shade"
          aria-label="Your plant needs full shade"
          defaultChecked={editPlant?.lightNeed === "Full Shade"}
          required
        />
        Full Shade
      </label>
      <label>
        <input
          id="partial-shade"
          type="radio"
          name="lightNeed"
          value="Partial Shade"
          aria-label="Your plant needs partial shade"
          defaultChecked={editPlant?.lightNeed === "Partial Shade"}
        />
        Partial Shade
      </label>
      <label>
        <input
          id="full-sun"
          type="radio"
          name="lightNeed"
          value="Full Sun"
          aria-label="Your plant needs full sun"
          defaultChecked={editPlant?.lightNeed === "Full Sun"}
        />
        Full Sun
      </label>
    </UploadFieldset>
  );
}
