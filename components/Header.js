import IPlantLogo from "@/public/iplant-logo.svg";
import styled from "styled-components";
import Link from "next/link";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import BackArrow from "@/public/circle-chevron-left.svg";

export default function Header({router}) {
  return (
    <StyledHeader>
      <StyledBackArrow aria-label="Link back to homepage" $isVisible={router.pathname === "/plants/[id]"} onClick={() => router.back()} />
      <Link href={"/"} aria-label="Link to homepage">
        <StyledLogo />
      </Link>
      <ThemeSwitcher aria-label="Switch between light and dark mode"/>
    </StyledHeader>
  );
}
const StyledHeader = styled.header`
  display: flex;
  margin-bottom: 40px;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0px;
  width: 100%;
  gap: 30px;
`;
const StyledLogo = styled(IPlantLogo).attrs({ id: "logo" })`
  width: 150px;
  fill: var(--secondary);
`;
const StyledBackArrow = styled(BackArrow).attrs({id: "backarrow"})`
  color: var(--on-surface);
    visibility: ${({$isVisible}) => $isVisible ? "visible" : "hidden"};
  width: 30px;
  &:hover {
    color: var(--primary);
    cursor: pointer;
  }
`;

