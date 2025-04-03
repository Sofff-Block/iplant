import Link from "next/link";
import styled from "styled-components";
import Flower from "@/public/flower.svg";
import House from "@/public/house.svg";
import AddButton from "@/public/badge-plus.svg";

export default function Navigation() {
  return (
    <StyledNav>
      <Link href="/">
        <House />
      </Link>
      <button onClick="">
        <AddButton />
      </button>
      <Link href="/my-plants">
        <Flower />
      </Link>
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
`;
