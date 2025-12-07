"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HTMLFlipBook from "react-pageflip";

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
  const [currentPage, setCurrentPage] = useState(0);
  const bookRef = useRef<any>(null);
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

    if (Math.abs(difference) > swipeThreshold) {
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
  }, []);

  const handleNextPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext();
    }
  };

  const handlePrevPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipPrev();
    }
  };

  const onFlip = (e: any) => {
    setCurrentPage(e.data);
  };

  return (
    <div className="bg-black h-[100dvh] w-full flex flex-col overflow-hidden">
      {/* FIX 1: Header Padding
         Changed to 'pt-24' on mobile. This creates a large safe zone at the top
         so the Title renders BELOW the absolute "Back" button.
      */}
      <header className="bg-black w-full flex-shrink-0 z-20 pt-24 md:pt-4 pb-2 relative transition-all">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8">
          <div className="flex flex-col md:block relative">
            <div className="text-left pl-0 md:pl-[80px]">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-[family-name:var(--font-brown-sugar)] text-white uppercase tracking-wide mb-0 leading-tight line-clamp-2">
                {projectTitle}
              </h1>
              <p className="text-neutral-500 text-[10px] sm:text-sm font-sans uppercase tracking-widest mt-1">
                {projectYear}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col relative min-h-0 w-full">
        <div className="w-full h-full flex items-center justify-center px-2 sm:px-6 md:px-8 py-2">
          <div
            className="relative w-full h-full max-w-7xl flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <HTMLFlipBook
              ref={bookRef}
              width={600}
              height={800}
              size="stretch"
              minWidth={280}
              maxWidth={2000}
              minHeight={350}
              maxHeight={2000}
              maxShadowOpacity={0.5}
              showCover={false}
              mobileScrollSupport={true}
              onFlip={onFlip}
              className="book-container"
              style={{}}
              startPage={0}
              drawShadow={true}
              flippingTime={800}
              usePortrait={true}
              startZIndex={0}
              autoSize={true}
              clickEventForward={true}
              useMouseEvents={true}
              swipeDistance={30}
              showPageCorners={true}
              disableFlipByClick={false}
            >
              {Array.from({ length: totalPages }, (_, i) => {
                const pageNumber = i + 1;
                const imagePath = `/projects/project${projectId}/${String(
                  pageNumber
                ).padStart(2, "0")}.webp`;

                return (
                  <div
                    key={i}
                    className="page bg-black flex items-center justify-center w-full h-full"
                  >
                    <img
                      src={imagePath}
                      alt={`${projectTitle} page ${pageNumber}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                );
              })}
            </HTMLFlipBook>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/5 w-full flex-shrink-0 z-20 py-4 pb-8 md:pb-6 safe-area-bottom">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8">
          {/* Progress bar */}
          <div className="mb-4 w-full">
            <div className="w-full h-0.5 bg-neutral-900 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-300"
                style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
              />
            </div>
          </div>

          {/* Controls */}
          <div>
            {/* FIX 2: Footer Spacing
               Added 'pl-16' here. This pushes the "01 / 06" text to the right,
               so it doesn't overlap with the 'N' logo in the bottom-left corner.
            */}
            <div className="md:hidden flex items-center justify-between gap-4 pl-16">
              <div className="text-left">
                <span className="text-xl font-bold text-white leading-none">
                  {String(currentPage + 1).padStart(2, "0")}
                </span>
                <span className="text-neutral-600 text-[10px] font-sans uppercase tracking-widest ml-2">
                  / {String(totalPages).padStart(2, "0")}
                </span>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 0}
                  className="w-10 h-10 flex items-center justify-center text-white border border-white/20 rounded-full hover:bg-white hover:text-black transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage >= totalPages - 1}
                  className="w-10 h-10 flex items-center justify-center text-white border border-white/20 rounded-full hover:bg-white hover:text-black transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Desktop Info */}
            <div className="hidden md:flex items-center justify-between text-xs">
              <p className="text-neutral-600 font-sans uppercase tracking-widest">
                {String(currentPage + 1).padStart(2, "0")} /{" "}
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
