import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import BookmarkButton from "./BookmarkButton";

export default function PlantCard({
  image,
  name,
  botanicalName,
  id,
  onToggleOwned,
  owned,
}) {
  return (
    <PlantCardWrapper>
      <Link href={`/plants/${id}`}>
        <PlantImageWrapper>
          <StyledImage
            sizes="(max-width: 150px)"
            alt={name}
            src={image}
            fill="true"
            priority
          />
        </PlantImageWrapper>
      </Link>
      <PlantCardText>
        <PlantCardTitle>{name}</PlantCardTitle>
        <PlantCardBotanical>{botanicalName}</PlantCardBotanical>
      </PlantCardText>
      <BookmarkButton
        plantId={id}
        onToggleOwned={onToggleOwned}
        owned={owned}
      />
    </PlantCardWrapper>
  );
}

const PlantImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  border-radius: 10px;
`;

const PlantCardWrapper = styled.div`
  display: flex;
  background-color: var(--surface-light);
  width: 150px;
  height: 380px;
  border-radius: 10px;
  justify-content: space-between;
  flex-direction: column;
  word-wrap: normal;
  overflow-wrap: break-word;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: 10px 10px 0px 0px;
  transition: transform 0.3s, background-color 0.3s ease;

  &:hover {
    transform: scale(1.1);
    border-radius: 10px;
  }
`;

const PlantCardTitle = styled.h2`
  margin: 0px;
  margin-bottom: 10px;
`;

const PlantCardBotanical = styled.p`
  margin: 0px;
`;

const PlantCardText = styled.div`
  height: 120px;
  padding: 15px 8px 0px 8px;
`;
