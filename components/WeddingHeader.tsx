'use client';

import { Sparkles } from 'lucide-react';

export default function WeddingHeader() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF6F0]/90 backdrop-blur-md border-b border-[#D4AF37]/30 transition-all duration-200">
      <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="font-serif text-xl md:text-2xl font-bold tracking-tight text-[#4A0E17] whitespace-nowrap shrink-0 hover:text-[#721825] transition-colors"
        >
          Ijas &amp; Luhana
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-[#6B5B52]">
          <button
            type="button"
            onClick={() => scrollTo('itinerary')}
            className="hover:text-[#721825] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Events
          </button>
          <button
            type="button"
            onClick={() => scrollTo('countdown')}
            className="hover:text-[#721825] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Countdown
          </button>
          <button
            type="button"
            onClick={() => scrollTo('verses')}
            className="hover:text-[#721825] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Invocations
          </button>
          <button
            type="button"
            onClick={() => scrollTo('venues')}
            className="hover:text-[#721825] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Locations
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => scrollTo('itinerary')}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#721825] rounded-full hover:bg-[#5C101C] transition-colors shadow-sm hover:shadow-gold-glow whitespace-nowrap shrink-0 cursor-pointer"
          >
            View Schedule
          </button>
        </div>
      </div>
    </header>
  );
}
