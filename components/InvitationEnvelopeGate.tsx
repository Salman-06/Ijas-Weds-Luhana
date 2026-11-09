'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

interface EnvelopeGateProps {
  isOpen: boolean;
  isFadingOut: boolean;
  isDismissed: boolean;
  onOpen: () => void;
  onSkip: () => void;
}

/**
 * Cinematic Wedding Gatefold Invitation Cover:
 * - Master studio photographic representation of the user's uploaded wedding invitation card
 * - Pristine ivory pearl cardstock with watercolor crimson/burgundy peonies and gold botanicals
 * - Left and Right 3D double doors meeting down the exact center seam
 * - Central interactive monogram seal ("I & L") with instant touch & click opening response
 * - Reveals inner luxury parchment card with Bismillah and names before unfolding into the hero celebration
 */
export default function InvitationEnvelopeGate({
  isOpen,
  isFadingOut,
  isDismissed,
  onOpen,
}: EnvelopeGateProps) {
  if (isDismissed) return null;

  const handleOpenTrigger = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!isOpen) {
      onOpen();
    }
  };

  return (
    <div
      onClick={handleOpenTrigger}
      onTouchStart={handleOpenTrigger}
      className={`fixed inset-0 z-50 overflow-y-auto overflow-x-hidden select-none bg-radial from-[#22040d] via-[#120206] to-[#070103] transition-opacity duration-600 flex flex-col items-center justify-center p-3 sm:p-6 cursor-pointer ${
        isFadingOut ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      aria-label="Wedding Gatefold Invitation - Tap anywhere to open"
    >
      {/* Ambient Silk Texture & Floating Golden Stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12)_0%,transparent_70%)]" />
        <span className="sparkle-dot" style={{ left: '15%', top: '18%', animationDelay: '-0.2s' }} />
        <span className="sparkle-dot" style={{ left: '82%', top: '22%', animationDelay: '-1.5s' }} />
        <span className="sparkle-dot" style={{ left: '22%', top: '78%', animationDelay: '-0.8s' }} />
        <span className="sparkle-dot" style={{ left: '78%', top: '75%', animationDelay: '-2.1s' }} />
        <span className="sparkle-dot" style={{ left: '12%', top: '50%', animationDelay: '-1.1s' }} />
        <span className="sparkle-dot" style={{ left: '88%', top: '48%', animationDelay: '-2.4s' }} />
        <span className="sparkle-dot" style={{ left: '50%', top: '8%', animationDelay: '-1.7s' }} />
      </div>

      {/* Realistic Physical Gatefold Invitation Card - Expanded Full Page Size */}
      <div className="relative z-20 w-[96vw] sm:w-[88vw] md:w-[720px] lg:w-[800px] h-[76vh] sm:h-[82vh] md:h-[86vh] max-h-[900px] aspect-[4/3.4] sm:aspect-[4/3.2] door-container cursor-pointer">
        
        {/* INNER CARD (Revealed in 3D when left and right gatefold doors swing open) */}
        <div className="absolute inset-0 rounded-3xl bg-[#FCF9F2] p-8 sm:p-12 md:p-16 flex flex-col items-center justify-center text-center select-none border-4 border-[#FAF0E1] shadow-2xl z-0">
          {/* Subtle Gold Damask Filigree Border */}
          <div className="absolute inset-3 sm:inset-4 border border-[#D4AF37]/40 rounded-2xl pointer-events-none" />
          <div className="absolute inset-4 sm:inset-6 border border-[#D4AF37]/20 rounded-xl pointer-events-none" />

          {/* Bismillah Calligraphy */}
          <p className="font-arabic text-3xl sm:text-4xl text-[#5d040f] mb-3 leading-relaxed drop-shadow-xs">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <p className="font-serif italic text-xs sm:text-sm text-[#6B5B52] mb-4 tracking-wide">
            In the name of Allah, the Most Beneficent, the Most Merciful
          </p>

          <span className="text-[#D4AF37] text-lg my-1">❦</span>

          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#7A5A43] font-semibold mb-3">
            With the blessings of Almighty Allah
          </p>

          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#5d040f] leading-snug tracking-wide">
            A. Ijas Ahamed
          </h3>
          <span className="text-sm font-serif italic text-[#D4AF37] my-1">&amp;</span>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#5d040f] leading-snug mb-4 tracking-wide">
            J. Luhana Fathima
          </h3>

          <p className="text-xs sm:text-sm text-[#52443C] max-w-md leading-relaxed mb-5 font-serif">
            Cordially request the honour of your auspicious presence and blessings on the joyous occasion of their wedding celebrations.
          </p>

          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FAF0E1] border border-[#D4AF37]/40 text-xs font-semibold tracking-widest text-[#5d040f] uppercase shadow-xs">
            <span>December 12 &amp; 13, 2026</span>
          </div>
        </div>

        {/* 3D GATEFOLD DOUBLE DOORS CONTAINER (Using user's exact uploaded cover image split across left and right panels) */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden border-2 border-[#D4AF37]/70 shadow-[0_35px_80px_-15px_rgba(0,0,0,0.95),0_0_60px_rgba(212,175,55,0.3)] bg-[#FAF5EB] pointer-events-none z-10">
          <div className="absolute inset-0 flex" style={{ transformStyle: 'preserve-3d' }}>
            {/* LEFT DOOR PANEL */}
            <div
              className={`door-panel-left absolute left-0 top-0 w-1/2 h-full overflow-hidden ${
                isOpen ? 'open' : ''
              }`}
            >
              <div className="absolute top-0 left-0 w-[200%] h-full bg-[#FAF5EB]">
                <Image
                  src="/assets/images/wedding_card_cover_studio.jpg"
                  alt="Wedding Invitation Left Gatefold Door"
                  fill
                  priority
                  referrerPolicy="no-referrer"
                  className="object-cover object-center"
                />
              </div>
              {/* Subtle seam shadow and delicate gold foil rim down the open edge */}
              <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/25 to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-[2px] bg-[#D4AF37]/90 pointer-events-none" />
            </div>

            {/* RIGHT DOOR PANEL */}
            <div
              className={`door-panel-right absolute right-0 top-0 w-1/2 h-full overflow-hidden ${
                isOpen ? 'open' : ''
              }`}
            >
              <div className="absolute top-0 left-[-100%] w-[200%] h-full bg-[#FAF5EB]">
                <Image
                  src="/assets/images/wedding_card_cover_studio.jpg"
                  alt="Wedding Invitation Right Gatefold Door"
                  fill
                  priority
                  referrerPolicy="no-referrer"
                  className="object-cover object-center"
                />
              </div>
              {/* Subtle seam shadow and delicate gold foil rim down the open edge */}
              <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/25 to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 left-0 w-[2px] bg-[#D4AF37]/90 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* CENTRAL INTERACTIVE ACTION & TOUCH AREA (Matching exact single logo from media file) */}
        <div
          className={`absolute inset-0 z-50 transition-all duration-700 pointer-events-auto ${
            isOpen ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
          }`}
        >
          {/* Circular touch target directly over the single central seal */}
          <div
            role="button"
            tabIndex={0}
            onClick={handleOpenTrigger}
            onTouchStart={handleOpenTrigger}
            aria-label="Touch monogram seal to open wedding invitation"
            className="group absolute top-[48.8%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full cursor-pointer focus:outline-none pointer-events-auto flex items-center justify-center"
          >
            {/* Subtle interactive hover / pulse glow ring on the single seal */}
            <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/0 group-hover:border-[#D4AF37]/70 group-hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] transition-all duration-300 pointer-events-none" />
          </div>

          {/* "TOUCH SEAL TO OPEN" Interactive Action Button positioned below the seal */}
          <div
            role="button"
            tabIndex={0}
            onClick={handleOpenTrigger}
            onTouchStart={handleOpenTrigger}
            className="group absolute top-[64%] sm:top-[65%] left-1/2 -translate-x-1/2 z-50 cursor-pointer focus:outline-none pointer-events-auto"
          >
            <div className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#4A082F]/95 backdrop-blur-md border-2 border-[#D4AF37] shadow-[0_12px_28px_rgba(74,8,47,0.65)] flex items-center gap-2.5 group-hover:bg-[#5d040f] group-hover:border-[#F4E295] group-hover:scale-105 transition-all">
              <Sparkles className="w-4 h-4 text-[#F4E295] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold text-[#FFF5D6] tracking-[0.3em] uppercase drop-shadow-xs whitespace-nowrap">
                TOUCH SEAL TO OPEN
              </span>
              <Sparkles className="w-4 h-4 text-[#F4E295] animate-pulse" />
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
