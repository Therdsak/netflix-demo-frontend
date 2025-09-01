"use client";

import Link from "next/link";
import { useAppStore } from "@/presentation/store/useAppStore"; // Adjust the import path to your store
import { locales } from "@/domain/models/locales";

const DesktopNav = () => {
  const { language } = useAppStore();
  const t = locales[language] || locales.en;

  const navItems = [
    { href: "/", label: t.home },
    { href: "/tv-shows", label: t.tv_shows },
    { href: "/movies", label: t.movies },
    { href: "/new-popular", label: t.new_popular },
    { href: "/my-list", label: t.my_list },
    { href: "/browse-by-languages", label: t.browse_by_languages },
  ];

  return (
    <nav className="hidden md:flex space-x-4 xl:space-x-8 text-[#DADADA]">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="hover:text-white transition-colors cursor-pointer"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default DesktopNav;
