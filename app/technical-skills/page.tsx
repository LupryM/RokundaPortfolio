import Link from "next/link";
import { Header } from "@/components/header";
import { Navigation } from "@/components/navigation";

// 1. DATA
const OTHER_SKILLS = [
  "SKETCHUP",
  "TINKERCAD",
  "3D MODELING",
  "3D PRINTING",
  "LASER CUTTING",
  "ADOBE SUITE",
  "INKSCAPE",
  "GIMP",
  "CANVA",
];

const UPCOMING_SKILLS = ["TWINMOTION", "LUMION", "PHOTOSHOP"];

// 2. ICONS
function ShedIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M4 10L14 4L22 8" />
      <path d="M4 10V20H16V9" />
      <path d="M16 20H22V8" />
      <rect x="7" y="13" width="4" height="4" />
      <path d="M18 12H20" />
      <path d="M18 15H20" />
    </svg>
  );
}

function BlockIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <rect x="8" y="4" width="12" height="16" />
      <rect x="4" y="12" width="4" height="8" />
      <path d="M12 8H16" />
      <path d="M12 12H16" />
      <path d="M12 16H16" />
      <rect x="5" y="14" width="2" height="2" />
    </svg>
  );
}

export default function SkillsPage() {
  return (
    <div className="bg-black min-h-screen flex flex-col text-white">
      <Header />
      <div className="pb-8 sticky top-0 z-40 bg-black/90 backdrop-blur-sm pt-4">
        <Navigation />
      </div>

      <div className="flex-grow px-4 md:px-8 max-w-5xl mx-auto py-12 w-full">
        {/* BACK BUTTON */}
        <div className="mb-12 flex justify-center">
          <Link
            href="/"
            className="text-white/70 px-8 py-3 rounded-full uppercase tracking-widest text-sm font-bold hover:text-white hover:bg-white/10 transition-colors"
          >
            ← Back to Projects
          </Link>
        </div>

        {/* PAGE TITLE */}
        <h1 className="font-[family-name:var(--font-brown-sugar)] text-center text-5xl md:text-8xl mb-12 md:mb-20 tracking-wide">
          TECHNICAL SKILLS
        </h1>

        {/* 1. CERTIFICATION SECTION */}
        <section className="mb-24">
          <h2 className="font-[family-name:var(--font-brown-sugar)] text-center text-2xl md:text-4xl mb-8 md:mb-12 tracking-wider">
            CERTIFICATION
          </h2>
          {/* CHANGED: grid-cols-2 used on mobile now, with tighter gap */}
          <div className="grid grid-cols-2 gap-4 md:gap-12">
            <div className="flex flex-col items-center group">
              <div className="w-full aspect-[4/3] bg-neutral-900 border border-neutral-800 p-2 transition-colors group-hover:border-white/50">
                <img
                  src="/cert-revit.jpg"
                  alt="Revit 2025"
                  className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              {/* CHANGED: Smaller text on mobile (text-[10px]) */}
              <p className="mt-4 text-[10px] md:text-xs tracking-widest text-neutral-400 uppercase text-center">
                Revit 2025: Essential Training
              </p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-full aspect-[4/3] bg-neutral-900 border border-neutral-800 p-2 transition-colors group-hover:border-white/50">
                <img
                  src="/cert-autocad.jpg"
                  alt="AutoCAD 2023"
                  className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <p className="mt-4 text-[10px] md:text-xs tracking-widest text-neutral-400 uppercase text-center">
                AutoCAD 2023 Essential Training
              </p>
            </div>
          </div>
        </section>

        {/* 2. DRAFTING SAMPLE WORK */}
        <section className="mb-24">
          <h2 className="font-[family-name:var(--font-brown-sugar)] text-center text-2xl md:text-4xl mb-8 md:mb-12 tracking-wider">
            DRAFTING SAMPLE WORK
          </h2>
          <div className="space-y-16">
            <div className="w-full border-l border-white/20 pl-4 md:pl-8 py-2">
              <img src="/1.webp" alt="Drafting" className="w-full h-auto " />
            </div>
            <div className="w-full border-l border-white/20 pl-4 md:pl-8 py-2">
              <img src="/2.webp" alt="Drafting" className="w-full h-auto " />
            </div>
            <div className="w-full border-l border-white/20 pl-4 md:pl-8 py-2">
              <img src="/3.webp" alt="Drafting" className="w-full h-auto " />
            </div>
            <div className="w-full border-l border-white/20 pl-4 md:pl-8 py-2">
              <img src="/4.webp" alt="Drafting" className="w-full h-auto " />
            </div>
          </div>
        </section>

        {/* 3. SKILLS LISTS WITH ICONS (SIDE BY SIDE ON MOBILE) */}
        <div className="border-t border-white pt-8 md:pt-16">
          {/* CHANGED: grid-cols-2 used on mobile now */}
          <div className="grid grid-cols-2 gap-4 md:gap-24 relative">
            {/* Vertical Divider - NOW VISIBLE ON MOBILE */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/30 -ml-px"></div>

            {/* Left Column: Other Skills */}
            {/* CHANGED: items-end and pr-2 to push content against the center line */}
            <div className="flex flex-col items-end pr-3 md:pr-12">
              <h3 className="font-[family-name:var(--font-brown-sugar)] text-lg md:text-3xl mb-6 tracking-wider text-right">
                OTHER SKILLS
              </h3>
              <ul className="space-y-3 font-light tracking-widest text-[10px] md:text-base text-neutral-300">
                {OTHER_SKILLS.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 md:gap-4 justify-end"
                  >
                    {/* Text */}
                    <span className="text-right">{skill}</span>
                    {/* Icon - Right side */}
                    <ShedIcon className="w-4 h-4 md:w-6 md:h-6 text-white shrink-0" />
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Upcoming */}
            {/* CHANGED: items-start and pl-2 to push content away from center line */}
            <div className="flex flex-col items-start pl-3 md:pl-12">
              <h3 className="font-[family-name:var(--font-brown-sugar)] text-lg md:text-3xl mb-6 tracking-wider leading-tight text-left">
                UPCOMING TRAINING
              </h3>
              <ul className="space-y-3 font-light tracking-widest text-[10px] md:text-base text-neutral-300">
                {UPCOMING_SKILLS.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 md:gap-4 justify-start"
                  >
                    {/* Icon - Left side */}
                    <BlockIcon className="w-4 h-4 md:w-6 md:h-6 text-white shrink-0" />
                    {/* Text */}
                    <span className="text-left">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
