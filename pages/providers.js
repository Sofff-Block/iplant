import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

const Providers = ({ children }) => {
  const [mounted, SetMounted] = useState(false);

  useEffect(() => {
    SetMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
