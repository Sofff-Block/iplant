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
import useSWR from "swr";

export default function PlantDetails({ onDeletePlant }) {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data: plant, isLoading, error } = useSWR(`/api/plants/${id}`);

  if (error) return <p>failed to load</p>;
  if (isLoading) return <p>loading...</p>;

  return (
    <DetailPageWrapper>
      <Link href={"/"}>
        <BackArrow />
      </Link>
      <h1>{plant.name}</h1>
      <h2>{plant.botanicalName}</h2>
      <PlantImagelWrapper>
        <Image
          sizes="(max-width: 300px)"
          alt={plant.name}
          src={plant.imageUrl}
          fill="true"
          priority
        />
      </PlantImagelWrapper>
      <p>{plant.description}</p>
      <h3>water needs:</h3>
      <WaterNeed waterNeed={plant.waterNeed} />
      <h3>light needs:</h3>
      <LightNeed lightNeed={plant.lightNeed} />
      <h3>fertiliser season:</h3>
      <FertiliserSeason season={plant.fertiliserSeason} />
      <button onClick={() => router.push(`/plants/${id}/edit`)}>Edit</button>
      <button onClick={() => setIsVisible(true)}>Delete</button>
      <ConfirmationModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        onDeletePlant={onDeletePlant}
        plantId={plant._id}
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
