"use client";

import { useEffect } from "react";
import { useAppStore } from "@/presentation/store/useAppStore";

export default function AppInitializer({
  children,
}: {
  children: React.ReactNode;
}) {
  const setLanguage = useAppStore((state) => state.setLanguage);
  const toggleTheme = useAppStore((state) => state.toggleTheme);
  const theme = useAppStore((state) => state.theme);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") as
        | "light"
        | "dark"
        | null;
      if (storedTheme && storedTheme !== theme) {
        document.documentElement.setAttribute("data-theme", storedTheme);
        toggleTheme();
      }

      const storedLang = localStorage.getItem("language") as "en" | "th" | null;
      if (storedLang) {
        setLanguage(storedLang);
      }
    }
  }, []);

  return <>{children}</>;
}
