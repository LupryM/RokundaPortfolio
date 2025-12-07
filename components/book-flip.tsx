"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link"; // Import Link for the back button
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BookFlipProps {
  projectId: number;
  projectTitle: string;
  projectYear: string;
  totalPages: number;
}

// 1. REUSABLE BACK BUTTON COMPONENT (INTERNAL)
const BackButton = () => (
  <Link
    href="/"
    className="
      group flex items-center justify-center
      w-10 h-10 md:w-14 md:h-14
      rounded-full 
      border border-white/50
      bg-black text-white
      transition-all duration-300
      hover:bg-white hover:text-black hover:border-white hover:scale-105
      flex-shrink-0 z-50
    "
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 md:w-6 md:h-6 stroke-current transition-transform group-hover:-translate-x-1"
    >
      <path
        d="M19 12H5M5 12L12 19M5 12L12 5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Link>
);

export function BookFlip({
  projectId,
  projectTitle,
  projectYear,
  totalPages,
}: BookFlipProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<"next" | "prev">("next");
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50;
    const difference = touchStartX.current - touchEndX.current;

    if (Math.abs(difference) > swipeThreshold && !isFlipping) {
      if (difference > 0) {
        handleNextPage();
      } else {
        handlePrevPage();
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        handleNextPage();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrevPage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage, isFlipping]);

  const handleNextPage = () => {
    if (currentPage < totalPages && !isFlipping) {
      setFlipDirection("next");
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setIsFlipping(false);
      }, 800);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1 && !isFlipping) {
      setFlipDirection("prev");
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev - 1);
        setIsFlipping(false);
      }, 800);
    }
  };

  const currentImagePath = `/projects/project${projectId}/${String(
    currentPage
  ).padStart(2, "0")}.webp`;

  const nextImagePath = `/projects/project${projectId}/${String(
    flipDirection === "next" ? currentPage + 1 : currentPage - 1
  ).padStart(2, "0")}.webp`;

  return (
    // FIX: Use h-[100dvh] for mobile browsers to prevent address bar issues
    <div className="bg-black h-[100dvh] w-full flex flex-col overflow-hidden">
      
      {/* HEADER */}
      <header className="bg-black w-full flex-shrink-0 z-20 pt-4 pb-2 relative">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8">
          
          <div className="flex flex-col md:block relative">
            {/* BACK BUTTON POSITIONS */}
            {/* Mobile: Just sits in the flow */}
            <div className="md:absolute md:left-4 md:top-1/2 md:-translate-y-1/2 mb-4 md:mb-0">
               <BackButton />
            </div>

            {/* TITLE CONTAINER */}
            {/* Mobile: No padding. Desktop: Left padding to clear the button */}
            <div className="text-left pl-0 md:pl-[80px]">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-brown-sugar)] text-white uppercase tracking-wide mb-0 leading-none line-clamp-2">
                {projectTitle}
              </h1>
              <p className="text-neutral-500 text-xs sm:text-sm font-sans uppercase tracking-widest mt-1">
                {projectYear}
              </p>
            </div>
          </div>

        </div>
      </header>

      {/* MAIN CONTENT */}
      {/* FIX: min-h-0 ensures this container shrinks if needed, preventing page scroll */}
      <main className="flex-1 flex flex-col relative min-h-0 w-full">
        <div className="w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-8 py-2">
          <div
            className="relative w-full h-full max-w-7xl flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ perspective: "2500px" }}
          >
            {/* Next/Previous page underneath */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={isFlipping ? nextImagePath : currentImagePath}
                alt={`${projectTitle} page`}
                className="max-w-full max-h-full object-contain shadow-2xl"
              />
            </div>

            {/* Current page that peels away */}
            {isFlipping && (
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin:
                    flipDirection === "next" ? "right center" : "left center",
                  animation:
                    flipDirection === "next"
                      ? "pagePeelNext 0.8s ease-in-out forwards"
                      : "pagePeelPrev 0.8s ease-in-out forwards",
                }}
              >
                <img
                  src={currentImagePath}
                  alt={`${projectTitle} page ${currentPage}`}
                  className="max-w-full max-h-full object-contain shadow-2xl"
                />
              </div>
            )}

            <style jsx>{`
              @keyframes pagePeelNext {
                0% {
                  transform: rotateY(0deg);
                  opacity: 1;
                }
                100% {
                  transform: rotateY(-180deg);
                  opacity: 0;
                }
              }

              @keyframes pagePeelPrev {
                0% {
                  transform: rotateY(0deg);
                  opacity: 1;
                }
                100% {
                  transform: rotateY(180deg);
                  opacity: 0;
                }
              }
            `}</style>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/5 w-full flex-shrink-0 z-20 py-4 pb-6 safe-area-bottom">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8">
          {/* Progress bar */}
          <div className="mb-4 w-full">
            <div className="w-full h-0.5 bg-neutral-900 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-300"
                style={{ width: `${(currentPage / totalPages) * 100}%` }}
              />
            </div>
          </div>

          {/* Controls */}
          <div>
            {/* Mobile Controls */}
            <div className="md:hidden flex items-center justify-between gap-4">
              <div className="text-left">
                <span className="text-xl font-bold text-white leading-none">
                  {String(currentPage).padStart(2, "0")}
                </span>
                <span className="text-neutral-600 text-[10px] font-sans uppercase tracking-widest ml-2">
                  / {String(totalPages).padStart(2, "0")}
                </span>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1 || isFlipping}
                  className="w-10 h-10 flex items-center justify-center text-white border border-white/20 rounded-full hover:bg-white hover:text-black transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages || isFlipping}
                  className="w-10 h-10 flex items-center justify-center text-white border border-white/20 rounded-full hover:bg-white hover:text-black transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Desktop Info */}
            <div className="hidden md:flex items-center justify-between text-xs">
              <p className="text-neutral-600 font-sans uppercase tracking-widest">
                {String(currentPage).padStart(2, "0")} /{" "}
                {String(totalPages).padStart(2, "0")}
              </p>
              <p className="text-neutral-700 font-sans text-[10px] uppercase tracking-widest">
                Use Arrow Keys
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}