import { Link } from 'react-router-dom';
import type { NavItem } from '@/components/NavbarComponents/types';

interface MobileMenuProps {
  isOpen: boolean;
  navItems: NavItem[];
  openDropdown: string | null;
  onCloseMenu: () => void;
  onToggleDropdown: (label: string) => void;
}

const MobileMenu = ({ isOpen, navItems, openDropdown, onCloseMenu, onToggleDropdown }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden px-4 pb-4">
      <div className="bg-[#1A2D52]  overflow-hidden mt-4">
        {navItems.map((item, index) => (
          <div key={item.label}>
            {/* Separator line between items */}
            {index > 0 && <div className="border-t border-white/10 mx-4" />}
            
            {item.path ? (
              <Link
                to={item.path}
                onClick={onCloseMenu}
                className="block px-6 py-4 text-white text-base font-medium hover:bg-white/10 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <>
                <button
                  onClick={() => onToggleDropdown(item.label)}
                  className="w-full flex items-center justify-between px-6 py-4 text-white text-base font-medium hover:bg-white/10 transition-colors"
                >
                  {item.label}
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openDropdown === item.label ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {item.dropdown && openDropdown === item.label && (
                  <div className="bg-[#152E4D] border-t border-white/10">
                    {item.dropdown.map((dropdownItem, dropdownIndex) => {
                      const Icon = dropdownItem.icon;
                      return (
                        <div key={dropdownItem.path}>
                          {/* Separator line between dropdown items */}
                          {dropdownIndex > 0 && <div className="border-t border-white/5 mx-6" />}
                          <Link
                            to={dropdownItem.path}
                            onClick={onCloseMenu}
                            className="flex items-center gap-3 px-6 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-colors group"
                          >
                            <div className="flex-shrink-0 w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                              <Icon className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm font-medium">{dropdownItem.label}</span>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
