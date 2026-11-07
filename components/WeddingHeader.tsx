'use client';

import { Sparkles } from 'lucide-react';

interface WeddingHeaderProps {
  onReplayCard?: () => void;
}

export default function WeddingHeader({ onReplayCard }: WeddingHeaderProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF6F0]/90 backdrop-blur-md border-b border-[#D4AF37]/30 transition-all duration-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-6">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="font-serif text-xl md:text-2xl font-bold tracking-tight text-[#5d040f] whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
        >
          Ijas &amp; Luhana
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-[#6B5B52]">
          <button
            type="button"
            onClick={() => scrollTo('itinerary')}
            className="hover:text-[#5d040f] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Events
          </button>
          <button
            type="button"
            onClick={() => scrollTo('countdown')}
            className="hover:text-[#5d040f] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Countdown
          </button>
          <button
            type="button"
            onClick={() => scrollTo('verses')}
            className="hover:text-[#5d040f] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Invocations
          </button>
          <button
            type="button"
            onClick={() => scrollTo('venues')}
            className="hover:text-[#5d040f] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Locations
          </button>
        </nav>

        {/* Zone 3: 1 primary action & Card Replay */}
        <div className="flex items-center gap-2.5 shrink-0">
          {onReplayCard && (
            <button
              type="button"
              onClick={onReplayCard}
              className="px-3 py-1.5 text-xs font-medium text-[#5d040f] bg-white border border-[#D4AF37]/50 rounded-full hover:bg-[#FAF0E1] transition-colors shadow-2xs whitespace-nowrap shrink-0 cursor-pointer"
              title="View front gatefold card"
            >
              View Card
            </button>
          )}
          <button
            type="button"
            onClick={() => scrollTo('itinerary')}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-[#5d040f] rounded-full hover:bg-[#7D1223] transition-colors shadow-sm hover:shadow-gold-glow whitespace-nowrap shrink-0 cursor-pointer"
          >
            View Schedule
          </button>
        </div>
      </div>
    </header>
  );
}
