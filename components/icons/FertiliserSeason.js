import styled from "styled-components";

export default function FertiliserSeason({ season }) {
  return (
    <SeasonWrapper>
      <StyledSeason $isSeason={season.includes("Spring")}>Spring</StyledSeason>
      <StyledSeason $isSeason={season.includes("Summer")}>Summer</StyledSeason>
      <StyledSeason $isSeason={season.includes("Fall")}>Fall</StyledSeason>
      <StyledSeason $isSeason={season.includes("Winter")}>Winter</StyledSeason>
    </SeasonWrapper>
  );
}
const SeasonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledSeason = styled.div`
  background-color: ${({ $isSeason }) =>
    $isSeason ? "var(--on-surface)" : "var(--icon-disabled)"};
  color: ${({ $isSeason }) =>
    $isSeason ? "var(--surface-light)" : "var(--icon-disabled)"};
  padding: 10px;
  border-radius: 8px;
`;
