import IPlantLogo from "@/public/iplant-logo.svg";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <StyledLogo />
    </StyledHeader>
  );
}
const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
const StyledLogo = styled(IPlantLogo)`
  width: 150px;
  fill: var(--secondary);
`;
