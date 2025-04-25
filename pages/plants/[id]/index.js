import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import BackArrow from "@/public/circle-chevron-left.svg";
import WaterNeed from "@/components/icons/WaterNeed";
import LightNeed from "@/components/icons/LightNeed";
import FertiliserSeason from "@/components/icons/FertiliserSeason";
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
    <>
      <StyledBackArrow onClick={() => router.back()} />
      <main>

      
        <DetailPageWrapper>
          <PlantDetailsTitle>{plant.name}</PlantDetailsTitle>
          <PlantDetailsBotanical>{plant.botanicalName}</PlantDetailsBotanical>
          <PlantImagelWrapper>
            <PlantDetailImage
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
          <button onClick={() => setIsVisible(true)}>Delete</button>
          <button onClick={() => router.push(`/plants/${id}/edit`)}>
            Edit
          </button>

          <ConfirmationModal
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            onDeletePlant={onDeletePlant}
            plantId={plant._id}
          />
        </DetailPageWrapper>
        </main>
    </>
  );
}

const PlantImagelWrapper = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  border-radius: 10px;
`;

const PlantDetailImage = styled(Image)`
  border-radius: 10px;
  object-fit: cover;
`;

const DetailPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 320px;
  align-items: center;
  align-self: center;
`;

const StyledBackArrow = styled(BackArrow)`
  color: var(--on-surface);
  position: relative;
  z-index: 102;
  top: -3.7rem;
  width: 36px;
  &:hover {
    color: var(--primary);
  }
`;

const PlantDetailsTitle = styled.h1`
  margin: 10px 0px 0px;
`;

const PlantDetailsBotanical = styled.h2`
  //font-style: italic;
  font-size: 1rem;
  font-weight: 300;
  font-family: monospace;
  margin: 0px 0px 15px;
`;
