import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface MobileMenuProps {
  isOpen: boolean;
}

// TODO: Update items' hrefs
const MENU_ITEMS = [
  { id: "item-1", title: "Home", href: "/" },
  { id: "item-2", title: "About us", content: "About us content..." },
  { id: "item-3", title: "Events & News", content: "Events content..." },
  { id: "item-4", title: "SDGs", href: "/sdgs" },
  { id: "item-5", title: "Get Involved", content: "Get Involved content..." },
  { id: "item-6", title: "Resources", content: "Resources content..." },
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
        absolute top-16 left-0 -z-10 w-full px-2 py-4 font-inter bg-white shadow-[0_6px_12px_rgba(0,0,0,0.15)]
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
          // Common border logic for both types
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
                <AccordionTrigger
                  // Included 'hover:no-underline' to match your design
                  className="flex h-[60px] items-center justify-between px-7 py-0 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:no-underline"
                >
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="bg-gray-50 px-4 py-4 text-gray-600">
                  {item.content}
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
