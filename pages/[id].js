import plants from "@/assets/plants.js";
import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import Drop from "@/public/droplet.svg";
import Sun from "@/public/sun.svg";
import WaterNeed from "@/components/icons/WaterNeed";
import LightNeed from "@/components/icons/LightNeed";
import FertiliserSeason from "@/components/icons/FertiliserSeason";

export default function PlantDetails() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <p>Loading...</p>;

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
      <WaterNeed waterNeed={waterNeed}/>
     <LightNeed lightNeed={lightNeed}/>
     <FertiliserSeason season={fertiliserSeason}/>
    </>
  );
}

const StyledDrop = styled(Drop)`
  fill: ${({ $filled }) => ($filled === "Medium" ? "black" : "")};
`;

const PlantImagelWrapper = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
`;
