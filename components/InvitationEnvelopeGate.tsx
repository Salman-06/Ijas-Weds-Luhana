'use client';

import { useState } from 'react';
import { WEDDING_COUPLE } from '@/lib/wedding-data';

interface EnvelopeGateProps {
  onOpen: () => void;
}

export default function InvitationEnvelopeGate({ onOpen }: EnvelopeGateProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const handleOpenClick = () => {
    if (isOpen) return;
    setIsOpen(true);
    // Allow the 3D doors to swing open fully before unmounting
    setTimeout(() => {
      onOpen();
    }, 1100);
    setTimeout(() => {
      setIsDismissed(true);
    }, 1500);
  };

  if (isDismissed) return null;

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden select-none door-container bg-[#13070A] transition-opacity duration-700 ${
        isOpen ? 'pointer-events-none' : ''
      }`}
      aria-label="Open wedding invitation"
    >
      {/* 3D Double Doors */}
      <div className="relative w-full h-full flex">
        {/* Left Door */}
        <div
          className={`door-panel-left relative w-1/2 h-full bg-gradient-to-r from-[#2B0A11] via-[#4A0E17] to-[#360913] border-r border-[#D4AF37]/50 shadow-2xl flex flex-col justify-between p-6 md:p-12 ${
            isOpen ? 'open' : ''
          }`}
          style={{
            backgroundImage: `radial-gradient(circle at 100% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 60%), linear-gradient(180deg, #1A050B 0%, #4A0E17 50%, #1A050B 100%)`,
          }}
        >
          {/* Ornate Gold Filigree Molding - Left Door */}
          <div className="absolute inset-4 md:inset-8 border-2 border-[#D4AF37]/40 rounded-2xl pointer-events-none">
            <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]" />
            <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-6 h-24 border-r-2 border-[#D4AF37]/60" />
          </div>

          {/* Left Door Carved Arch Motif */}
          <div className="hidden sm:block absolute top-12 left-12 right-6 bottom-12 border border-[#D4AF37]/20 rounded-t-full pointer-events-none opacity-40" />

          {/* Left Handle */}
          <div className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-3 md:w-4 h-24 md:h-32 rounded-full bg-gradient-to-b from-[#ECC874] via-[#D4AF37] to-[#A8811C] shadow-lg border border-[#F4E295]/80 flex items-center justify-center">
            <div className="w-1 h-12 bg-[#5C101C]/60 rounded-full" />
          </div>
        </div>

        {/* Right Door */}
        <div
          className={`door-panel-right relative w-1/2 h-full bg-gradient-to-l from-[#2B0A11] via-[#4A0E17] to-[#360913] border-l border-[#D4AF37]/50 shadow-2xl flex flex-col justify-between p-6 md:p-12 ${
            isOpen ? 'open' : ''
          }`}
          style={{
            backgroundImage: `radial-gradient(circle at 0% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 60%), linear-gradient(180deg, #1A050B 0%, #4A0E17 50%, #1A050B 100%)`,
          }}
        >
          {/* Ornate Gold Filigree Molding - Right Door */}
          <div className="absolute inset-4 md:inset-8 border-2 border-[#D4AF37]/40 rounded-2xl pointer-events-none">
            <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]" />
            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]" />
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-6 h-24 border-l-2 border-[#D4AF37]/60" />
          </div>

          {/* Right Door Carved Arch Motif */}
          <div className="hidden sm:block absolute top-12 left-6 right-12 bottom-12 border border-[#D4AF37]/20 rounded-t-full pointer-events-none opacity-40" />

          {/* Right Handle */}
          <div className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-3 md:w-4 h-24 md:h-32 rounded-full bg-gradient-to-b from-[#ECC874] via-[#D4AF37] to-[#A8811C] shadow-lg border border-[#F4E295]/80 flex items-center justify-center">
            <div className="w-1 h-12 bg-[#5C101C]/60 rounded-full" />
          </div>
        </div>
      </div>

      {/* Atmospheric Golden Sparkles Layer */}
      <div className="absolute inset-0 pointer-events-none z-10" aria-hidden="true">
        <span className="sparkle-dot" style={{ left: '18%', top: '22%', animationDelay: '-0.3s' }} />
        <span className="sparkle-dot" style={{ left: '78%', top: '16%', animationDelay: '-1.4s' }} />
        <span className="sparkle-dot" style={{ left: '32%', top: '75%', animationDelay: '-0.7s' }} />
        <span className="sparkle-dot" style={{ left: '68%', top: '70%', animationDelay: '-2.1s' }} />
        <span className="sparkle-dot" style={{ left: '12%', top: '56%', animationDelay: '-1.2s' }} />
        <span className="sparkle-dot" style={{ left: '88%', top: '48%', animationDelay: '-2.5s' }} />
        <span className="sparkle-dot" style={{ left: '50%', top: '12%', animationDelay: '-1.8s' }} />
      </div>

      {/* Central Royal Interactive Touch Badge (Like Hari & Jayashree) */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-700 flex flex-col items-center justify-center ${
          isOpen ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'
        }`}
      >
        <button
          type="button"
          onClick={handleOpenClick}
          aria-label="Touch here to open royal wedding invitation"
          className="group relative flex flex-col items-center gap-3 p-6 md:p-8 rounded-3xl bg-[#23070E]/85 backdrop-blur-md border-2 border-[#D4AF37] shadow-2xl hover:border-[#F4E295] transition-all duration-300 cursor-pointer max-w-sm sm:max-w-md text-center"
        >
          {/* Subtle gold ambient glow */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#D4AF37]/30 via-[#ECC874]/40 to-[#D4AF37]/30 blur-md pointer-events-none" />

          {/* Spark Star */}
          <span className="text-[#F4E295] text-base">✦</span>

          {/* Arabic Bismillah */}
          <div className="font-arabic text-lg sm:text-xl text-[#F4E295] leading-relaxed">
            {WEDDING_COUPLE.bismillahArabic}
          </div>

          {/* Couple Script Names */}
          <div className="space-y-1">
            <span className="block font-serif text-2xl sm:text-3xl md:text-4xl text-[#FFF4C9] font-bold tracking-tight">
              {WEDDING_COUPLE.groom.fullName}
            </span>
            <span className="block text-[#F4C768] text-lg sm:text-xl">♥</span>
            <span className="block font-serif text-2xl sm:text-3xl md:text-4xl text-[#FFF4C9] font-bold tracking-tight">
              {WEDDING_COUPLE.bride.fullName}
            </span>
          </div>

          {/* Auspicious Dates */}
          <div className="text-[11px] sm:text-xs text-[#EED6D3] uppercase tracking-widest font-medium mt-1">
            12 · 13 · 14 December 2026
          </div>

          {/* Glowing Animated Tap Ring Icon */}
          <div className="mt-3 relative flex items-center justify-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#F4E295] bg-[#5C101C]/60 flex items-center justify-center animate-tap-pulse">
              <svg
                viewBox="0 0 64 64"
                className="w-7 h-7 sm:w-8 sm:h-8 text-[#FFE1A2]"
                role="img"
                aria-hidden="true"
              >
                <path
                  d="M31 52V31.5a3.5 3.5 0 0 1 7 0v8l2.5-2.5a3.5 3.5 0 0 1 5 0l2 2 1.5-1.5a3.5 3.5 0 0 1 5 0l1 1a8 8 0 0 1 2.3 6.7L56 52c-.8 6-5.5 10-11.5 10H36c-5.8 0-10.7-3.8-12.4-9.3l-4.2-13.2a3.8 3.8 0 0 1 7.2-2.3l4.4 9.2V21a3.5 3.5 0 0 1 7 0v14.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 16c0-7 5.4-12 12-12s12 5 12 12M13 19C13 8.5 21.5 0 32 0s19 8.5 19 19"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.75"
                />
              </svg>
            </div>
          </div>

          {/* Action text */}
          <small className="block text-[11px] font-bold text-[#FFF1C5] tracking-[0.2em] uppercase mt-1">
            TOUCH HERE TO OPEN
          </small>
        </button>
      </div>
    </div>
  );
}
