import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import aboutPreview from "@/assets/images/navigation/about-preview.jpg";

interface MobileMenuProps {
  isOpen: boolean;
}

// Navbar's menu sub items
interface SubItem {
  title: string;
  href: string;
}

// Navbar's menu items
interface MenuItem {
  id: string;
  title: string;
  href?: string; // if its a link
  subItems?: SubItem[]; // if it dropdowns
  image?: string;
  imageAlt?: string;
}

// TODO: Update items' hrefs and content
const MENU_ITEMS: MenuItem[] = [
  { id: "item-1", title: "Home", href: "/" },
  {
    id: "item-2",
    title: "About us",
    image: aboutPreview,
    imageAlt: "Entrance of the United Nations building with flags of member states",
    subItems: [
      { title: "Our Mission & Vision", href: "/about/mission" },
      { title: "Board of Directors", href: "/about/board" },
      { title: "Organizations & Community", href: "/about/community" },
      { title: "Partners", href: "/about/partners" },
      { title: "Annual General Meetings", href: "/about/agm" },
    ],
  },
  {
    id: "item-3",
    title: "Events & News",
    subItems: [
      { title: "Upcoming Events", href: "/events" },
      { title: "News", href: "/news" },
    ],
  },
  { id: "item-4", title: "SDGs", href: "/sdgs" },
  {
    id: "item-5",
    title: "Get Involved",
    subItems: [{ title: "Volunteer", href: "/volunteer" }],
  },
  {
    id: "item-6",
    title: "Resources",
    subItems: [{ title: "Docs", href: "/docs" }],
  },
  { id: "item-7", title: "Contact", href: "/contact" },
];

function MobileMenu({ isOpen }: MobileMenuProps) {
  const [openItem, setOpenItem] = useState<string>("");

  return (
    <div
      id="mobile-menu"
      aria-hidden={!isOpen}
      className={`
      fixed top-16 left-0 -z-10 w-full max-h-[calc(100vh-4rem)] px-2 py-4 overflow-y-auto no-scrollbar font-inter bg-white shadow-lg
      transition-all duration-300 ease-in-out
        ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-50 invisible"
        }
      `}
    >
      <ul className="overflow-hidden rounded-lg border border-gray-300">
        {MENU_ITEMS.map((item, index) => {
          const isLast = index === MENU_ITEMS.length - 1;
          const borderClass = isLast ? "border-0" : "border-b border-gray-200";

          // SCENARIO A: It is a Link
          if (item.href) {
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`
                  flex h-[60px] items-center w-full px-7 text-base font-semibold text-gray-900 
                  hover:bg-gray-50 transition-colors
                  ${borderClass}
                  `}
                >
                  {item.title}
                </a>
              </li>
            );
          }

          // SCENARIO B: It is a Dropdown (Accordion)
          return (
            <li key={item.id}>
              <Accordion
                type="single"
                collapsible
                value={openItem}
                onValueChange={setOpenItem}
                className={borderClass}
              >
                <AccordionItem value={item.id} className="border-b-0">
                  <AccordionTrigger className="flex h-[60px] items-center justify-between px-7 py-0 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:no-underline">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="bg-white p-0 pb-6">
                    {/* The List of Sub-Items */}
                    <ul className="flex flex-col">
                      {item.subItems?.map((sub, i) => (
                        <li key={i}>
                          <a
                            href={sub.href}
                            className="
                          group relative flex w-full h-[60px] items-center py-4 px-9 pr-4 font-normal text-gray-600
                          transition-all duration-200
                          
                          active:bg-blue-50 
                          active:text-blue-900 
                          active:font-medium
                          "
                          >
                            {/* 
                          The Blue Bar:
                          It is hidden by default. 
                          It appears when the parent link is :active (pressed).
                        */}
                            <span className="absolute left-0 top-0 h-full w-1 bg-blue-600 opacity-0 transition-opacity group-active:opacity-100" />

                            {sub.title}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {/* The Image (Rendered only if it exists) */}
                    {item.image && (
                      <div className="mt-5 px-5">
                        <img
                          src={item.image}
                          alt={item.imageAlt ?? ""}
                          aria-hidden="true"
                          className="w-full rounded-md object-cover shadow-sm"
                        />
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MobileMenu;
