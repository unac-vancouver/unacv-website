interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

function HamburgerButton({ isOpen, onClick }: HamburgerButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col items-center justify-center w-9 h-6 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-950 hover:bg-primary-900 transition-colors"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      aria-haspopup="true"
    >
      <div className="flex flex-col items-center justify-between w-full h-full">
        <span
          className={`block h-[3px] bg-white rounded transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-[10.5px] w-7" : "w-full"
          }`}
        />
        <span
          className={`block h-[3px] bg-white rounded transition-all duration-300 ${
            isOpen ? "opacity-0 w-7" : "opacity-100 w-full"
          }`}
        />
        <span
          className={`block h-[3px] bg-white rounded transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-[10.5px] w-7" : "w-full"
          }`}
        />
      </div>
    </button>
  );
}

export default HamburgerButton;
