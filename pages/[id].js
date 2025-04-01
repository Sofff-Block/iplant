import plants from "@/assets/plants.js";
import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";

export default function PlantDetails() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <p>Loading...</p>;

  // console.log(router);
  // console.log("plants:", plants);
  const plant = plants.find((plant) => plant.id === id);
  console.log(JSON.stringify(plant, null, 2));

  const {
    name,
    botanicalName,
    imageUrl,
    waterNeed,
    lightNeed,
    fertiliserSeason,
    description,
  } = plant;

  return (
    <>
      <h1>{name}</h1>
      <h2>{botanicalName}</h2>
      <PlantImagelWrapper>
        <Image
          sizes="(max-width: 300px)"
          alt={name}
          src={imageUrl}
          fill="true"
        />
      </PlantImagelWrapper>
      <p>{description}</p>
    </>
  );
}

const PlantImagelWrapper = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
`;
