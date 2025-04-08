import styled from "styled-components";
import { uid } from "uid";
import { useRouter } from "next/navigation";

export default function PlantForm({ onAddPlants }) {
  const router = useRouter();
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
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
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="input-name">Plant Name</label>
        <input
          id="input-name"
          type="text"
          name="name"
          aria-label="Input for Plant Name"
          required
        />

        <label htmlFor="input-botanical-name">Botanical Name</label>
        <input
          id="input-botanical-name"
          type="text"
          name="botanicalName"
          aria-label="Input for Plant Botanical Name"
          required
        />

        <label htmlFor="description">Plant Description</label>
        <textarea
          id="description"
          name="description"
          aria-label="Textinput for Plant Description"
          placeholder="Tell us something about your plant"
        />

        <fieldset>
          <legend>Light Needs</legend>
          <label htmlFor="full-shade">
            <input
              id="full-shade"
              type="radio"
              name="lightNeed"
              value="Full Shade"
              aria-label="Your plant needs full shade"
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
            />
            full sun
          </label>
        </fieldset>

        <fieldset>
          <legend>Water Needs</legend>
          <label>
            <input
              id="low"
              type="radio"
              name="waterNeed"
              value="Low"
              aria-label="Your plant needs low water"
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
            />
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
              aria-label="Your plant needs fertiliser in spring"
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
            />
            Winter
          </label>
        </fieldset>
        <button onClick={() => router.push("/")} type="button">
          Cancel
        </button>
        <button type="submit">Submit</button>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
