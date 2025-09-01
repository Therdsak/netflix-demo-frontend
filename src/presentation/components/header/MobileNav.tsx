/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const MobileNav = () => (
  <div className="w-full flex flex-row justify-center items-center mt-6">
    <div className="block md:hidden flex flex-row justify-between items-center gap-4 text-white w-[75%]">
      <Link href="/tv-shows" className="hover:text-white">
        TV Shows
      </Link>
      <Link href="/movies" className="hover:text-white">
        Movies
      </Link>
      <div className="flex flex-row items-center gap-2">
        <Link href="/new-popular" className="hover:text-white">
          Categories
        </Link>
        <img src="/down-white.png" alt="Dropdown Arrow" className="h-2 w-4" />
      </div>
    </div>
  </div>
);

export default MobileNav;
