import { v4 as uuid } from "uuid";

export default function PlantForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);
    const randomId = uuid();
    const newPlant = {
      id: randomId,
      name: data.name,
      botanicalName: data.botanicalName,
      imageUrl:
        "https://images.pexels.com/photos/2587313/pexels-photo-2587313.jpeg?auto=compress&cs=tinysrgb&w=1600",
      waterNeed: data.waterNeed,
      lightNeed: data.lightNeed,
      fertiliserSeason: formData.getAll("fertiliserSeason"),
      description: data.description,
    };
    console.log(newPlant);
  }

  return (
    <>
      <p>Create</p>
      <form onSubmit={handleSubmit}>
        <label>Plant Name</label>
        <input type="text" name="name" required />

        <label>Botanical Name</label>
        <input type="text" name="botanicalName" required />

        <label>Plant Description</label>
        <textarea name="description" />

        <fieldset>
          <legend>Light Needs</legend>
          <label>
            <input type="radio" name="lightNeed" value="Full Shade" required />
            full shade
          </label>
          <label>
            <input type="radio" name="lightNeed" value="Partial Shade" />
            partial shade
          </label>
          <label>
            <input type="radio" name="lightNeed" value="Full Sun" />
            full sun
          </label>
        </fieldset>

        <fieldset>
          <legend>Water Needs</legend>
          <label>
            <input type="radio" name="waterNeed" value="Low" required />
            low
          </label>
          <label>
            <input type="radio" name="waterNeed" value="Medium" />
            medium
          </label>
          <label>
            <input type="radio" name="waterNeed" value="High" />
            high
          </label>
        </fieldset>

        <fieldset>
          <legend>Fertiliser Season</legend>
          <label>
            <input
              type="checkbox"
              name="fertiliserSeason"
              value="Spring"
              id="spring"
            />
            Spring
          </label>
          <label>
            <input
              type="checkbox"
              name="fertiliserSeason"
              value="Summer"
              id="summer"
            />
            Summer
          </label>
          <label>
            <input
              type="checkbox"
              name="fertiliserSeason"
              value="Fall"
              id="fall"
            />
            Fall
          </label>
          <label>
            <input
              type="checkbox"
              name="fertiliserSeason"
              value="Winter"
              id="winter"
            />
            Winter
          </label>
        </fieldset>
        <button type="button">Cancel</button>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
