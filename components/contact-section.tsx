import React from "react";

export const ContactSection = () => {
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
             <h3 className="text-white font-sans font-bold uppercase tracking-widest mb-2 text-sm">Email</h3>
             <a href="mailto:rokundamabila@gmail.com" className="text-2xl text-neutral-300 hover:text-white transition-colors font-[family-name:var(--font-brown-sugar)]">
               rokundamabila@gmail.com
             </a>
          </div>

          <div>
             <h3 className="text-white font-sans font-bold uppercase tracking-widest mb-2 text-sm">Phone</h3>
             <p className="text-2xl text-neutral-300 font-[family-name:var(--font-brown-sugar)]">
               067 622 8952
             </p>
          </div>

          <div>
             <h3 className="text-white font-sans font-bold uppercase tracking-widest mb-2 text-sm">Socials</h3>
             <div className="flex flex-col space-y-2">
                <a href="https://www.linkedin.com/in/rokunda-m-4b461b219/" target="_blank" className="text-neutral-400 hover:text-white transition-colors text-lg border-b border-neutral-800 pb-1 inline-block w-max">
                  LinkedIn Profile ↗
                </a>
             </div>
          </div>
        </div>

        {/* 3. CONTACT FORM (Right Column) */}
        <form className="flex flex-col space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-sans font-bold uppercase tracking-widest text-neutral-500">Name</label>
            <input 
              type="text" 
              className="w-full bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700"
              placeholder="YOUR NAME"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-sans font-bold uppercase tracking-widest text-neutral-500">Email</label>
            <input 
              type="email" 
              className="w-full bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700"
              placeholder="YOUR EMAIL"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-sans font-bold uppercase tracking-widest text-neutral-500">Message</label>
            <textarea 
              rows={4}
              className="w-full bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700 resize-none"
              placeholder="TELL ME ABOUT YOUR PROJECT"
            />
          </div>

          <button className="mt-8 bg-white text-black font-bold uppercase tracking-widest py-4 px-8 rounded-full hover:bg-neutral-200 transition-colors self-start">
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
};
