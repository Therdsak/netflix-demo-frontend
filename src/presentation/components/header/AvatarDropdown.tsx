/* eslint-disable @next/next/no-img-element */
import { useDropdown } from "@/presentation/hooks/useDropdown";
import ThemeAndLanguageSwitcher from "../ThemeAndLanguageSwitcher";

const AvatarDropdown = () => {
  const { isDropdownOpen, toggleDropdown } = useDropdown();

  return (
    <div
      className="relative flex items-center space-x-2 cursor-pointer"
      onClick={toggleDropdown}
      role="button"
      aria-expanded={isDropdownOpen}
      tabIndex={0}
      onKeyPress={(e) => e.key === "Enter" && toggleDropdown()}
    >
      <img src="/avatar.png" alt="Profile" className="h-8 w-8 rounded" />
      <img src="/down-white.png" alt="Dropdown Arrow" className="h-1 w-2" />

      {isDropdownOpen && (
        <div className="absolute right-0 top-12 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-20">
          <ThemeAndLanguageSwitcher />
        </div>
      )}
    </div>
  );
};

export default AvatarDropdown;
