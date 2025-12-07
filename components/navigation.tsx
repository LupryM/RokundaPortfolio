"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "ABOUT", id: "about", href: "/about" },
  { label: "CV", id: "cv", href: "/cv" },
  { label: "PROFICIENCY", id: "skills", href: "/technical-skills" },
  { label: "CONTACT", id: "contact", href: "/#contact-section" },
] as const;

export const Navigation: React.FC = () => {
  const pathname = usePathname();

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    // UPDATED: Changed gap-1 to gap-3 for mobile spacing
    <div className="flex flex-nowrap justify-center items-center gap-3 md:gap-8 px-1 z-50 relative w-full">
      {NAV_ITEMS.map((item) => {
        const isActive = item.id !== "contact" && pathname === item.href;
        const isSkills = item.id === "skills";

        return (
          <Link
            key={item.id}
            href={item.href}
            onClick={item.id === "contact" ? handleContactClick : undefined}
            className={`
              /* LAYOUT: Width depends on text, centered content */
              w-auto flex items-center justify-center
              
              /* SHAPE */
              relative overflow-hidden
              rounded-full 
              border-[2px] border-white 
              
              /* SIZING */
              h-9 md:h-16
              px-3 md:px-12
              
              /* FONT */
              font-sans font-bold 
              uppercase tracking-widest
              whitespace-nowrap
              text-center

              /* CONDITIONAL FONT SIZE */
              ${isSkills ? "text-[10px] md:text-base" : "text-xs md:text-xl"}
              
              /* ANIMATION */
              transition-all duration-200 ease-in-out
              
              /* COLOR */
              ${
                isActive
                  ? "bg-white text-black"
                  : "bg-black text-white hover:bg-white hover:text-black"
              }
            `}
          >
            <span className="relative z-10">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
};
