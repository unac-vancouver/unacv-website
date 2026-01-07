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

  const handleMouseEnter = (label: string) => {
    setOpenDropdown(label);
  };

  const handleMouseLeave = (event: React.MouseEvent) => {
    const relatedTarget = event.relatedTarget as HTMLElement;
    
    // Don't close if moving to another part of the navbar or dropdown
    if (relatedTarget && (
      relatedTarget.closest('nav') ||
      relatedTarget.closest('[data-dropdown-content]')
    )) {
      return;
    }
    
    setOpenDropdown(null);
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
          onClick={() => setOpenDropdown(null)}
          onMouseMove={(e) => {
            const dropdown = document.querySelector('[data-dropdown-content]');
            const navbar = document.querySelector('nav');
            
            if (dropdown && navbar) {
              const dropdownRect = dropdown.getBoundingClientRect();
              const navbarRect = navbar.getBoundingClientRect();
              const buffer = 20;
              
              // Close if mouse is below dropdown bottom boundary
              if (e.clientY > dropdownRect.bottom + buffer) {
                setOpenDropdown(null);
                return;
              }
              
              // Close if mouse is outside the dropdown area horizontally and below navbar
              if (
                e.clientY > navbarRect.bottom &&
                (e.clientX < dropdownRect.left - buffer || e.clientX > dropdownRect.right + buffer)
              ) {
                setOpenDropdown(null);
              }
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
