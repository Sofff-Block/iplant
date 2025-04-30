import styled from "styled-components";

export default function FertiliserSeason({ season, isDark }) {
  return (
    <SeasonWrapper>
      <StyledSeason $isDark={isDark} $isSeason={season.includes("Spring")}>
        Spring
      </StyledSeason>
      <StyledSeason $isDark={isDark} $isSeason={season.includes("Summer")}>
        Summer
      </StyledSeason>
      <StyledSeason $isDark={isDark} $isSeason={season.includes("Fall")}>
        Fall
      </StyledSeason>
      <StyledSeason $isDark={isDark} $isSeason={season.includes("Winter")}>
        Winter
      </StyledSeason>
    </SeasonWrapper>
  );
}
const SeasonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledSeason = styled.div`
  background-color: ${({ $isSeason, $isDark }) =>
    $isSeason
      ? $isDark
        ? "var(--surface-light)"
        : "var(--on-surface)"
      : $isDark
      ? "rgba(255, 255, 255, 0.28)"
      : "var(--icon-disabled)"};

  color: ${({ $isSeason, $isDark }) =>
    $isSeason
      ? $isDark
        ? "var(--on-surface)"
        : "var(--surface-light)"
      : $isDark
      ? "rgba(255, 255, 255, 0.28)"
      : "var(--icon-disabled)"};

  padding: 10px;
  border-radius: 8px;
`;
