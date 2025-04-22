import PartialShade from "@/public/partial-shade.svg";
import Shade from "@/public/shade.svg";
import Sun from "@/public/sun.svg";
import styled from "styled-components";

export default function LightNeed({ lightNeed }) {
  return (
    <LightNeedWrapper>
      <StyledShade $isLight={lightNeed === "Full Shade"} />
      <StyledPartialShade $isLight={lightNeed === "Partial Shade"} />
      <StyledSun $isLight={lightNeed === "Full Sun"} />
    </LightNeedWrapper>
  );
}

const LightNeedWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledShade = styled(Shade)`
  color: ${({ $isLight }) => ($isLight ? "black" : "lightgray")};
  fill: ${({ $isLight }) => ($isLight ? "black" : "lightgray")};
`;

const StyledPartialShade = styled(PartialShade)`
  fill: ${({ $isLight }) => ($isLight ? "black" : "lightgray")};
  width: 24px;
`;

const StyledSun = styled(Sun)`
  color: ${({ $isLight }) => ($isLight ? "black" : "lightgray")};
  fill: ${({ $isLight }) => ($isLight ? "black" : "lightgray")};
`;
