import type { NavItem } from '@/components/NavbarComponents/types';
import { HiUsers, HiGlobeAlt, HiCalendar, HiClock, HiUser, HiHeart, HiCurrencyDollar, HiBookOpen } from 'react-icons/hi';
import { SiUnitednations } from "react-icons/si";

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  {
    label: 'About Us',
    path: '/about',
    dropdown: [
      { label: 'Who We Are', path: '/about', icon: SiUnitednations },
      { label: 'Our Team', path: '/about#team', icon: HiUsers },
      { label: 'National Affiliations', path: '/about#affiliations', icon: HiGlobeAlt },
    ],
  },
  {
    label: 'Events',
    path: '/events',
    dropdown: [
      { label: 'Upcoming Events', path: '/events#upcoming', icon: HiCalendar },
      { label: 'Yearly Events', path: '/events#yearly', icon: HiClock },
    ],
  },
  { label: "SDGs", path: '/sdgs' },
  {
    label: 'Get Involved',
    path: '/get-involved',
    dropdown: [
      { label: 'Become a Member', path: '/get-involved#membership', icon: HiUser },
      { label: 'Volunteer', path: '/get-involved#volunteer', icon: HiHeart },
      { label: 'Donate', path: '/get-involved#donate', icon: HiCurrencyDollar },
    ],
  },
  {
    label: 'Resources',
    path: '/resources',
    dropdown: [
      { label: 'Global Learning Resources', path: '/resources#global-learning-resources', icon: HiBookOpen },
      { label: 'National Office', path: '/resources#national-office', icon: HiGlobeAlt },
    ],
  },
  { label: 'Contact', path: '/contact' },
];
