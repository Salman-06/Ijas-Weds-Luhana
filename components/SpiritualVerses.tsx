'use client';

import { Sparkles, HeartHandshake } from 'lucide-react';
import { WEDDING_COUPLE } from '@/lib/wedding-data';

export default function SpiritualVerses() {
  return (
    <section id="verses" className="py-16 px-4 max-w-5xl mx-auto">
      <div className="relative bg-[#FFFBF2] rounded-3xl border border-[#D4AF37]/50 p-8 md:p-14 shadow-royal text-center overflow-hidden">
        {/* Subtle decorative Islamic arch background */}
        <div className="absolute top-0 inset-x-0 h-2 bg-gold-gradient" />
        
        <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#721825] font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Divine Invocations &amp; Blessings</span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
        </div>

        {/* Surah An-Naba */}
        <div className="max-w-2xl mx-auto mb-10 pb-8 border-b border-[#E8DCC9]">
          <div className="font-arabic text-3xl md:text-4xl text-[#721825] font-bold mb-3 tracking-wide leading-relaxed">
            {WEDDING_COUPLE.quranVerseArabic}
          </div>
          <div className="font-serif italic text-xl md:text-2xl text-[#4A0E17] font-medium mb-1">
            {WEDDING_COUPLE.quranVerseEnglish}
          </div>
          <div className="text-xs uppercase tracking-widest text-[#8A7968]">
            {WEDDING_COUPLE.quranVerseRef}
          </div>
        </div>

        {/* Prophetic Sunnah Dua */}
        <div className="max-w-2xl mx-auto mb-10 pb-8 border-b border-[#E8DCC9]">
          <div className="font-arabic text-2xl md:text-3xl text-[#721825] mb-3 leading-loose">
            {WEDDING_COUPLE.propheticDuaArabic}
          </div>
          <p className="font-serif text-base md:text-lg text-[#5C4D44] italic mb-1">
            {WEDDING_COUPLE.propheticDuaEnglish}
          </p>
          <div className="text-xs uppercase tracking-widest text-[#8A7968]">
            Sunnah Wedding Invocation
          </div>
        </div>

        {/* Tamil Quranic Verse from Card */}
        <div className="max-w-3xl mx-auto bg-[#FAF4E6] rounded-2xl p-6 border border-[#E0D0B6]">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#721825] mb-2">
            <HeartHandshake className="w-4 h-4 text-[#D4AF37]" />
            <span>புனித பிரார்த்தனை (Tamil Invocation)</span>
          </div>
          <p className="text-sm md:text-base text-[#4A0E17] leading-relaxed font-medium mb-1">
            &ldquo;{WEDDING_COUPLE.tamilDua}&rdquo;
          </p>
          <div className="text-xs text-[#8A7968] font-medium">
            {WEDDING_COUPLE.tamilDuaRef}
          </div>
        </div>
      </div>
    </section>
  );
}
