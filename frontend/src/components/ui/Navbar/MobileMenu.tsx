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

interface SubItem {
  title: string;
  href: string;
}

interface MenuItem {
  id: string;
  title: string;
  href?: string; // if its a link
  subItems?: SubItem[]; // if it dropdowns
  image?: string;
}

// TODO: Update items' hrefs and content
const MENU_ITEMS: MenuItem[] = [
  { id: "item-1", title: "Home", href: "/" },
  {
    id: "item-2",
    title: "About us",
    image: aboutPreview,
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
      role="menu"
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
      <div className="overflow-hidden rounded-lg border border-gray-300">
        {MENU_ITEMS.map((item, index) => {
          const isLast = index === MENU_ITEMS.length - 1;
          const borderClass = isLast ? "border-0" : "border-b border-gray-200";

          // SCENARIO A: It is a Link
          if (item.href) {
            return (
              <a
                key={item.id}
                href={item.href}
                className={`
                  flex h-[60px] items-center w-full px-7 text-base font-semibold text-gray-900 
                  hover:bg-gray-50 transition-colors
                  ${borderClass}
                `}
              >
                {item.title}
              </a>
            );
          }

          // SCENARIO B: It is a Dropdown (Accordion)
          return (
            <Accordion
              key={item.id}
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
                  <div className="flex flex-col">
                    {item.subItems?.map((sub, i) => (
                      <a
                        key={i}
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
                    ))}
                  </div>

                  {/* The Image (Rendered only if it exists) */}
                  {item.image && (
                    <div className="mt-5 px-5">
                      <img
                        src={item.image}
                        alt="Menu Highlight"
                        className="w-full rounded-md object-cover shadow-sm"
                      />
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}

export default MobileMenu;
