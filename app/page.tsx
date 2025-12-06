"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Navigation } from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";
import { ContactSection } from "@/components/contact-section";
import { BookFlip } from "@/components/book-flip";

// View State Types
type ViewMode = "list" | "project-detail";

const PROJECTS = [
  {
    id: 1,
    title: "SKIMMING",
    year: "2024",
    tagline: "Educational facility design with nature integration",
    pages: 6, // <--- CHANGED FROM 3 TO 7 (Matches your folder)
  },
  {
    id: 2,
    title: "FAIR SHARE",
    year: "2024",
    tagline: "Transitional housing project for spatial integration",
    pages: 4, // <--- CHANGED FROM 3 TO 4 (Matches your folder)
  },
  {
    id: 3,
    title: "NARRATION OF DIFFERENT PERSPECTIVES",
    year: "2025",
    tagline: "Museum intervention at Greenmarket Square",
    pages: 6, // <--- Update this when you add images for Project 3
  },
  {
    id: 4,
    title: "SANCTUARY IN SAFETY",
    year: "2025",
    tagline: "Transitional housing for women and children",
    pages: 6, // <--- Update this when you add images for Project 4
  },
];

export default function Home() {
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);

  // Handle clicking a card
  const handleProjectClick = (id: number) => {
    setActiveProjectId(id);
    setViewMode("project-detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle "Back" button
  const handleBackToList = () => {
    setViewMode("list");
    setActiveProjectId(null);
  };

  // Get active project data
  const activeProject = PROJECTS.find((p) => p.id === activeProjectId);

  return (
    <div className="bg-black min-h-screen flex flex-col">
      {/* HEADER - Only show in List View */}
      {viewMode === "list" && <Header />}

      {/* NAVIGATION - Only show in List View */}
      {viewMode === "list" && (
        <div className="pb-8 sticky top-0 z-40 bg-black/90 backdrop-blur-sm pt-4">
          <Navigation />
        </div>
      )}

      {/* MAIN CONTENT AREA */}
      <div className="flex-grow w-full">
        {/* === LIST VIEW === */}
        {viewMode === "list" && (
          <>
            {/* PROJECTS BANNER */}
            <div className="h-px bg-white w-full"></div>
            <div className="py-4 md:py-6 flex justify-center bg-black">
              <h2 className="font-[family-name:var(--font-brown-sugar)] text-5xl md:text-7xl text-white tracking-wide uppercase">
                PROJECTS
              </h2>
            </div>
            <div className="h-px bg-white w-full mb-16"></div>

            {/* PROJECTS GRID */}
            <div className="px-4 md:px-8 max-w-5xl mx-auto pb-20">
              {[...PROJECTS].reverse().map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => handleProjectClick(project.id)}
                />
              ))}
            </div>
          </>
        )}

        {/* === DETAIL VIEW (BOOK FLIP) === */}
        {viewMode === "project-detail" && activeProject && (
          <div className="animate-in fade-in duration-500">
            {/* Back Button Overlay */}
            <div className="absolute top-8 left-4 md:left-8 z-50">
              <button
                onClick={handleBackToList}
                className="border border-white text-white bg-black/50 backdrop-blur-md px-6 py-2 rounded-full uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-black transition-colors"
              >
                ← Back
              </button>
            </div>

            {/* The BookFlip Component - Passes the new totalPages count */}
            <BookFlip
              projectId={activeProject.id}
              projectTitle={activeProject.title}
              projectYear={activeProject.year}
              totalPages={activeProject.pages}
            />
          </div>
        )}
      </div>

      {/* CONTACT SECTION (BOTTOM) - Only show in List View */}
      {viewMode === "list" && (
        <div id="contact-section" className="border-t border-white/20 mt-20">
          <ContactSection />
        </div>
      )}
    </div>
  );
}
