import Link from "next/link";
import { Header } from "@/components/header";
import { Navigation } from "@/components/navigation";

export default function CVPage() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header />
      <div className="pb-8 sticky top-0 z-40 bg-black/90 backdrop-blur-sm pt-4">
        <Navigation />
      </div>

      <div className="flex-grow px-4 md:px-8 max-w-5xl mx-auto py-12 w-full text-center">
        {/* BACK BUTTON */}
        <div className="mb-12 flex justify-center">
          <Link
            href="/"
            className="border border-white text-white px-8 py-3 rounded-full uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-black transition-colors"
          >
            ← Back to Projects
          </Link>
        </div>

        {/* TITLE */}
        <h1 className="font-[family-name:var(--font-brown-sugar)] text-6xl md:text-8xl text-white mb-12">
          CURRICULUM VITAE
        </h1>

        {/* CV IMAGE CONTAINER */}
        <div className="w-full flex justify-center">
          {/* Make sure to put your file in: public/images/cv.webp
           */}
          <img
            src="/cv.webp"
            alt="Rokunda Mboyi CV"
            className="w-full max-w-3xl h-auto border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          />
        </div>
      </div>
    </div>
  );
}
