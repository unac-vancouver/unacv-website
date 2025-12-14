import { useState } from "react";
import Logo from "./Logo";
import HamburgerButton from "./HamburgerButton";
import MobileMenu from "./MobileMenu";

interface NavbarProps {
  // Props will go here if needed
}

function Navbar({}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full h-16 bg-primary-950"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between h-full px-7 relative z-50 bg-primary-950">
        <Logo />
        <HamburgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
      </div>
      <MobileMenu isOpen={isMenuOpen} />
    </nav>
  );
}

export default Navbar;
