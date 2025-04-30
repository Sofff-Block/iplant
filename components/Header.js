import IPlantLogo from "@/public/iplant-logo.svg";
import styled from "styled-components";
import Link from "next/link";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import BackArrow from "@/public/circle-chevron-left.svg";

export default function Header({router}) {
  return (
    <StyledHeader>
      <StyledBackArrow $isVisible={router.pathname === "/plants/[id]"} onClick={() => router.back()} />
      <Link href={"/"}>
        <StyledLogo />
      </Link>
      <ThemeSwitcher />
    </StyledHeader>
  );
}
const StyledHeader = styled.header`
  display: flex;
  margin-bottom: 40px;
  justify-content: space-between;
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

