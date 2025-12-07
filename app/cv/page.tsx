import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { BackButton } from "@/components/back-button";


export default function CVPage() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <div className="pb-8 sticky top-0 z-40 bg-black/90 backdrop-blur-sm pt-4">
        <Navigation />
      </div>

      <div className="flex-grow px-4 md:px-8 max-w-6xl mx-auto py-12 w-full text-center">
        {/* BUTTONS CONTAINER */}
        <div className="mb-12 flex flex-col md:flex-row justify-center items-center gap-4">
          {/* BACK BUTTON */}
          <Link
            href="/"
            className="text-white px-8 py-3 rounded-full uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-black transition-colors"
          >
            ← Back to Projects
          </Link>

          {/* DOWNLOAD BUTTON */}
          {/* We use a standard <a> tag here because the 'download' attribute doesn't work with Next.js <Link> */}
          <a
            href="/cvlight.pdf" // REPLACE THIS with your actual file name in the public folder
            download="Rokunda_Mboyi_CV" // This is the name the file will have when downloaded
            className="text-white px-8 py-3 rounded-full uppercase tracking-widest text-sm font-bold border border-white hover:bg-white hover:text-black transition-colors"
          >
            Download CV ↓
          </a>
        </div>

        {/* TITLE */}
        <h1 className="font-[family-name:var(--font-brown-sugar)] text-6xl md:text-8xl text-white mb-12">
          CURRICULUM VITAE
        </h1>

        {/* CV IMAGE CONTAINER */}
        <div className="w-full flex justify-center">
          <img
            src="/cvlight.webp"
            alt="Rokunda Mboyi CV"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
