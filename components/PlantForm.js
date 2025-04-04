import { uid } from "uid";

export default function PlantForm({ onAddPlants }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);
    const randomId = uid();
    const newPlant = {
      id: `${randomId}`,
      name: data.name,
      botanicalName: data.botanicalName,
      imageUrl:
        "https://images.pexels.com/photos/2587313/pexels-photo-2587313.jpeg?auto=compress&cs=tinysrgb&w=1600",
      waterNeed: data.waterNeed,
      lightNeed: data.lightNeed,
      fertiliserSeason: formData.getAll("fertiliserSeason"),
      description: data.description,
    };
    onAddPlants(newPlant);
    event.target.reset();
  }

  return (
    <>
      <p>Create</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-name">Plant Name</label>
        <input id="input-name" type="text" name="name" required />

        <label htmlFor="input-botanical-name">Botanical Name</label>
        <input
          id="input-botanical-name"
          type="text"
          name="botanicalName"
          required
        />

        <label htmlFor="description">Plant Description</label>
        <textarea id="description" name="description" />

        <fieldset>
          <legend>Light Needs</legend>
          <label htmlFor="full-shade">
            <input
              id="full-shade"
              type="radio"
              name="lightNeed"
              value="Full Shade"
              required
            />
            full shade
          </label>
          <label htmlFor="partial-shade">
            <input
              id="partial-shade"
              type="radio"
              name="lightNeed"
              value="Partial Shade"
            />
            partial shade
          </label>
          <label htmlFor="full-sun">
            <input
              id="full-sun"
              type="radio"
              name="lightNeed"
              value="Full Sun"
            />
            full sun
          </label>
        </fieldset>

        <fieldset>
          <legend>Water Needs</legend>
          <label htmlFor="low">
            <input
              id="low"
              type="radio"
              name="waterNeed"
              value="Low"
              required
            />
            low
          </label>
          <label htmlFor="medium">
            <input id="medium" type="radio" name="waterNeed" value="Medium" />
            medium
          </label>
          <label htmlFor="high">
            <input id="high" type="radio" name="waterNeed" value="High" />
            high
          </label>
        </fieldset>

        <fieldset>
          <legend>Fertiliser Season</legend>
          <label htmlFor="spring">
            <input
              type="checkbox"
              name="fertiliserSeason"
              value="Spring"
              id="spring"
            />
            Spring
          </label>
          <label htmlFor="summer">
            <input
              type="checkbox"
              name="fertiliserSeason"
              value="Summer"
              id="summer"
            />
            Summer
          </label>
          <label htmlFor="fall">
            <input
              type="checkbox"
              name="fertiliserSeason"
              value="Fall"
              id="fall"
            />
            Fall
          </label>
          <label htmlFor="winter">
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
