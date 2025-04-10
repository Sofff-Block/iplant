export default function WaterNeedFieldset({editPlant}) {
    return (
<fieldset>
          <legend>Water Needs</legend>
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
            low
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
            medium
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
            high
          </label>
        </fieldset>
    );
}