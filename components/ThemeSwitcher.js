"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Sun from "@/public/sun.svg";
import Drop from "@/public/droplet.svg";

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
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-label="Toggle Theme"
      >
        {isDark ? (
          <Sun width={24} height={24} />
        ) : (
          <Drop width={24} height={24} />
        )}
      </button>
      
    </>
  );
}
