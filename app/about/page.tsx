import Link from "next/link";
import { Header } from "@/components/header";
import { Navigation } from "@/components/navigation";

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header />
      <div className="pb-8 sticky top-0 z-40 bg-black/90 backdrop-blur-sm pt-4">
        <Navigation />
      </div>

      {/* CHANGED: max-w-7xl -> max-w-6xl (A bit smaller) */}
      <div className="flex-grow px-4 md:px-8 max-w-6xl mx-auto py-12 w-full text-center">
        {/* BACK BUTTON */}
        <div className="mb-12 flex justify-center">
          <Link
            href="/"
            className="border border-white text-white px-8 py-3 rounded-full uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-black transition-colors"
          >
            ← Back to Projects
          </Link>
        </div>

        {/* ABOUT IMAGE CONTAINER */}
        <div className="w-full flex justify-center">
          <img
            src="/about.webp"
            alt="About Rokunda Mboyi"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}