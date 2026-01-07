import { Link } from 'react-router-dom';
import type { NavItem } from './types';
import { RxCaretDown } from 'react-icons/rx';

interface DesktopNavProps {
    navItems: NavItem[];
    openDropdown: string | null;
    onMouseEnter: (label: string) => void;
    onMouseLeave: (event: React.MouseEvent) => void;
}

const DesktopNav = ({ navItems, openDropdown, onMouseEnter }: DesktopNavProps) => {
    return (
        <div className="hidden lg:flex items-center justify-end flex-1">
            <div className="flex items-center space-x-2">
                {navItems.map((item) => (
                    <div
                        key={item.label}
                        className="relative"
                        onMouseEnter={() => item.dropdown && onMouseEnter(item.label)}
                    >
                        {item.path ? (
                            <>
                                <Link
                                    to={item.path}
                                    className={`text-white font-medium transition-all duration-200 text-base flex items-center px-4 py-2 rounded-lg ${
                                        openDropdown === item.label
                                            ? 'bg-white/10'
                                            : 'hover:bg-white/5'
                                    }`}
                                >
                                    {item.label}
                                    {item.dropdown && (
                                        <RxCaretDown
                                            className={`w-5 h-5 ml-1 transition-transform duration-300 ${
                                                openDropdown === item.label ? 'rotate-180' : ''
                                            }`}
                                        />
                                    )}
                                </Link>
                            </>
                        ) : (
                            <button
                                className={`flex items-center text-white font-medium transition-all duration-200 text-base px-4 py-2 rounded-lg ${
                                    openDropdown === item.label
                                        ? 'bg-white/10'
                                        : 'hover:bg-white/5'
                                }`}
                            >
                                {item.label}
                                <RxCaretDown
                                    className={`w-5 h-5 ml-1 transition-transform duration-300 ${
                                        openDropdown === item.label ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>
                        )}

                        {/* Mega Menu Dropdown */}
                        {item.dropdown && openDropdown === item.label && (
                            <>
                                {/* Invisible bridge to prevent dropdown from closing */}
                                <div
                                    className="absolute left-0 right-0 top-full h-6"
                                    onMouseEnter={() => onMouseEnter(item.label)}
                                />
                                <div
                                    className="fixed left-0 right-0 top-25 flex justify-center px-6 z-50 pointer-events-none"
                                    data-dropdown-content
                                    onMouseEnter={() => onMouseEnter(item.label)}
                                >
                                    <div
                                        className="w-full max-w-[900px] bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300 pointer-events-auto"
                                        style={{
                                            animation: 'slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                        }}
                                    >
                                        <div className="grid grid-cols-2 gap-6 p-8">
                                        {item.dropdown.map((dropdownItem, index) => {
                                            const Icon = dropdownItem.icon;
                                            
                                            return (
                                                <Link
                                                    key={dropdownItem.path}
                                                    to={dropdownItem.path}
                                                    className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-100 transition-all duration-200 "
                                                    style={{
                                                        animation: `fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s backwards`,
                                                    }}
                                                >
                                                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center transition-transform duration-200">
                                                        <Icon className="w-6 h-6 text-white" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-primary-blue-6 transition-colors">
                                                            {dropdownItem.label}
                                                        </h3>
                                                        <p className="text-sm text-gray-600 line-clamp-2">
                                                            Explore {dropdownItem.label.toLowerCase()} and learn more
                                                        </p>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DesktopNav;
