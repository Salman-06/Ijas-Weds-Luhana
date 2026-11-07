import React from 'react';

interface MonogramSealSvgProps {
  className?: string;
  size?: number;
}

/**
 * Exact replica of the user's uploaded monogram seal (/assets/aistudio/monogram_LI_724c126a.svg):
 * - Circular maroon/burgundy disc (#4A082F / #5d040f)
 * - Concentric 24K gold foil trim ring
 * - Gold serif capital Roman "I" (#D8C99A / #D4AF37)
 * - Flowing white cursive ornamental script "L" (#FFFFFF / #F4F1F2) intertwining with "I"
 */
export default function MonogramSealSvg({ className = '', size = 200 }: MonogramSealSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 1200 1200"
      fill="none"
      className={`select-none drop-shadow-[0_12px_28px_rgba(74,8,47,0.55)] ${className}`}
      aria-label="Ijas and Luhana Monogram Seal (L and I)"
    >
      <defs>
        {/* Rich velvet burgundy radial gradient */}
        <radialGradient id="monogram-bg-disc" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#68103A" />
          <stop offset="55%" stopColor="#4A082F" />
          <stop offset="100%" stopColor="#2A031A" />
        </radialGradient>

        {/* Polished 24K gold foil gradient */}
        <linearGradient id="monogram-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2C6" />
          <stop offset="35%" stopColor="#E2CA8A" />
          <stop offset="70%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#A88218" />
        </linearGradient>

        {/* Outer shadow for the seal button */}
        <filter id="seal-drop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="16" stdDeviation="24" floodColor="#1F0212" floodOpacity="0.6" />
        </filter>
      </defs>

      {/* Main Maroon Circular Monogram Disc */}
      <circle cx="600" cy="600" r="570" fill="url(#monogram-bg-disc)" />

      {/* 24K Gold Foil Concentric Outer Ring Border */}
      <circle cx="600" cy="600" r="565" stroke="url(#monogram-gold)" strokeWidth="14" opacity="0.95" />
      <circle cx="600" cy="600" r="545" stroke="url(#monogram-gold)" strokeWidth="3" opacity="0.6" />
      <circle
        cx="600"
        cy="600"
        r="535"
        stroke="url(#monogram-gold)"
        strokeWidth="4"
        strokeDasharray="6 14"
        strokeLinecap="round"
        opacity="0.75"
      />

      {/* Gold Serif Capital Roman "I" - Exact vector path from user's SVG */}
      <path
        fill="url(#monogram-gold)"
        d="
          M 405,345
          C 472,345 535,345 600,345
          C 665,345 728,345 795,345
          L 795,359
          C 722,361 680,375 660,402
          C 645,422 640,453 640,500
          L 640,700
          C 640,747 645,778 660,798
          C 680,825 722,839 795,841
          L 795,855
          C 728,855 665,855 600,855
          C 535,855 472,855 405,855
          L 405,841
          C 478,839 520,825 540,798
          C 555,778 560,747 560,700
          L 560,500
          C 560,453 555,422 540,402
          C 520,375 478,361 405,359
          Z
        "
        filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.35))"
      />

      {/* Pure White Ornamental Script "L" - Exact single flowing vector from user's SVG */}
      <path
        d="
          M 455,448
          C 390,397 304,383 250,412
          C 203,437 196,482 222,523
          C 254,574 329,603 420,610
          C 486,615 552,604 612,578
          C 682,548 744,502 793,448
          C 842,394 878,335 878,283
          C 878,235 846,208 802,212
          C 752,216 705,261 668,315
          C 622,383 586,473 548,568
          C 508,667 468,759 411,824
          C 359,883 298,917 247,902
          C 202,889 180,854 191,819
          C 203,780 248,757 301,760
          C 354,763 405,791 456,817
          M 548,855
          C 615,873 689,895 756,893
          C 818,891 861,868 876,833
          C 888,806 879,778 864,756
        "
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="20"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="drop-shadow(0px 3px 6px rgba(0,0,0,0.4))"
      />

      {/* Finishing flourish stroke on the lower swirl */}
      <path
        d="M 864,756 C 879,779 889,807 876,833"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="14"
        strokeLinecap="round"
      />
    </svg>
  );
}
