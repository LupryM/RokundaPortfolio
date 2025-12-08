"use client";

import React from "react";

export const ContactSection = () => {
  const FORM_ACTION_URL = "https://formsubmit.co/rokundamabila@gmail.com";

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 md:py-20 px-4">
      {/* 1. BIG HEADER (Brown Sugar) */}
      <div className="text-center mb-16">
        <h1 className="font-[family-name:var(--font-brown-sugar)] text-6xl md:text-8xl text-white uppercase mb-4">
          GET IN TOUCH
        </h1>
        <p className="text-neutral-400 font-sans tracking-widest uppercase text-sm">
          Let's build something together
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {/* 2. CONTACT DETAILS (Left Column) */}
        <div className="flex flex-col justify-start space-y-6 mt-6">
          <div>
            <h3 className="text-white font-sans font-bold uppercase tracking-widest mb-2 text-sm">
              Email
            </h3>
            <a
              href="mailto:rokundamabila@gmail.com"
              className="text-2xl text-neutral-300 hover:text-white transition-colors font-[family-name:var(--font-brown-sugar)]"
            >
              rokundamabila@gmail.com
            </a>
          </div>

          <div>
            <h3 className="text-white font-sans font-bold uppercase tracking-widest mb-2 text-sm">
              Phone
            </h3>
            <a // Changed from <p> to <a>
              href="tel:+27676228952" // Added tel: link (assuming +27 is the country code for South Africa based on the number format)
              className="text-2xl text-neutral-300 hover:text-white transition-colors font-[family-name:var(--font-brown-sugar)]"
            >
              +27 67 622 8952
            </a>
          </div>

          <div>
            <h3 className="text-white font-sans font-bold uppercase tracking-widest mb-2 text-sm">
              Socials
            </h3>
            <div className="flex flex-col space-y-2">
              <a
                href="https://www.linkedin.com/in/rokunda-m-4b461b219/"
                target="_blank"
                className="text-neutral-400 hover:text-white transition-colors text-lg border-b border-neutral-800 pb-1 inline-block w-max"
              >
                LinkedIn Profile ↗
              </a>
            </div>
          </div>
        </div>

        {/* 3. CONTACT FORM (Right Column) */}
        <form
          className="flex flex-col space-y-6"
          action={FORM_ACTION_URL}
          method="POST"
        >
          {/* 🔥 Hidden fields to fix FormSubmit loading issue */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://rokunda.vercel.app/?success=true"
          />

          <div className="space-y-2">
            <label className="text-xs font-sans font-bold uppercase tracking-widest text-neutral-500">
              Name
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700"
              placeholder="YOUR NAME"
              name="name"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-sans font-bold uppercase tracking-widest text-neutral-500">
              Email
            </label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700"
              placeholder="YOUR EMAIL"
              name="email"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-sans font-bold uppercase tracking-widest text-neutral-500">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700 resize-none"
              placeholder="TELL ME ABOUT YOUR PROJECT"
              name="message"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-8 bg-white text-black font-bold uppercase tracking-widest py-4 px-8 rounded-full hover:bg-neutral-200 transition-colors self-start"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* 4. SCROLL TO TOP BUTTON (Added Here) */}
      <div className="w-full flex justify-center mt-24">
        <button
          onClick={handleScrollTop}
          className="group flex flex-col items-center gap-4 text-white hover:text-white/80 transition-colors"
        >
          {/* Simple Up Arrow */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 ease-in-out group-hover:-translate-y-2"
          >
            <path d="M12 21L12 3" />
            <path d="M5 10L12 3L19 10" />
          </svg>

          {/* Text Label */}
          <span className="font-sans font-bold uppercase tracking-[0.2em] text-xs md:text-sm text-neutral-400 group-hover:text-white transition-colors">
            Back to Projects
          </span>
        </button>
      </div>
    </div>
  );
};
