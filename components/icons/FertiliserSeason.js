import styled from "styled-components";

export default function FertiliserSeason({ season, isDark }) {
  return (
    <>
    {isDark ? 
    <SeasonWrapper>
      <StyledSeasonDark $isSeason={season.includes("Spring")}>Spring</StyledSeasonDark>
      <StyledSeasonDark $isSeason={season.includes("Summer")}>Summer</StyledSeasonDark>
      <StyledSeasonDark $isSeason={season.includes("Fall")}>Fall</StyledSeasonDark>
      <StyledSeasonDark $isSeason={season.includes("Winter")}>Winter</StyledSeasonDark>
    </SeasonWrapper>: <SeasonWrapper>
      <StyledSeason $isSeason={season.includes("Spring")}>Spring</StyledSeason>
      <StyledSeason $isSeason={season.includes("Summer")}>Summer</StyledSeason>
      <StyledSeason $isSeason={season.includes("Fall")}>Fall</StyledSeason>
      <StyledSeason $isSeason={season.includes("Winter")}>Winter</StyledSeason>
    </SeasonWrapper> }
    </>
  );
}
const SeasonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledSeason = styled.div.attrs({className: "darkNeed"})`
  background-color: ${({ $isSeason }) =>
    $isSeason ? "var(--on-surface)" : "var(--icon-disabled)"};
  color: ${({ $isSeason }) =>
    $isSeason ? "var(--surface-light)" : "var(--icon-disabled)"};
  padding: 10px;
  border-radius: 8px;
`;

const StyledSeasonDark = styled.div.attrs({className: "darkNeed"})`
  background-color: ${({ $isSeason }) =>
    $isSeason ? "white" : "rgba(255, 255, 255, 0.28)"};
  color: ${({ $isSeason }) =>
    $isSeason ? "var(--on-surface)" : "rgba(255, 255, 255, 0.28)"};
  padding: 10px;
  border-radius: 8px;
`;
