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
  background-color: ${({ $isSeason }) => ($isSeason ? "black" : "lightgrey")};
  color: ${({ $isSeason }) => ($isSeason ? "white" : "darkgrey")};
  padding: 10px;
  border-radius: 8px;
`;
