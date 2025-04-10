import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import BackArrow from "@/public/circle-chevron-left.svg";
import WaterNeed from "@/components/icons/WaterNeed";
import LightNeed from "@/components/icons/LightNeed";
import FertiliserSeason from "@/components/icons/FertiliserSeason";
import Link from "next/link";
import ConfirmationModal from "@/components/ConfirmationModal";

export default function PlantDetails({ plants, onDeletePlant }) {
  const [isVisible, setIsVisible] = useState(false);
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
    <DetailPageWrapper>
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
      <button onClick={() => router.push(`/plants/${id}/edit`)}>Edit</button>
      <button onClick={() => setIsVisible(true)}>Delete</button>
      <ConfirmationModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        onDeletePlant={onDeletePlant}
        plantId={id}
      />
    </DetailPageWrapper>
  );
}

const PlantImagelWrapper = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
`;

const DetailPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
