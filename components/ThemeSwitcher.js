"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Sun from "@/public/sun.svg";
import Moon from "@/public/moon.svg";
import styled from "styled-components";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <>
      <StyledToggleButton
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-label="Toggle Theme"
      >
        {isDark ? <StyledSunIcon /> : <Moon width={24} height={24} />}
      </StyledToggleButton>
    </>
  );
}

const StyledToggleButton = styled.button`
  all: unset;
`;

const StyledSunIcon = styled(Sun)`
  width: 36px;
  height: 36px;
`;
