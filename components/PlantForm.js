export default function PlantForm() {
  return (
    <>
      <p>Create</p>
      <form>
        <label>Plant Name</label>
        <input type="text" required />

        <label>Botanical Name</label>
        <input type="text" required />

        <label>Plant Description</label>
        <textarea />

        <fieldset>
          <legend>Light Needs</legend>
          <label>
            <input type="radio" name="lightNeed" required />
            full shade
          </label>
          <label>
            <input type="radio" name="lightNeed" />
            partial shade
          </label>
          <label>
            <input type="radio" name="lightNeed" />
            full sun
          </label>
        </fieldset>

        <fieldset>
          <legend>Water Needs</legend>
          <label>
            <input type="radio" name="waterNeed" required/>
            low
          </label>
          <label>
            <input type="radio" name="waterNeed" />
            medium
          </label>
          <label>
            <input type="radio" name="waterNeed" />
            high
          </label>
        </fieldset>

        <fieldset>
          <legend>Fertiliser Season</legend>
          <label>
            <input type="checkbox" id="spring" />
            Spring
          </label>
          <label>
            <input type="checkbox" id="summer" />
            Summer
          </label>
          <label>
            <input type="checkbox" id="fall" />
            Fall
          </label>
          <label>
            <input type="checkbox" id="winter" />
            Winter
          </label>
        </fieldset>
        <button>Cancel</button>
        <button>Submit</button>
      </form>
    </>
  );
}
