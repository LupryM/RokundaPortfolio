import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="pt-20 pb-10 px-4 md:px-8 max-w-7xl mx-auto bg-black text-white relative">
      {/* Container for Title and Map - Integrated Layout */}
      <div className="relative mb-12">
        {/* MAIN TITLE with integrated map */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1
              className="
              font-[family-name:var(--font-brown-sugar)] 
              text-6xl md:text-7xl lg:text-8xl xl:text-9xl
              leading-[0.85] 
              tracking-tight
              mb-2
            "
            >
              ARCHITECTURAL
            </h1>
            <h1
              className="
              font-[family-name:var(--font-brown-sugar)] 
              text-6xl md:text-7xl lg:text-8xl xl:text-9xl
              leading-[0.85] 
              tracking-tight
            "
            >
              PORTFOLIO
            </h1>

            {/* Name under title */}
            <p className="mt-6 font-[family-name:var(--font-brown-sugar)] text-xl md:text-2xl tracking-widest text-white uppercase">
              ROKUNDA MBOYI
            </p>
          </div>

          {/* MAP - Using the actual Map.png image */}
          <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 -mt-4 ml-4">
            <img
              src="/Map.png"
              alt="South Africa Map"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
