import Link from "next/link";
import styled from "styled-components";
import Flower from "@/public/flower.svg";
import House from "@/public/house.svg";

export default function Navigation() {
  return (
    <nav>
      <Link href="/">
        <House />
      </Link>
      <Link href="/">
        <Flower />
      </Link>
    </nav>
  );
}
