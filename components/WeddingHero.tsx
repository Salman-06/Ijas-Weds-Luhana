'use client';

import { useState } from 'react';
import { Sparkles, Calendar, MapPin, Share2, Check } from 'lucide-react';
import { WEDDING_COUPLE } from '@/lib/wedding-data';
import MonogramSealSvg from './MonogramSealSvg';

export default function WeddingHero() {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const text = `You are cordially invited to the wedding celebration of A. Ijas Ahamed & J. Luhana Fathima! 💍\nDates: 12th–13th December 2026 (Pollachi & Coimbatore).\nView the digital invitation here: ${typeof window !== 'undefined' ? window.location.href : ''}`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Ijas & Luhana - Wedding Invitation',
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

      {/* Staggered Cinematic Hero Sequence */}
      <div className="relative z-10 flex flex-col items-center">
        {/* 1. Bismillah Header */}
        <div className="space-y-2 mb-8 hero-animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="font-arabic text-2xl md:text-3xl text-[#5d040f] tracking-wide leading-relaxed">
            {WEDDING_COUPLE.bismillahArabic}
          </div>
          <p className="text-xs uppercase tracking-widest text-[#8A7968]">
            {WEDDING_COUPLE.bismillahEnglish}
          </p>
        </div>

        {/* 2. Royal Crest Monogram with Scale Bloom */}
        <div className="inline-block relative mb-8 hero-animate-bloom" style={{ animationDelay: '0.24s' }}>
          <div className="relative group mx-auto">
            <MonogramSealSvg
              size={110}
              className="w-24 h-24 md:w-28 md:h-28 mx-auto drop-shadow-royal"
            />
            <div className="absolute -inset-1.5 rounded-full border border-[#D4AF37]/40 pointer-events-none animate-pulse-glow" />
          </div>
          <div className="text-[11px] font-arabic text-[#5d040f] mt-2 font-medium">
            {WEDDING_COUPLE.arabicCalligraphy}
          </div>
        </div>

        {/* 3. Sacred Matrimony Kicker */}
        <div
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#5d040f] font-semibold mb-4 hero-animate-fade-up"
          style={{ animationDelay: '0.38s' }}
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Save The Date · Sacred Islamic Matrimony</span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
        </div>

        {/* 4. Groom Name */}
        <h1
          className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#5d040f] font-bold tracking-tight text-balance leading-tight hero-animate-fade-up"
          style={{ animationDelay: '0.52s' }}
        >
          {WEDDING_COUPLE.groom.fullName}{' '}
          <span className="text-xl md:text-2xl font-sans font-normal text-[#D4AF37]">
            {WEDDING_COUPLE.groom.title}
          </span>
        </h1>

        {/* 5. Groom Parents & Tagline */}
        <p className="text-xs md:text-sm text-[#6B5B52] mt-2 hero-animate-fade-up" style={{ animationDelay: '0.64s' }}>
          {WEDDING_COUPLE.groom.parents} · {WEDDING_COUPLE.groom.familyCity}
          <span className="block text-xs text-[#5d040f] font-medium mt-0.5">
            ({WEDDING_COUPLE.groom.company} · {WEDDING_COUPLE.groom.tagline})
          </span>
        </p>

        {/* 6. Elegant "with" Divider */}
        <div
          className="flex items-center justify-center gap-3 my-3 hero-animate-fade-up"
          style={{ animationDelay: '0.76s' }}
        >
          <span className="h-[1px] w-16 bg-[#D4AF37]/50" />
          <span className="font-serif text-2xl md:text-3xl italic text-[#5d040f]">with</span>
          <span className="h-[1px] w-16 bg-[#D4AF37]/50" />
        </div>

        {/* 7. Bride Name */}
        <h2
          className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#5d040f] font-bold tracking-tight text-balance leading-tight hero-animate-fade-up"
          style={{ animationDelay: '0.88s' }}
        >
          {WEDDING_COUPLE.bride.fullName}{' '}
          <span className="text-xl md:text-2xl font-sans font-normal text-[#D4AF37]">
            {WEDDING_COUPLE.bride.title}
          </span>
        </h2>

        {/* 8. Bride Parents */}
        <p className="text-xs md:text-sm text-[#6B5B52] mt-2 mb-10 hero-animate-fade-up" style={{ animationDelay: '1.0s' }}>
          {WEDDING_COUPLE.bride.parents} · {WEDDING_COUPLE.bride.familyCity}
        </p>

        {/* 9. Dates and Cities Strip */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 md:gap-8 py-4 px-6 rounded-2xl bg-white/80 border border-[#D4AF37]/40 shadow-xs max-w-2xl mx-auto mb-10 text-xs md:text-sm font-medium text-[#5d040f] hero-animate-fade-up"
          style={{ animationDelay: '1.12s' }}
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#D4AF37]" />
            <span>12 &amp; 13 December 2026</span>
          </div>
          <div className="hidden sm:block text-[#D4AF37]">•</div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#5d040f]" />
            <span>Pollachi &amp; Coimbatore, Tamil Nadu</span>
          </div>
        </div>

        {/* 10. Action Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-8 w-full hero-animate-fade-up"
          style={{ animationDelay: '1.24s' }}
        >
          <button
            type="button"
            onClick={() => scrollTo('itinerary')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#5d040f] via-[#7D1223] to-[#400208] text-[#FAF6F0] font-semibold text-xs tracking-wider uppercase shadow-royal hover:shadow-gold-glow hover:scale-102 transition-all duration-300 cursor-pointer"
          >
            Mehendi &amp; Marriage Schedule
          </button>

          <button
            type="button"
            onClick={() => scrollTo('venues')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white text-[#5d040f] border border-[#D4AF37] font-semibold text-xs tracking-wider uppercase hover:bg-[#FAF6F0] transition-all cursor-pointer"
          >
            Venues &amp; Navigation
          </button>
        </div>

        {/* 11. WhatsApp / Share Link Buttons */}
        <div
          className="flex items-center justify-center gap-4 text-xs hero-animate-fade-up"
          style={{ animationDelay: '1.36s' }}
        >
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-[#15803D] font-medium hover:underline cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share Invitation on WhatsApp</span>
          </button>
          <span className="text-[#D8C9B4]">·</span>
          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 text-[#5d040f] font-medium hover:underline cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#15803D]" /> : <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />}
            <span>{copied ? 'Link Copied to Clipboard!' : 'Copy Link'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
