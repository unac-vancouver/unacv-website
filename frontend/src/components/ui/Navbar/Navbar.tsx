import { useState, useEffect } from "react";
import Logo from "./Logo";
import HamburgerButton from "./HamburgerButton";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu with escape button
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" || event.key === "Esc") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

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
