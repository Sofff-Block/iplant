import { useState } from "react";

export default function FertiliserSeasonFieldset({
  editPlant,
  onToggle,
  fertiliserSeason,
  setFertiliserSeason,
}) {
  // const [fertiliserSeason, setFertiliserSeason] = useState(
  //   editPlant?.fertiliserSeason || []
  // );

  // function toggleSeason(season) {
  //   setFertiliserSeason((prev) =>
  //     prev.includes(season)
  //       ? prev.filter((s) => s !== season)
  //       : [...prev, season]
  //   );

  //   console.log(fertiliserSeason);
  // }

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

      {/* <label>
          
            <input
              type="checkbox"
              name="fertiliserSeason"
              value="Spring"
              id="spring"
              aria-label="Your plant needs fertiliser in spring"
              defaultChecked={editPlant?.fertiliserSeason.includes("Spring")}
            />
            
            Spring
          </label>
          <label>
            <input
              type="checkbox"
              name="fertiliserSeason"
              value="Summer"
              id="summer"
              aria-label="Your plant needs fertiliser in summer"
              defaultChecked={editPlant?.fertiliserSeason.includes("Summer")}
            />
            Summer
          </label>
          <label>
            <input
              type="checkbox"
              name="fertiliserSeason"
              value="Fall"
              id="fall"
              aria-label="Your plant needs fertiliser in fall"
              defaultChecked={editPlant?.fertiliserSeason.includes("Fall")}
            />
            Fall
          </label>
          <label>
            <input
              type="checkbox"
              name="fertiliserSeason"
              value="Winter"
              id="winter"
              aria-label="Your plant needs fertiliser in winter"
              defaultChecked={editPlant?.fertiliserSeason.includes("Winter")}
            />
            Winter
          </label> */}
    </fieldset>
  );
}
