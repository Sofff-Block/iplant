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
      <StyledDrop $isWater={waterNeed !== "Low"} />
      <StyledDrop $isWater={waterNeed === "High"} />
    </WaterNeedWrapper>
  );
}

const WaterNeedWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledDrop = styled(Drop)`
  fill: ${({ $isWater }) => ($isWater ? "black" : "")};
  color: ${({ $isWater }) => ($isWater ? "black" : "lightgrey")}
`;
