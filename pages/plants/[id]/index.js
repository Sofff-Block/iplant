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
import { useTheme } from "next-themes";

export default function PlantDetails({ onDeletePlant, isDark }) {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const { id } = router.query;

 

  const { data: plant, isLoading, error } = useSWR(`/api/plants/${id}`);

  if (error) return <p>failed to load</p>;
  if (isLoading) return <p>loading...</p>;

  return (
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
          <WaterNeed isDark={isDark} waterNeed={plant.waterNeed} />
          <h3>light needs:</h3>
          <LightNeed isDark={isDark} lightNeed={plant.lightNeed} />
          <h3>fertiliser season:</h3>
          <FertiliserSeason isDark={isDark} season={plant.fertiliserSeason} />
          <ButtonContainer>
            <StyledButton $isDanger onClick={() => setIsVisible(true)}>
              Delete
            </StyledButton>
            <StyledButton onClick={() => router.push(`/plants/${id}/edit`)}>
              Edit
            </StyledButton>
          </ButtonContainer>

          <ConfirmationModal
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            onDeletePlant={onDeletePlant}
            plantId={plant._id}
          />
        </DetailPageWrapper>
      </main>
  );
}

const PlantImagelWrapper = styled.div`
  margin-bottom: 10px;
  width: 320px;
  height: 320px;
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

const PlantDetailsTitle = styled.h1`
  margin: 10px 0px 0px;
`;

const PlantDetailsBotanical = styled.h2`
  font-size: 1rem;
  font-weight: 300;
  font-family: monospace;
  margin: 0px 0px 15px;
`;

const StyledButton = styled.button`
  all: unset;
  padding: 5px;
  background-color: ${({ $isDanger }) =>
    $isDanger ? "var(--danger)" : "var(--secondary)"};
  color: var(--surface-light);
  border-radius: 15px;
  width: 100px;
  height: 20px;
  font-size: 0.8rem;
  transition: transform 0.3s, background-color 0.3s ease;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  border-radius: 10px;
  text-align: center;
  margin-top: 30px;
  width: 320px;
  align-items: center;
`;

export { StyledButton, ButtonContainer };
