import IPlantLogo from "@/public/iplant-logo.svg";
import styled from "styled-components";
import Link from "next/link";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Header() {
  return (
    <StyledHeader>
      <Link href={"/"}>
        <StyledLogo />
      </Link>
      <StyledThemeSwitcher />
    </StyledHeader>
  );
}
const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  padding: 10px 0px;
  width: 100%;
  gap: 30px;
  position: relative;
`;
const StyledLogo = styled(IPlantLogo).attrs({ id: "logo" })`
  width: 150px;
  fill: var(--secondary);
`;

const StyledThemeSwitcher = styled(ThemeSwitcher)`
  position: absolute;
  z-index: 1000;
  top: 10px;
  right: 0;
`;
