

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Sun from "@/public/sun.svg";
import Moon from "@/public/moon.svg";
import styled from "styled-components";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <>
      <StyledToggleButton
        onClick={() => {
          setTheme(isDark ? "light" : "dark");
        }}
        aria-label="Toggle Theme"
      >
        {isDark ? <StyledSunIcon /> : <StyledMoonIcon />}
      </StyledToggleButton>
    </>
  );
}

const StyledToggleButton = styled.button`
  all: unset;
`;

const StyledSunIcon = styled(Sun)`
  width: 30px;
  height: 30px;
  &:hover {
    color: var(--highlight);
    cursor: pointer;
  }
`;

const StyledMoonIcon = styled(Moon)`
  width: 30px;
  height: 30px;
  &:hover {
    color: var(--highlight);
    cursor: pointer;
  }
`;
