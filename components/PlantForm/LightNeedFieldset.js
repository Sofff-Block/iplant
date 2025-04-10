export default function LightNeedFieldset({editPlant}) {
    return (
<fieldset>
          <legend>Light Needs</legend>
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
            full shade
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
            partial shade
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
            full sun
          </label>
        </fieldset>
    );
}