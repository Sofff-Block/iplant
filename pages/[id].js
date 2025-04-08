import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import BackArrow from "@/public/circle-chevron-left.svg";
import WaterNeed from "@/components/icons/WaterNeed";
import LightNeed from "@/components/icons/LightNeed";
import FertiliserSeason from "@/components/icons/FertiliserSeason";
import Link from "next/link";

export default function PlantDetails({ plants }) {
  const router = useRouter();
  const { id } = router.query;
  const plant = plants.find((plant) => plant.id === id);
  if (!plant) return <h1>Plant not found.</h1>;

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
      <Link href={"/"}>
        <BackArrow />
      </Link>
      <h1>{name}</h1>
      <h2>{botanicalName}</h2>
      <PlantImagelWrapper>
        <Image
          sizes="(max-width: 300px)"
          alt={name}
          src={imageUrl}
          fill="true"
          priority
        />
      </PlantImagelWrapper>
      <p>{description}</p>
      <p>water needs:</p>
      <WaterNeed waterNeed={waterNeed} />
      <p>light needs:</p>
      <LightNeed lightNeed={lightNeed} />
      <p>fertiliser season:</p>
      <FertiliserSeason season={fertiliserSeason} />
    </>
  );
}

const PlantImagelWrapper = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
`;
