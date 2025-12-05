"use client";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    year: string;
    tagline: string;
  };
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <button
      onClick={onClick}
      // ADDED "mb-8" HERE FOR SPACING
      className="w-full bg-neutral-900 border-2 border-neutral-700 p-6 md:p-8 hover:bg-neutral-800 transition-colors text-left cursor-pointer group mb-8 last:mb-0"
    >
      <div className="aspect-video bg-neutral-800 mb-4 overflow-hidden flex items-center justify-center group-hover:bg-neutral-700 transition-colors">
        {/* Ensure your images are actually inside public/projects/project1/01.webp etc */}
        <img
          src={`/projects/project${project.id}/01.webp`}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* If you want the Brown Sugar font here, change font-serif to font-[family-name:var(--font-brown-sugar)] */}
      <h3 className="font-serif text-xl md:text-2xl text-white mb-2">
        {project.title}
      </h3>
      <p className="text-neutral-400 text-xs md:text-sm mb-2">{project.year}</p>
      <p className="text-neutral-500 text-xs md:text-sm">{project.tagline}</p>
    </button>
  );
}
