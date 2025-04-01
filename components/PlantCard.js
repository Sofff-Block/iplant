import Image from "next/image";
import styled from "styled-components";

export default function PlantCard({ image, name, botanicalName }) {
  return (
    <PlantCardWrapper>
      <PlantImageWrapper>
        <StyledImage
          sizes="(max-width: 150px)"
          alt={name}
          src={image}
          fill="true"
        ></StyledImage>
      </PlantImageWrapper>
      <h2> {name}</h2>
      <p>{botanicalName}</p>
    </PlantCardWrapper>
  );
}

const PlantImageWrapper = styled.div`
  width: 150px;
  height: 200px;
  position: relative;
  border: 2px solid black;
`;

const PlantCardWrapper = styled.div`
  display: flex;
  border: 2px solid purple;
  width: 150px;
  text-align: center;

  flex-direction: column;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;
