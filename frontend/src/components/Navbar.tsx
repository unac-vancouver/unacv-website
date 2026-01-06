import { useState } from 'react';
import NavbarLogo from './NavbarComponents/NavbarLogo';
import DesktopNav from './NavbarComponents/DesktopNav';
import MobileMenuButton from './NavbarComponents/MobileMenuButton';
import MobileMenu from './NavbarComponents/MobileMenu';
import { navItems } from './NavbarComponents/navItems';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [closeTimeout, setCloseTimeout] = useState<number | null>(null);


  const handleMouseEnter = (label: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    const timeout = window.setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
    setCloseTimeout(timeout);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenMobileDropdown(null);
  };

  const toggleMobileDropdown = (label: string) => {
    setOpenMobileDropdown(openMobileDropdown === label ? null : label);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  return (
    <>
      {/* Backdrop blur overlay */}
      {openDropdown && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-all duration-300"
          onMouseEnter={() => {
            if (closeTimeout) {
              clearTimeout(closeTimeout);
              setCloseTimeout(null);
            }
          }}
        />
      )}

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#1A2D52]`}
      >
        <div className="max-w-[1400px] mx-auto px-6 ">
          <div className="flex items-center justify-between h-20">
            <NavbarLogo />

            <DesktopNav
              navItems={navItems}
              openDropdown={openDropdown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />

            <MobileMenuButton isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
          </div>

          <MobileMenu
            isOpen={isMobileMenuOpen}
            navItems={navItems}
            openDropdown={openMobileDropdown}
            onCloseMenu={closeMobileMenu}
            onToggleDropdown={toggleMobileDropdown}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
