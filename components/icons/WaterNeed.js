import Drop from "@/public/droplet.svg";
import styled from "styled-components";

export default function WaterNeed({ waterNeed, isDark }) {
  return (
    <>
      {isDark ? (
        <WaterNeedWrapper>
          <StyledDropDark
            $isWater={
              waterNeed === "Low" ||
              waterNeed === "Medium" ||
              waterNeed === "High"
            }
          />
          <StyledDropDark $isWater={waterNeed !== "Low"} />
          <StyledDropDark $isWater={waterNeed === "High"} />
        </WaterNeedWrapper>
      ) : (
        <WaterNeedWrapper>
          <StyledDrop
            $isWater={
              waterNeed === "Low" ||
              waterNeed === "Medium" ||
              waterNeed === "High"
            }
          />
          <StyledDrop $isWater={waterNeed !== "Low"} />
          <StyledDrop $isWater={waterNeed === "High"} />
        </WaterNeedWrapper>
      )}
    </>
  );
}

const WaterNeedWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledDrop = styled(Drop)`
  width: 36px;
  fill: ${({ $isWater }) => ($isWater ? "black" : "")};
  color: ${({ $isWater }) => ($isWater ? "black" : "var(--icon-disabled)")};
`;

const StyledDropDark = styled(Drop)`
  width: 36px;
  fill: ${({ $isWater }) => ($isWater ? "white" : "")};
  color: ${({ $isWater }) =>
    $isWater ? "white" : "rgba(255, 255, 255, 0.28)"};
`;
