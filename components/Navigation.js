import Link from "next/link";
import styled from "styled-components";
import Flower from "@/public/flower.svg";
import House from "@/public/house.svg";
import AddPlantIcon from "@/public/badge-plus.svg";

export default function Navigation({ setDisplayForm }) {
  return (
    <StyledNav>
      <StyledLink href="/" aria-label="Link to homepage">
        <House />
      </StyledLink>
      <StyledAddLink
        href="/create"
        aria-label="Link to create plants form page"
      >
        <AddPlantIcon />
      </StyledAddLink>
      <StyledLink href="/my-plants" aria-label="Link to my plants page">
        <Flower />
      </StyledLink>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  background-color: hotpink;
  align-items: center;
`;

const StyledAddLink = styled(Link)`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hotpink;
  color: white;
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 50px;
  &:hover {
    color: darkmagenta;
  }
`;

const StyledLink = styled(Link)`
  all: unset;
  color: white;
  &:hover {
    color: darkmagenta;
  }
`;
