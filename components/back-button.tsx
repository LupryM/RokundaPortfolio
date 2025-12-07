import Link from "next/link";

export const BackButton = () => {
  return (
    <Link
      href="/"
      className="
        /* CIRCLE SHAPE */
        flex items-center justify-center
        w-10 h-10 md:w-14 md:h-14
        rounded-full 
        border border-white/50
        
        /* COLORS */
        bg-black text-white
        
        /* ANIMATION */
        transition-all duration-300
        hover:bg-white hover:text-black hover:border-white hover:scale-105
        group
      "
    >
      {/* ARROW ICON */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 md:w-6 md:h-6 stroke-current transition-transform group-hover:-translate-x-1"
      >
        <path
          d="M19 12H5M5 12L12 19M5 12L12 5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
};
