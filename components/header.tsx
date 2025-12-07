import React from "react";

export const Header: React.FC = () => {
    /* HEADER: 
      We use 'xl:' for the desktop switch.
      Everything below xl (Tablets) uses the percentage/vw logic.
    */
    return (
        <header className="pt-20 pb-0 md:pb-10 pl-4 pr-0 md:px-8 max-w-7xl mx-0 md:mx-auto bg-black text-white relative overflow-hidden xl:overflow-visible">
            
            {/* WRAPPER: mb-32 (Mobile) kept exactly as before */}
            <div className="relative mb-32 md:mb-48 xl:mb-12">
                
                <div className="flex flex-row items-start justify-start">
                    
                    {/* === TEXT SECTION === */}
                    {/* Mobile: max-w-[65%] (Restored) */}
                    <div className="max-w-[65%] md:max-w-[60%] xl:max-w-none text-left mr-auto z-20 relative pointer-events-none md:pointer-events-auto">
                        
                        {/* TEXT SIZES:
                            Mobile: 10vw (Restored from your perfect code)
                            Tablet: 9vw (Scales for iPad)
                            Desktop: 9xl (Fixed)
                        */}
                        <h1 className="text-left font-[family-name:var(--font-brown-sugar)] text-[10vw] md:text-[9vw] xl:text-8xl 2xl:text-9xl leading-[0.85] tracking-tight mb-2">
                            ARCHITECTURAL
                        </h1>
                        <h1 className="text-left font-[family-name:var(--font-brown-sugar)] text-[10vw] md:text-[9vw] xl:text-8xl 2xl:text-9xl leading-[0.85] tracking-tight">
                            PORTFOLIO
                        </h1>
                        <p className="mt-4 md:mt-6 font-[family-name:var(--font-brown-sugar)] text-[3.5vw] md:text-[2.5vw] xl:text-2xl tracking-widest text-white uppercase text-left">
                            ROKUNDA MBOYI
                        </p>
                    </div>

                    {/* === MAP CONTAINER === */}
                    {/* MOBILE (Base): 
                        - w-[41%] (RESTORED)
                        - top-[2.42%] (RESTORED)
                        - right-[-0%] (RESTORED)
                        
                        TABLET (md:):
                        - md:w-[50%] (Tablet specific)
                        - md:top-[10vw] (Tablet specific - locks to text)
                        
                        DESKTOP (xl:):
                        - xl:static (Desktop specific)
                    */}
                    <div className="absolute right-[-0%] top-[2.42%] w-[41%] md:w-[50%] md:right-[-2vw] md:top-[10vw] h-auto xl:static xl:w-[35rem] xl:h-[35rem] xl:-mt-9 xl:-ml-48 z-10 flex-shrink-0">
                        <img
                            src="/map.png"
                            alt="South Africa Map"
                            className="w-full h-full object-contain pointer-events-none"
                        />

                        {/* --- CLICKABLE ZONES --- */}
                        {/* 4. Mayfair */}
                        <a 
                            href="/?project=4"
                            className="absolute top-[27%] right-[29%] w-[12%] h-[12%] md:w-[8%] md:h-[8%] xl:w-[6%] xl:h-[6%] hover:bg-white/20 rounded-full cursor-pointer z-30"
                            aria-label="View Mayfair Project"
                        />

                        {/* 2. Sunnyside */}
                        <a 
                            href="/?project=2"
                            className="absolute top-[22%] right-[23%] w-[12%] h-[12%] md:w-[8%] md:h-[8%] xl:w-[6%] xl:h-[6%] hover:bg-white/20 rounded-full cursor-pointer z-30"
                            aria-label="View Sunnyside Project"
                        />

                        {/* 1. Muckleneuk */}
                        <a 
                            href="/?project=1"
                            className="absolute top-[23%] right-[26%] w-[12%] h-[12%] md:w-[8%] md:h-[8%] xl:w-[6%] xl:h-[6%] hover:bg-white/20 rounded-full cursor-pointer z-30"
                            aria-label="View Muckleneuk Project"
                        />

                        {/* 3. Cape Town */}
                        <a 
                            href="/?project=3" 
                            className="absolute top-[79%] right-[85%] w-[14%] h-[14%] md:w-[10%] md:h-[10%] xl:w-[10%] xl:h-[10%] hover:bg-white/20 rounded-full cursor-pointer z-30"
                            aria-label="View Cape Town Project"
                        />
                        
                    </div>
                </div>
            </div>
        </header>
    );
};