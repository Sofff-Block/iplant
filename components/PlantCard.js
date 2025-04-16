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
      <h2>{name}</h2>
      <p>{botanicalName}</p>
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
`;

const PlantCardWrapper = styled.div`
  display: flex;
  border: 1px solid black;
  width: 150px;
  text-align: center;

  flex-direction: column;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;
