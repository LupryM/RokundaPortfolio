"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BookFlipProps {
  projectId: number;
  projectTitle: string;
  projectYear: string;
  totalPages: number;
}

export function BookFlip({
  projectId,
  projectTitle,
  projectYear,
  totalPages,
}: BookFlipProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleNextPage = () => {
    if (currentPage < totalPages && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev - 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const imagePath = `/projects/project${projectId}/${String(
    currentPage
  ).padStart(2, "0")}.webp`;

  return (
    <div className="bg-black min-h-screen pt-20 md:pt-24 pb-12 md:pb-16 flex flex-col px-4 md:px-8">
      {/* Header - smaller and top-aligned */}
      <div className="mb-8 md:mb-12 max-w-5xl mx-auto w-full text-center md:text-left">
        {/* Using Brown Sugar Font for Title */}
        <h1 className="font-[family-name:var(--font-brown-sugar)] text-5xl md:text-7xl text-white mb-2 uppercase leading-none">
          {projectTitle}
        </h1>
        <p className="text-neutral-500 font-sans tracking-widest uppercase text-sm md:text-base">
          {projectYear}
        </p>
      </div>

      {/* Main Content Area - appropriately sized */}
      <div className="flex-1 flex items-center justify-center mb-8 md:mb-12 w-full">
        <div className="w-full max-w-5xl">
          <div
            className={`page-display w-full aspect-video bg-neutral-900 flex items-center justify-center overflow-hidden transition-opacity duration-300 border border-white/10 ${
              isFlipping ? "opacity-50" : "opacity-100"
            }`}
          >
            {/* Added fallback handling for the image */}
            <img
              src={imagePath}
              alt={`Page ${currentPage}`}
              className="w-full h-full object-contain" // Changed to object-contain so full pages are visible
              onError={(e) => {
                // Fallback if image not found
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling?.classList.remove("hidden");
              }}
            />
            {/* Fallback Text */}
            <div className="hidden text-neutral-600 font-sans uppercase tracking-widest text-center p-4">
              Image not found: {imagePath} <br />
              Make sure files are in /public/projects/project{projectId}/
            </div>
          </div>
        </div>
      </div>

      {/* Centralized Navigation Controls */}
      <div className="flex items-center gap-6 md:gap-10 justify-center flex-wrap">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1 || isFlipping}
          className="p-3 text-white border border-white/20 rounded-full hover:bg-white hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-white"
          aria-label="Previous page"
        >
          <ChevronLeft size={24} className="md:w-6 md:h-6" />
        </button>

        {/* Page Indicator */}
        <div className="text-center min-w-[100px]">
          <div className="font-[family-name:var(--font-brown-sugar)] text-5xl md:text-6xl text-white">
            {String(currentPage).padStart(2, "0")}
          </div>
          <p className="text-neutral-500 text-xs md:text-sm font-sans uppercase tracking-widest">
            of {String(totalPages).padStart(2, "0")}
          </p>
        </div>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages || isFlipping}
          className="p-3 text-white border border-white/20 rounded-full hover:bg-white hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-white"
          aria-label="Next page"
        >
          <ChevronRight size={24} className="md:w-6 md:h-6" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mt-8 md:mt-10 flex justify-center w-full">
        <div className="w-full max-w-xs h-0.5 bg-neutral-800">
          <div
            className="h-full bg-white transition-all duration-300"
            style={{ width: `${(currentPage / totalPages) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
