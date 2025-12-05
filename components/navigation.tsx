"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "ABOUT ME", id: "about", href: "/about" },
  { label: "CV", id: "cv", href: "/cv" },
  { label: "TECHNICAL SKILLS", id: "skills", href: "/technical-skills" },
  { label: "INFLUENCES", id: "influences", href: "/influences" },
  { label: "CONTACT", id: "contact", href: "/#contact-section" },
] as const;

export const Navigation: React.FC = () => {
  const pathname = usePathname();

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If we are on the home page, scroll smoothly. Otherwise, let the Link handle the jump.
    if (pathname === "/") {
      e.preventDefault();
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 px-4 z-50 relative">
      {NAV_ITEMS.map((item) => {
        // Highlight active if the pathname starts with the href (e.g. /cv)
        const isActive = item.id !== "contact" && pathname === item.href;

        return (
          <Link
            key={item.id}
            href={item.href}
            onClick={item.id === "contact" ? handleContactClick : undefined}
            className={`
              /* SHAPE: Rounded Pill */
              relative overflow-hidden
              rounded-full 
              border-[2px] border-white 
              px-6 py-2 md:px-10 md:py-3
              
              /* FONT & TEXT */
              font-sans font-bold 
              text-sm md:text-base
              uppercase tracking-widest
              
              /* ANIMATION */
              transition-all duration-200 ease-in-out
              
              /* COLOR LOGIC */
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
