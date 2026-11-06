'use client';

import { useState } from 'react';
import { Sparkles, Calendar, MapPin, Share2, Check, Heart } from 'lucide-react';
import { WEDDING_COUPLE } from '@/lib/wedding-data';

export default function WeddingHero() {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const text = `You are cordially invited to the wedding celebration of A. Ijas Ahamed & J. Luhana Fathima! 💍\nDates: 12th–14th December 2026 (Pollachi & Coimbatore).\nView the digital invitation and RSVP here: ${typeof window !== 'undefined' ? window.location.href : ''}`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Ijas & Luhana - Royal Wedding Invitation',
        text,
        url: window.location.href,
      }).catch(() => {});
    } else {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-12 pb-20 px-4 max-w-5xl mx-auto text-center overflow-hidden">
      {/* Decorative Golden Arch Silhouette Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-b from-[#F4E295]/20 via-[#EED6D3]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Bismillah Header */}
      <div className="space-y-2 mb-8 animate-soft-float">
        <div className="font-arabic text-2xl md:text-3xl text-[#721825] tracking-wide leading-relaxed">
          {WEDDING_COUPLE.bismillahArabic}
        </div>
        <p className="text-xs uppercase tracking-widest text-[#8A7968]">
          {WEDDING_COUPLE.bismillahEnglish}
        </p>
      </div>

      {/* Royal Crest Monogram */}
      <div className="inline-block relative mb-8">
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-[#721825] via-[#851D2C] to-[#4A0E17] border-2 border-[#D4AF37] flex flex-col items-center justify-center shadow-royal mx-auto relative group">
          <span className="font-serif text-3xl md:text-4xl font-bold text-[#F4E295] tracking-widest">
            {WEDDING_COUPLE.monogram}
          </span>
          <div className="absolute -inset-1.5 rounded-full border border-[#D4AF37]/40 pointer-events-none animate-pulse-glow" />
        </div>
        <div className="text-[11px] font-arabic text-[#721825] mt-2 font-medium">
          {WEDDING_COUPLE.arabicCalligraphy}
        </div>
      </div>

      {/* Main Title & Couple Names */}
      <div className="space-y-4 max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#721825] font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Save The Date · Sacred Islamic Matrimony</span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#4A0E17] font-bold tracking-tight text-balance leading-tight">
          {WEDDING_COUPLE.groom.fullName}{' '}
          <span className="text-xl md:text-2xl font-sans font-normal text-[#D4AF37]">
            {WEDDING_COUPLE.groom.title}
          </span>
        </h1>

        {/* Groom Parents */}
        <p className="text-xs md:text-sm text-[#6B5B52]">
          S/o {WEDDING_COUPLE.groom.parents} · {WEDDING_COUPLE.groom.familyCity}
          <span className="block text-xs text-[#721825] font-medium mt-0.5">
            ({WEDDING_COUPLE.groom.company} · {WEDDING_COUPLE.groom.tagline})
          </span>
        </p>

        <div className="flex items-center justify-center gap-3 my-2">
          <span className="h-[1px] w-16 bg-[#D4AF37]/50" />
          <span className="font-serif text-2xl md:text-3xl italic text-[#721825]">with</span>
          <span className="h-[1px] w-16 bg-[#D4AF37]/50" />
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#4A0E17] font-bold tracking-tight text-balance leading-tight">
          {WEDDING_COUPLE.bride.fullName}{' '}
          <span className="text-xl md:text-2xl font-sans font-normal text-[#D4AF37]">
            {WEDDING_COUPLE.bride.title}
          </span>
        </h2>

        {/* Bride Parents */}
        <p className="text-xs md:text-sm text-[#6B5B52]">
          D/o {WEDDING_COUPLE.bride.parents} · {WEDDING_COUPLE.bride.familyCity}
        </p>
      </div>

      {/* Dates and Cities Strip */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 py-4 px-6 rounded-2xl bg-white/80 border border-[#D4AF37]/40 shadow-xs max-w-2xl mx-auto mb-10 text-xs md:text-sm font-medium text-[#4A0E17]">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[#D4AF37]" />
          <span>12 · 13 · 14 December 2026</span>
        </div>
        <div className="hidden sm:block text-[#D4AF37]">•</div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#721825]" />
          <span>Pollachi &amp; Coimbatore, Tamil Nadu</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-8">
        <button
          type="button"
          onClick={() => scrollTo('itinerary')}
          className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#721825] via-[#851D2C] to-[#5C101C] text-[#FAF6F0] font-semibold text-xs tracking-wider uppercase shadow-royal hover:shadow-gold-glow hover:scale-102 transition-all duration-300 cursor-pointer"
        >
          Mehendi &amp; Marriage Schedule
        </button>

        <button
          type="button"
          onClick={() => scrollTo('venues')}
          className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white text-[#721825] border border-[#D4AF37] font-semibold text-xs tracking-wider uppercase hover:bg-[#FAF6F0] transition-all cursor-pointer"
        >
          Venues &amp; Navigation
        </button>
      </div>

      {/* Share / WhatsApp buttons */}
      <div className="flex items-center justify-center gap-4 text-xs">
        <button
          type="button"
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 text-[#15803D] font-medium hover:underline"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>Share Invitation on WhatsApp</span>
        </button>
        <span className="text-[#D8C9B4]">·</span>
        <button
          type="button"
          onClick={handleCopyLink}
          className="inline-flex items-center gap-1.5 text-[#721825] font-medium hover:underline"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-[#15803D]" /> : <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />}
          <span>{copied ? 'Link Copied to Clipboard!' : 'Copy Link'}</span>
        </button>
      </div>
    </section>
  );
}
