import IPlantLogo from "@/public/iplant-logo.svg";
import styled from "styled-components";
import Link from "next/link";

export default function Header() {
  return (
    <StyledHeader>
    <Link href={"/"}> 
      <StyledLogo />
      </Link>
    </StyledHeader>
  );
}
const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  padding: 10px 0px;
  width: 100%;
`;
const StyledLogo = styled(IPlantLogo)`
  width: 150px;
  fill: var(--secondary);
`;