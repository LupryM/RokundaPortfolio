import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="pt-20 pb-10 px-4 md:px-8 max-w-7xl mx-auto bg-black text-white relative">
      <div className="relative mb-12">
        <div className="flex items-start justify-between">
          {/* TEXT SECTION */}
          <div className="flex-1">
            <h1 className="font-[family-name:var(--font-brown-sugar)] text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.85] tracking-tight mb-2">
              ARCHITECTURAL
            </h1>
            <h1 className="font-[family-name:var(--font-brown-sugar)] text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.85] tracking-tight">
              PORTFOLIO
            </h1>
            <p className="mt-6 font-[family-name:var(--font-brown-sugar)] text-xl md:text-2xl tracking-widest text-white uppercase">
              ROKUNDA MBOYI
            </p>
          </div>

          {/* MAP CONTAINER */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[35rem] lg:h-[35rem] -mt-9 -ml-16 md:-ml-24 lg:-ml-48 z-10 flex-shrink-0">
            <img
              src="/Map.png"
              alt="South Africa Map"
              className="w-full h-full object-contain pointer-events-none"
            />

            {/* --- CLICKABLE ZONES --- */}
            {/* Note: hrefs updated to match the numbers on your map image */}

            {/* 4. Mayfair (Map Label: 4) */}
            <a 
              href="/?project=4"
              className="absolute top-[27%] right-[29%] w-[6%] h-[6%] hover:bg-white/20 rounded-full cursor-pointer z-20"
              aria-label="View Mayfair Project"
            />

            {/* 2. Sunnyside (Map Label: 2) */}
            <a 
              href="/?project=2"
              className="absolute top-[22%] right-[23%] w-[6%] h-[6%] hover:bg-white/20 rounded-full cursor-pointer z-20"
              aria-label="View Sunnyside Project"
            />

            {/* 1. Muckleneuk (Map Label: 1) */}
             <a 
              href="/?project=1"
              className="absolute top-[23%] right-[26%] w-[6%] h-[6%] hover:bg-white/20 rounded-full cursor-pointer z-20"
              aria-label="View Muckleneuk Project"
            />

            {/* 3. Cape Town (Map Label: 3) */}
            <a 
              href="/?project=3" 
              className="absolute top-[79%] right-[85%] w-[10%] h-[10%] hover:bg-white/20 rounded-full cursor-pointer z-20"
              aria-label="View Cape Town Project"
            />
            
          </div>
        </div>
      </div>
    </header>
  );
};