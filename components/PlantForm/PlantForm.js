import styled from "styled-components";
import { useRouter } from "next/navigation";
import LightNeedFieldset from "./LightNeedFieldset";
import WaterNeedFieldset from "./WaterNeedFieldset";
import FertiliserSeasonFieldset from "./FertiliserSeasonFieldset";
import { useState } from "react";
import ImageUpload from "./ImageUpload";

export default function PlantForm({ onSubmit, isEdit, editPlant }) {
  const router = useRouter();
  const [fertiliserSeason, setFertiliserSeason] = useState(
    editPlant?.fertiliserSeason || []
  );

  function toggleSeason(season) {
    setFertiliserSeason((prev) =>
      prev.includes(season)
        ? prev.filter((s) => s !== season)
        : [...prev, season]
    );
  }

  const defaultImage =
    "https://res.cloudinary.com/dcbjcygcd/image/upload/v1745591068/newplantimages/jty68ejwzufhytpjlfqqh2b54.jpg";

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    let imageUrl;

    if (data.imageUrl.size > 0) {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        console.error("Whoopsie");
        return;
      }
      let { url } = await response.json();
      imageUrl = url;
    }
    const newPlant = {
      name: data.name,
      botanicalName: data.botanicalName,
      lightNeed: data.lightNeed,
      waterNeed: data.waterNeed,
      fertiliserSeason: fertiliserSeason,
      description: data.description,
      imageUrl: imageUrl || editPlant?.imageUrl || defaultImage,
    };

    await onSubmit(newPlant, editPlant?._id);

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
        <FertiliserSeasonFieldset
          onToggle={toggleSeason}
          fertiliserSeason={fertiliserSeason}
          setFertiliserSeason={setFertiliserSeason}
          editPlant={editPlant}
        />
        <ImageUpload />
        <button
          onClick={() =>
            isEdit ? router.push(`/plants/${editPlant?._id}`) : router.push("/")
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
