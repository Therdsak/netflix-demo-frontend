import ActionButtons from "./ActionButtons";
import AvatarDropdown from "./AvatarDropdown";
import DesktopNav from "./DesktopNav";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-opacity-70 px-4 lg:px-8 mt-4">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-2 lg:space-x-8">
          <Logo />
          <DesktopNav />
        </div>

        <div className="flex items-center space-x-4 text-white">
          <ActionButtons />
          <div className="block md:hidden text-white w-6 h-6">
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-full h-full"
            >
              <path d="M1 18v3h3c0-1.65-1.35-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11zm19-8H4c-1.1 0-2 .9-2 2v2h2V4h16v16h-4v2h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            </svg>
          </div>
          <AvatarDropdown />
        </div>
      </div>

      <MobileNav />
    </header>
  );
};

export default Header;
