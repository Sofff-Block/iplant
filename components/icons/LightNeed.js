import PartialShade from "@/public/half-shade.svg";
import Shade from "@/public/sun-shade.svg";
import Sun from "@/public/sun.svg"
import styled from "styled-components";

export default function LightNeed({ lightNeed }) {
  return (
    <LightNeedWrapper>
      <StyledShade $isShade $isLight={lightNeed === "Full Shade"} />
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
  color: ${({ $isLight }) => ($isLight ? "black" : "lightgray")};
  transform: rotate(45deg);
`;

const StyledSun = styled(Sun)`
  color: ${({ $isLight }) => ($isLight ? "black" : "lightgray")};
  fill: ${({ $isLight }) => ($isLight ? "black" : "lightgray")};
`;


