import Link from "next/link";
import { Header } from "@/components/header";
import { Navigation } from "@/components/navigation";

export default function SkillsPage() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header />
      <div className="pb-8 sticky top-0 z-40 bg-black/90 backdrop-blur-sm pt-4">
        <Navigation />
      </div>

      {/* CHANGED: max-w-5xl -> max-w-6xl to match others */}
      <div className="flex-grow px-4 md:px-8 max-w-6xl mx-auto py-12 w-full text-center">
        {/* BACK BUTTON */}
        <div className="mb-12 flex justify-center">
          <Link
            href="/"
            // CHANGED: Removed "border border-white"
            className="text-white px-8 py-3 rounded-full uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-black transition-colors"
          >
            ← Back to Projects
          </Link>
        </div>

        {/* TITLE */}
        <h1 className="font-[family-name:var(--font-brown-sugar)] text-6xl md:text-8xl text-white mb-12">
          TECHNICAL SKILLS
        </h1>

        {/* SKILLS IMAGE CONTAINER */}
        <div className="w-full flex justify-center">
          <img
            src="/technical.jpg"
            alt="Technical Skills"
            // CHANGED: Removed border, shadow, and max-w limit
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
