"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
// import { useTranslation } from "react-i18next";
import i18n from "@/i18n/i18n-client";
import { useAppStore } from "@/presentation/store/useAppStore";

export default function ThemeLanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  // const { t } = useTranslation("common");

  const { theme, toggleTheme, language, setLanguage } = useAppStore();

  // Sync i18n when language in store changes
  useEffect(() => {
    if (language !== i18n.language) {
      i18n.changeLanguage(language);
    }
  }, [language]);

  const handleLanguageChange = (newLang: "en" | "th") => {
    if (newLang === language) return;
    setLanguage(newLang);

    const updatedPath = pathname.replace(`/${language}`, `/${newLang}`);
    router.push(updatedPath);
  };

  return (
    <div className="flex flex-col items-center space-y-4 text-white text-sm py-4">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="bg-background hover:bg-zinc-700 px-4 py-2 rounded-md transition font-medium"
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>

      {/* Language Toggle Buttons */}
      <div className="flex space-x-2">
        <button
          onClick={() => handleLanguageChange("en")}
          className={`px-4 py-2 rounded-md font-medium transition ${
            language === "en"
              ? "bg-red-600 text-white"
              : "bg-zinc-700 text-gray-300 hover:bg-zinc-600"
          }`}
        >
          🇺🇸 English
        </button>
        <button
          onClick={() => handleLanguageChange("th")}
          className={`px-4 py-2 rounded-md font-medium transition ${
            language === "th"
              ? "bg-red-600 text-white"
              : "bg-zinc-700 text-gray-300 hover:bg-zinc-600"
          }`}
        >
          🇹🇭 ไทย
        </button>
      </div>

    </div>
  );
}
