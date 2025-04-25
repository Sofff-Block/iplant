import IPlantLogo from "@/public/iplant-logo.svg";
import styled from "styled-components";
import Link from "next/link";

export default function Header() {
  return (
    <StyledHeader>
    <StyledHomeLink href={"/"}> 
      <StyledLogo />
      </StyledHomeLink>
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

const StyledHomeLink = styled(Link)`
`;
