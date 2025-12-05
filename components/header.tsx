import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="pt-20 pb-10 px-4 md:px-8 max-w-7xl mx-auto bg-black text-white relative">
      {/* Container for Title and Map */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-12">
        {/* LEFT: MAIN TITLE (Brown Sugar Font) */}
        <div className="flex flex-col z-10">
          <h1
            className="
            font-[family-name:var(--font-brown-sugar)] 
            text-6xl md:text-8xl lg:text-9xl 
            leading-[0.8] 
            tracking-tight
            mb-2
          "
          >
            ARCHITECTURAL
          </h1>
          <h1
            className="
            font-[family-name:var(--font-brown-sugar)] 
            text-6xl md:text-8xl lg:text-9xl 
            leading-[0.8] 
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

        {/* RIGHT: MAP GRAPHIC (SVG) */}
        {/* I've recreated the map/markers aesthetic from your mockup */}
        <div className="mt-8 md:mt-0 w-full md:w-1/3 max-w-xs relative opacity-90">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full stroke-white stroke-1 fill-none"
          >
            {/* Simplified Map Outline */}
            <path d="M40,160 Q20,140 25,100 Q30,60 70,50 Q100,45 130,30 Q160,20 180,40 Q190,60 170,90 Q150,110 160,140 Q140,180 90,175 Q60,180 40,160" />

            {/* Internal Borders */}
            <path d="M70,50 Q80,90 110,100" className="stroke-[0.5]" />
            <path d="M110,100 Q140,110 170,90" className="stroke-[0.5]" />
            <path d="M110,100 Q100,140 90,175" className="stroke-[0.5]" />

            {/* Location Markers */}
            {/* Marker 1 */}
            <g transform="translate(130, 45)">
              <path d="M0,0 Q-5,-10 0,-15 Q5,-10 0,0" fill="white" />
              <circle cx="0" cy="-10" r="1.5" fill="black" />
            </g>
            {/* Marker 2 */}
            <g transform="translate(135, 55)">
              <path d="M0,0 Q-5,-10 0,-15 Q5,-10 0,0" fill="white" />
              <circle cx="0" cy="-10" r="1.5" fill="black" />
            </g>
            {/* Marker 3 (Cape Town) */}
            <g transform="translate(45, 155)">
              <path d="M0,0 Q-5,-10 0,-15 Q5,-10 0,0" fill="white" />
              <circle cx="0" cy="-10" r="1.5" fill="black" />
              <text
                x="8"
                y="0"
                className="text-[8px] fill-white font-sans font-bold"
              >
                CAPETOWN
              </text>
            </g>
          </svg>
        </div>
      </div>


      
    </header>
  );
};
