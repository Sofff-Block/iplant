import PartialShade from "@/public/partial-shade.svg";
import Shade from "@/public/shade.svg";
import Sun from "@/public/sun.svg";
import styled from "styled-components";

export default function LightNeed({ lightNeed, isDark }) {
  return (
    <>
      {isDark ? (
        <LightNeedWrapper>
          <StyledShadeDark $isLight={lightNeed === "Full Shade"} />
          <StyledPartialShadeDark $isLight={lightNeed === "Partial Shade"} />
          <StyledSunDark $isLight={lightNeed === "Full Sun"} />
        </LightNeedWrapper>
      ) : (
        <LightNeedWrapper>
          <StyledShade $isLight={lightNeed === "Full Shade"} />
          <StyledPartialShade $isLight={lightNeed === "Partial Shade"} />
          <StyledSun $isLight={lightNeed === "Full Sun"} />
        </LightNeedWrapper>
      )}
    </>
  );
}

const LightNeedWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledShade = styled(Shade)`
  width: 36px;
  color: ${({ $isLight }) => ($isLight ? "var(--on-surface)" : "transparent")};
  fill: ${({ $isLight }) =>
    $isLight ? "var(--on-surface)" : "var(--icon-disabled)"};
`;

const StyledPartialShade = styled(PartialShade)`
  fill: ${({ $isLight }) =>
    $isLight ? "var(--on-surface)" : "var(--icon-disabled)"};
  width: 33px;
`;

const StyledSun = styled(Sun)`
  width: 36px;
  color: ${({ $isLight }) =>
    $isLight ? "var(--on-surface)" : "var(--icon-disabled)"};
  fill: ${({ $isLight }) => ($isLight ? "var(--on-surface)" : "transparent")};
`;

const StyledShadeDark = styled(Shade)`
  width: 36px;
  color: ${({ $isLight }) => ($isLight ? "white" : "transparent")};
  fill: ${({ $isLight }) => ($isLight ? "white" : "rgba(255, 255, 255, 0.28)")};
`;

const StyledPartialShadeDark = styled(PartialShade)`
  fill: ${({ $isLight }) => ($isLight ? "white" : "rgba(255, 255, 255, 0.28)")};
  width: 33px;
`;

const StyledSunDark = styled(Sun)`
  width: 36px;
  color: ${({ $isLight }) =>
    $isLight ? "white" : "rgba(255, 255, 255, 0.28)"};
  fill: ${({ $isLight }) => ($isLight ? "white" : "transparent")};
`;
