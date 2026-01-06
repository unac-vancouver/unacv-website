import type { NavItem } from '@/components/NavbarComponents/types';
import { HiUserGroup, HiUsers, HiGlobeAlt, HiCalendar, HiClock, HiUser, HiHeart, HiCurrencyDollar, HiBookOpen, HiDocumentText, HiLink } from 'react-icons/hi';
import { SiUnitednations } from "react-icons/si";

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  {
    label: 'About us',
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
      { label: 'Past Events', path: '/events#past', icon: HiClock },
    ],
  },
  { label: "SDG's", path: '/sdgs' },
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
      { label: 'Publications', path: '/resources#publications', icon: HiBookOpen },
      { label: 'Reports', path: '/resources#reports', icon: HiDocumentText },
      { label: 'Links', path: '/resources#links', icon: HiLink },
    ],
  },
  { label: 'Contact', path: '/contact' },
];
