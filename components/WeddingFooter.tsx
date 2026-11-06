'use client';

import { Heart, ChevronUp, Lock } from 'lucide-react';
import { WEDDING_COUPLE } from '@/lib/wedding-data';

export default function WeddingFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#4A0E17] text-[#FAF6F0] pt-16 pb-12 px-4 border-t-2 border-[#D4AF37]">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Compliments Section as in the Card */}
        <div className="text-center space-y-4 max-w-2xl mx-auto bg-black/20 p-8 rounded-3xl border border-[#D4AF37]/30">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F4E295]">
            With The Best Compliments From
          </span>

          <div className="space-y-1">
            <h3 className="font-serif text-2xl font-bold text-[#F4E295] tracking-wide">
              {WEDDING_COUPLE.groom.company}
            </h3>
            <p className="text-xs text-[#EED6D3] italic">
              {WEDDING_COUPLE.groom.tagline} · Coimbatore
            </p>
          </div>

          <div className="h-[1px] w-24 bg-[#D4AF37]/40 mx-auto my-3" />

          <p className="text-xs text-[#E8DCC9]">
            Family &apos;n&apos; Friends of Mr. M. Abdul Hakkeem &amp; Mr. S. Jaffer Ali
          </p>
        </div>

        {/* Monogram and Du'a */}
        <div className="text-center space-y-3">
          <div className="font-serif text-3xl font-bold text-[#F4E295] tracking-widest">
            {WEDDING_COUPLE.monogram}
          </div>
          <div className="font-serif text-lg font-medium text-white">
            {WEDDING_COUPLE.groom.fullName} &amp; {WEDDING_COUPLE.bride.fullName}
          </div>
          <p className="font-arabic text-lg text-[#F4E295]/90 max-w-lg mx-auto">
            {WEDDING_COUPLE.arabicCalligraphy}
          </p>
          <p className="text-xs text-[#EED6D3]/80 max-w-md mx-auto">
            &ldquo;May Allah bless this union, grant them righteous progeny, and make their home an abode of tranquility and mutual kindness.&rdquo;
          </p>
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-[#721825] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8DCC9]/70">
          <div>
            12th, 13th &amp; 14th December 2026 · Pollachi &amp; Coimbatore
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
