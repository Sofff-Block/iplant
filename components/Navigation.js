import Link from "next/link";
import styled from "styled-components";
import Flower from "@/public/flower.svg";
import House from "@/public/house.svg";
import AddPlantIcon from "@/public/badge-plus.svg";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  const route = router.route;
  return (
    <StyledNav>
      <StyledLink
        $isActive={route === "/"}
        href="/"
        aria-label="Link to homepage"
      >
        <House />
      </StyledLink>
      <StyledLink
        $isActive={route === "/create"}
        href="/create"
        aria-label="Link to create plants form page"
      >
        <AddPlantIcon />
      </StyledLink>
      <StyledLink
        $isActive={route === "/my-plants"}
        href="/my-plants"
        aria-label="Link to my plants page"
      >
        <Flower />
      </StyledLink>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--primary);
  z-index: 100;
`;

const StyledLink = styled(Link)`
  all: unset;
  color: ${({ $isActive }) =>
    $isActive ? "var(--secondary)" : "var(--surface-light)"};
  width: 36px;
  &:hover {
    color: var(--on-surface);
  }
`;
