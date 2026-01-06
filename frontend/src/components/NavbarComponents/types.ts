import type { IconType } from 'react-icons';

export type DropdownItem = {
  label: string;
  path: string;
  icon: IconType;
}

export type NavItem = {
  label: string;
  path?: string;
  dropdown?: DropdownItem[];
}
