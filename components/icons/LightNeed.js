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

const StyledShade = styled(Shade).attrs({className: "darkNeed"})`
  width: 36px;
  color: ${({ $isLight }) => ($isLight ? "var(--on-surface)" : "transparent")};
  fill: ${({ $isLight }) =>
    $isLight ? "var(--on-surface)" : "var(--icon-disabled)"};
`;

const StyledPartialShade = styled(PartialShade).attrs({className: "darkNeed"})`
  fill: ${({ $isLight }) =>
    $isLight ? "var(--on-surface)" : "var(--icon-disabled)"};
  width: 33px;
`;

const StyledSun = styled(Sun).attrs({className: "darkNeed"})`
  width: 36px;
  color: ${({ $isLight }) =>
    $isLight ? "var(--on-surface)" : "var(--icon-disabled)"};
  fill: ${({ $isLight }) =>
    $isLight ? "var(--on-surface)" : "transparent"};
`;
