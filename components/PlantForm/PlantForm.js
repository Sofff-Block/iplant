import styled from "styled-components";
import { uid } from "uid";
import { useRouter } from "next/navigation";
import LightNeedFieldset from "./LightNeedFieldset";
import WaterNeedFieldset from "./WaterNeedFieldset";
import FertiliserSeasonFieldset from "./FertiliserSeasonFieldset";

export default function PlantForm({ onSubmit, isEdit, editPlant }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const randomId = uid();
    const newPlant = {
      id: isEdit ? editPlant.id : `${randomId}`,
      name: data.name,
      botanicalName: data.botanicalName,
      imageUrl: isEdit
        ? editPlant.imageUrl
        : "https://images.pexels.com/photos/2587313/pexels-photo-2587313.jpeg?auto=compress&cs=tinysrgb&w=1600",
      waterNeed: data.waterNeed,
      lightNeed: data.lightNeed,
      fertiliserSeason: formData.getAll("fertiliserSeason"),
      description: data.description,
    };
    onSubmit(newPlant, editPlant?.id);
    event.target.reset();
  }

  return (
    <>
      <h1>{isEdit ? "Edit Plant" : "Create Plant"}</h1>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="input-name">Plant Name</label>
        <input
          id="input-name"
          type="text"
          name="name"
          aria-label="Input for Plant Name"
          defaultValue={editPlant?.name}
          required
        />

        <label htmlFor="input-botanical-name">Botanical Name</label>
        <input
          id="input-botanical-name"
          type="text"
          name="botanicalName"
          aria-label="Input for Plant Botanical Name"
          defaultValue={editPlant?.botanicalName}
          required
        />

        <label htmlFor="description">Plant Description</label>
        <textarea
          id="description"
          name="description"
          aria-label="Textinput for Plant Description"
          placeholder="Tell us something about your plant"
          defaultValue={editPlant?.description}
        />

        <LightNeedFieldset editPlant={editPlant} />
        <WaterNeedFieldset editPlant={editPlant} />
        <FertiliserSeasonFieldset editPlant={editPlant} />

        <button
          onClick={() =>
            isEdit ? router.push(`/plants/${editPlant?.id}`) : router.push("/")
          }
          type="button"
        >
          Cancel
        </button>
        <button type="submit">{isEdit ? "Save Changes" : "Add Plant"}</button>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
