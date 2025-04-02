import Drop from "@/public/droplet.svg";
import styled from "styled-components";

export default function WaterNeed({ waterNeed }) {
  return (
    <WaterNeedWrapper>
      <StyledDrop
        $isWater={
          waterNeed === "Low" || waterNeed === "Medium" || waterNeed === "High"
        }
      />
      <StyledDrop $isWater={waterNeed === "Medium" || waterNeed === "High"} />
      <StyledDrop $isWater={waterNeed === "High"} />
    </WaterNeedWrapper>
  );
}

const WaterNeedWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledDrop = styled(Drop)`
  fill: ${({ $isWater }) => ($isWater === true ? "black" : "")};
  color: ${({ $isWater }) => ($isWater === true ? "black" : "lightgrey")}
`;
