export default function FertiliserSeasonFieldset({editPlant}) {
    return (
<fieldset>
          <legend>Fertiliser Season</legend>
          <label>
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
          </label>
        </fieldset>
    );
}