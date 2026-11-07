'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface PetalItem {
  id: number;
  left: number;
  width: number;
  height: number;
  duration: number;
  delay: number;
  rotate: number;
}

interface SparkleItem {
  id: number;
  left: number;
  duration: number;
  delay: number;
  size: number;
}

// Deterministic seed values to guarantee pure SSR / Client hydration consistency
const PETAL_SEEDS: PetalItem[] = [
  { id: 1, left: 6, width: 14, height: 18, duration: 9.2, delay: -2.4, rotate: 35 },
  { id: 2, left: 16, width: 11, height: 15, duration: 11.5, delay: -6.8, rotate: 120 },
  { id: 3, left: 24, width: 16, height: 21, duration: 8.8, delay: -1.2, rotate: 65 },
  { id: 4, left: 32, width: 12, height: 16, duration: 12.0, delay: -8.5, rotate: 190 },
  { id: 5, left: 41, width: 15, height: 20, duration: 9.8, delay: -4.3, rotate: 45 },
  { id: 6, left: 52, width: 13, height: 17, duration: 10.6, delay: -7.1, rotate: 145 },
  { id: 7, left: 62, width: 16, height: 22, duration: 8.5, delay: -3.6, rotate: 80 },
  { id: 8, left: 71, width: 11, height: 15, duration: 12.8, delay: -9.4, rotate: 210 },
  { id: 9, left: 81, width: 15, height: 19, duration: 9.5, delay: -5.2, rotate: 15 },
  { id: 10, left: 91, width: 12, height: 16, duration: 11.0, delay: -1.9, rotate: 160 },
  { id: 11, left: 12, width: 14, height: 18, duration: 10.2, delay: -4.8, rotate: 75 },
  { id: 12, left: 28, width: 10, height: 14, duration: 13.0, delay: -7.6, rotate: 230 },
  { id: 13, left: 47, width: 16, height: 20, duration: 9.0, delay: -2.9, rotate: 110 },
  { id: 14, left: 68, width: 12, height: 16, duration: 11.8, delay: -6.1, rotate: 50 },
  { id: 15, left: 86, width: 14, height: 19, duration: 8.9, delay: -3.8, rotate: 175 },
];

const SPARKLE_SEEDS: SparkleItem[] = [
  { id: 101, left: 10, duration: 7.2, delay: -1.5, size: 14 },
  { id: 102, left: 21, duration: 9.5, delay: -4.7, size: 12 },
  { id: 103, left: 37, duration: 8.0, delay: -6.2, size: 16 },
  { id: 104, left: 49, duration: 10.4, delay: -2.8, size: 11 },
  { id: 105, left: 59, duration: 7.8, delay: -5.4, size: 15 },
  { id: 106, left: 76, duration: 9.1, delay: -3.1, size: 13 },
  { id: 107, left: 89, duration: 8.4, delay: -6.9, size: 14 },
  { id: 108, left: 95, duration: 11.0, delay: -1.0, size: 12 },
];

export default function GoldenPetalsRain() {
  const [isEnabled, setIsEnabled] = useState(true);

  if (!isEnabled) {
    return (
      <div className="fixed bottom-6 left-6 z-40">
        <button
          type="button"
          onClick={() => setIsEnabled(true)}
          title="Enable Falling Petals"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#D4AF37]/40 text-[#5d040f] text-xs font-medium shadow-xs hover:bg-[#FAF6F0] transition-colors"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Petals: Off</span>
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Background Falling Petals & Sparkles Layer */}
      <div
        className="fixed inset-0 pointer-events-none z-15 overflow-hidden"
        aria-hidden="true"
      >
        {/* Golden Flower Petals */}
        {PETAL_SEEDS.map((p) => (
          <span
            key={p.id}
            className="petal-particle"
            style={{
              left: `${p.left}%`,
              width: `${p.width}px`,
              height: `${p.height}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              transform: `rotate(${p.rotate}deg)`,
            }}
          />
        ))}

        {/* Floating Sparkles */}
        {SPARKLE_SEEDS.map((s) => (
          <span
            key={s.id}
            className="sparkle-particle"
            style={{
              left: `${s.left}%`,
              fontSize: `${s.size}px`,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
            }}
          >
            ✦
          </span>
        ))}
      </div>

      {/* Discreet Subtle Effect Controller */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:block">
        <button
          type="button"
          onClick={() => setIsEnabled(false)}
          title="Pause Falling Petals"
          className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-[#D4AF37]/30 text-[#5d040f] text-xs font-medium opacity-60 hover:opacity-100 transition-all shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Golden Petals</span>
        </button>
      </div>
    </>
  );
}
