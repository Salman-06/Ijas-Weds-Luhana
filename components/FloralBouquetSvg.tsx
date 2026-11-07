import React from 'react';

interface FloralBouquetSvgProps {
  type: 'top-right' | 'bottom-left' | 'center-flank-left' | 'center-flank-right' | 'center-backdrop';
  className?: string;
}

/**
 * High-definition luxury vector botanical bouquets for the royal wedding card cover.
 * Pure code rendering with rich burgundy peonies (#5d040f), gold leaves, and eucalyptus botanicals.
 */
export default function FloralBouquetSvg({ type, className = '' }: FloralBouquetSvgProps) {
  if (type === 'top-right') {
    return (
      <svg
        viewBox="0 0 380 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none select-none ${className}`}
        aria-hidden="true"
      >
        <defs>
          {/* Peony petal burgundy gradients */}
          <linearGradient id="tr-peony-dark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#871A29" />
            <stop offset="45%" stopColor="#5d040f" />
            <stop offset="100%" stopColor="#2E0207" />
          </linearGradient>
          <linearGradient id="tr-peony-mid" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A62537" />
            <stop offset="50%" stopColor="#6E0B19" />
            <stop offset="100%" stopColor="#45030A" />
          </linearGradient>
          <linearGradient id="tr-peony-light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C43B4E" />
            <stop offset="60%" stopColor="#871A29" />
            <stop offset="100%" stopColor="#5d040f" />
          </linearGradient>
          <linearGradient id="tr-gold-leaf" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F9EBB2" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8A6D15" />
          </linearGradient>
          <linearGradient id="tr-emerald-leaf" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4E6D5B" />
            <stop offset="60%" stopColor="#284435" />
            <stop offset="100%" stopColor="#15271E" />
          </linearGradient>
          <radialGradient id="tr-peony-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E26577" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#5d040f" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#5d040f" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer Eucalyptus and Gold Foliage Sprigs */}
        <g opacity="0.95">
          {/* Gold sprigs radiating out */}
          <path
            d="M 380 0 C 330 30, 270 50, 220 90 C 190 115, 170 145, 140 180"
            stroke="url(#tr-gold-leaf)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Small gold leaves */}
          <path d="M 230 85 C 245 70, 270 75, 275 90 C 265 105, 240 100, 230 85 Z" fill="url(#tr-gold-leaf)" />
          <path d="M 200 110 C 215 95, 240 100, 245 115 C 235 130, 210 125, 200 110 Z" fill="url(#tr-gold-leaf)" />
          <path d="M 160 150 C 175 135, 200 140, 205 155 C 195 170, 170 165, 160 150 Z" fill="url(#tr-gold-leaf)" />
          <path d="M 135 185 C 145 175, 165 180, 168 192 C 160 202, 142 198, 135 185 Z" fill="url(#tr-gold-leaf)" />

          {/* Deep Emerald botanical leaves */}
          <path d="M 280 20 C 260 45, 255 80, 275 100 C 300 85, 305 50, 280 20 Z" fill="url(#tr-emerald-leaf)" />
          <path d="M 320 60 C 295 85, 300 120, 325 135 C 345 115, 340 80, 320 60 Z" fill="url(#tr-emerald-leaf)" />
          <path d="M 190 140 C 170 165, 175 195, 195 210 C 215 195, 210 165, 190 140 Z" fill="url(#tr-emerald-leaf)" />
        </g>

        {/* Secondary Rosebud (Top Left of cluster) */}
        <g transform="translate(180, 50)">
          <path d="M 40 40 C 20 25, 15 5, 35 -5 C 55 5, 50 25, 40 40 Z" fill="url(#tr-peony-light)" />
          <path d="M 35 38 C 25 22, 28 8, 42 2 C 52 12, 48 28, 35 38 Z" fill="url(#tr-peony-mid)" />
          <path d="M 38 35 C 32 25, 34 16, 42 12 C 48 18, 46 28, 38 35 Z" fill="url(#tr-peony-dark)" />
          {/* Calyx */}
          <path d="M 20 40 C 30 35, 45 42, 50 36 C 45 48, 30 52, 20 40 Z" fill="url(#tr-emerald-leaf)" />
        </g>

        {/* Main Luxurious Burgundy Peony Blossom */}
        <g transform="translate(240, 90)">
          {/* Outer Layer Petals */}
          <path d="M 0 0 C -45 -35, -75 10, -55 50 C -35 85, 15 75, 45 45 C 75 15, 45 -40, 0 0 Z" fill="url(#tr-peony-dark)" />
          
          <path d="M -20 -40 C -60 -25, -80 20, -50 60 C -10 95, 30 70, 60 30 C 80 -10, 25 -55, -20 -40 Z" fill="url(#tr-peony-mid)" opacity="0.9" />

          {/* Middle Petals Flaring with Velvet Highlights */}
          <path d="M -40 -10 C -70 5, -60 45, -30 65 C 10 80, 45 55, 50 20 C 55 -20, 0 -35, -40 -10 Z" fill="url(#tr-peony-dark)" />
          <path d="M -25 -25 C -50 -5, -45 35, -15 50 C 20 60, 45 35, 35 5 C 25 -25, -5 -35, -25 -25 Z" fill="url(#tr-peony-light)" />
          
          <path d="M -15 -15 C -35 0, -30 30, -5 40 C 20 45, 35 25, 25 0 C 15 -20, 0 -25, -15 -15 Z" fill="url(#tr-peony-mid)" />
          
          {/* Inner Petal Folds & Ruffles */}
          <path d="M -8 -8 C -22 2, -18 22, 0 28 C 18 30, 26 16, 16 0 C 8 -12, 0 -15, -8 -8 Z" fill="url(#tr-peony-light)" />
          <path d="M -3 -3 C -12 4, -10 16, 2 20 C 14 20, 18 10, 10 0 C 4 -7, 0 -8, -3 -3 Z" fill="url(#tr-peony-dark)" />

          {/* Golden Pistil / Stamen Sparkles in Heart */}
          <circle cx="2" cy="5" r="2.5" fill="#FFE58F" />
          <circle cx="-3" cy="2" r="1.8" fill="#D4AF37" />
          <circle cx="6" cy="8" r="1.6" fill="#FFF2B2" />
          <circle cx="0" cy="10" r="1.5" fill="#E5C368" />
          <circle cx="-5" cy="7" r="1.4" fill="#FFE58F" />
        </g>

        {/* Smaller Accompanying Peony (Closer to Corner) */}
        <g transform="translate(320, 30)">
          <path d="M -20 -15 C -45 5, -30 40, 0 45 C 30 45, 45 15, 30 -15 C 15 -35, -5 -30, -20 -15 Z" fill="url(#tr-peony-mid)" />
          <path d="M -12 -8 C -30 8, -20 30, 2 35 C 22 35, 32 12, 20 -8 C 10 -22, -2 -20, -12 -8 Z" fill="url(#tr-peony-light)" />
          <path d="M -5 -2 C -15 8, -8 22, 5 24 C 18 24, 22 8, 12 -2 C 5 -10, 0 -10, -5 -2 Z" fill="url(#tr-peony-dark)" />
          <circle cx="4" cy="8" r="1.8" fill="#FFE58F" />
          <circle cx="-1" cy="6" r="1.4" fill="#D4AF37" />
        </g>

        {/* Golden Petal Drops Floating Away */}
        <path d="M 120 220 C 128 210, 138 215, 136 226 C 130 236, 118 230, 120 220 Z" fill="#5d040f" />
        <path d="M 90 260 C 98 252, 106 256, 104 265 C 99 273, 89 268, 90 260 Z" fill="#7D1223" />
        <circle cx="150" cy="190" r="2.5" fill="#D4AF37" opacity="0.8" />
        <circle cx="110" cy="240" r="2" fill="#D4AF37" opacity="0.7" />
      </svg>
    );
  }

  if (type === 'bottom-left') {
    return (
      <svg
        viewBox="0 0 380 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none select-none ${className}`}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="bl-peony-dark" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#871A29" />
            <stop offset="45%" stopColor="#5d040f" />
            <stop offset="100%" stopColor="#2E0207" />
          </linearGradient>
          <linearGradient id="bl-peony-mid" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#A62537" />
            <stop offset="50%" stopColor="#6E0B19" />
            <stop offset="100%" stopColor="#45030A" />
          </linearGradient>
          <linearGradient id="bl-peony-light" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#C43B4E" />
            <stop offset="60%" stopColor="#871A29" />
            <stop offset="100%" stopColor="#5d040f" />
          </linearGradient>
          <linearGradient id="bl-gold-leaf" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#F9EBB2" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8A6D15" />
          </linearGradient>
          <linearGradient id="bl-emerald-leaf" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#4E6D5B" />
            <stop offset="60%" stopColor="#284435" />
            <stop offset="100%" stopColor="#15271E" />
          </linearGradient>
        </defs>

        {/* Botanical Sprigs Radiating Inward from Bottom-Left Corner */}
        <g opacity="0.95">
          <path
            d="M 0 340 C 50 310, 110 290, 160 250 C 190 225, 210 195, 240 160"
            stroke="url(#bl-gold-leaf)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path d="M 150 255 C 135 270, 110 265, 105 250 C 115 235, 140 240, 150 255 Z" fill="url(#bl-gold-leaf)" />
          <path d="M 180 230 C 165 245, 140 240, 135 225 C 145 210, 170 215, 180 230 Z" fill="url(#bl-gold-leaf)" />
          <path d="M 220 190 C 205 205, 180 200, 175 185 C 185 170, 210 175, 220 190 Z" fill="url(#bl-gold-leaf)" />
          <path d="M 245 155 C 235 165, 215 160, 212 148 C 220 138, 238 142, 245 155 Z" fill="url(#bl-gold-leaf)" />

          {/* Deep Emerald botanical leaves */}
          <path d="M 100 320 C 120 295, 125 260, 105 240 C 80 255, 75 290, 100 320 Z" fill="url(#bl-emerald-leaf)" />
          <path d="M 60 280 C 85 255, 80 220, 55 205 C 35 225, 40 260, 60 280 Z" fill="url(#bl-emerald-leaf)" />
          <path d="M 190 200 C 210 175, 205 145, 185 130 C 165 145, 170 175, 190 200 Z" fill="url(#bl-emerald-leaf)" />
        </g>

        {/* Secondary Rosebud (Bottom Right of cluster) */}
        <g transform="translate(160, 240)">
          <path d="M 0 0 C 20 15, 25 35, 5 45 C -15 35, -10 15, 0 0 Z" fill="url(#bl-peony-light)" />
          <path d="M 5 2 C 15 18, 12 32, -2 38 C -12 28, -8 12, 5 2 Z" fill="url(#bl-peony-mid)" />
          <path d="M 2 5 C 8 15, 6 24, -2 28 C -8 22, -6 12, 2 5 Z" fill="url(#bl-peony-dark)" />
          <path d="M 20 0 C 10 5, -5 -2, -10 4 C -5 -8, 10 -12, 20 0 Z" fill="url(#bl-emerald-leaf)" />
        </g>

        {/* Main Gorgeous Burgundy Peony Blossom */}
        <g transform="translate(140, 250)">
          <path d="M 0 0 C 45 35, 75 -10, 55 -50 C 35 -85, -15 -75, -45 -45 C -75 -15, -45 40, 0 0 Z" fill="url(#bl-peony-dark)" />
          <path d="M 20 40 C 60 25, 80 -20, 50 -60 C 10 -95, -30 -70, -60 -30 C -80 10, -25 55, 20 40 Z" fill="url(#bl-peony-mid)" opacity="0.9" />

          <path d="M 40 10 C 70 -5, 60 -45, 30 -65 C -10 -80, -45 -55, -50 -20 C -55 20, 0 35, 40 10 Z" fill="url(#bl-peony-dark)" />
          <path d="M 25 25 C 50 5, 45 -35, 15 -50 C -20 -60, -45 -35, -35 -5 C -25 25, 5 35, 25 25 Z" fill="url(#bl-peony-light)" />
          
          <path d="M 15 15 C 35 0, 30 -30, 5 -40 C -20 -45, -35 -25, -25 0 C -15 20, 0 25, 15 15 Z" fill="url(#bl-peony-mid)" />
          <path d="M 8 8 C 22 -2, 18 -22, 0 -28 C -18 -30, -26 -16, -16 0 C -8 12, 0 15, 8 8 Z" fill="url(#bl-peony-light)" />
          <path d="M 3 3 C 12 -4, 10 -16, -2 -20 C -14 -20, -18 -10, -10 0 C -4 7, 0 8, 3 3 Z" fill="url(#bl-peony-dark)" />

          {/* Golden pistils */}
          <circle cx="-2" cy="-5" r="2.5" fill="#FFE58F" />
          <circle cx="3" cy="-2" r="1.8" fill="#D4AF37" />
          <circle cx="-6" cy="-8" r="1.6" fill="#FFF2B2" />
          <circle cx="0" cy="-10" r="1.5" fill="#E5C368" />
          <circle cx="5" cy="-7" r="1.4" fill="#FFE58F" />
        </g>

        {/* Smaller Accompanying Peony (Closer to Corner) */}
        <g transform="translate(60, 310)">
          <path d="M 20 15 C 45 -5, 30 -40, 0 -45 C -30 -45, -45 -15, -30 15 C -15 35, 5 30, 20 15 Z" fill="url(#bl-peony-mid)" />
          <path d="M 12 8 C 30 -8, 20 -30, -2 -35 C -22 -35, -32 -12, -20 8 C -10 22, 2 20, 12 8 Z" fill="url(#bl-peony-light)" />
          <path d="M 5 2 C 15 -8, 8 -22, -5 -24 C -18 -24, -22 -8, -12 2 C -5 10, 0 10, 5 2 Z" fill="url(#bl-peony-dark)" />
          <circle cx="-4" cy="-8" r="1.8" fill="#FFE58F" />
          <circle cx="1" cy="-6" r="1.4" fill="#D4AF37" />
        </g>

        {/* Scattered Velvet Petals Floating Upward */}
        <path d="M 260 120 C 252 130, 242 125, 244 114 C 250 104, 262 110, 260 120 Z" fill="#5d040f" />
        <path d="M 290 80 C 282 88, 274 84, 276 75 C 281 67, 291 72, 290 80 Z" fill="#7D1223" />
        <circle cx="230" cy="150" r="2.5" fill="#D4AF37" opacity="0.8" />
        <circle cx="270" cy="100" r="2" fill="#D4AF37" opacity="0.7" />
      </svg>
    );
  }

  // Central floral backdrop fanning out behind the circular monogram seal
  return (
    <svg
      viewBox="0 0 680 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cntr-peony-dark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#871A29" />
          <stop offset="45%" stopColor="#5d040f" />
          <stop offset="100%" stopColor="#2E0207" />
        </linearGradient>
        <linearGradient id="cntr-peony-mid" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A62537" />
          <stop offset="50%" stopColor="#6E0B19" />
          <stop offset="100%" stopColor="#45030A" />
        </linearGradient>
        <linearGradient id="cntr-peony-light" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C43B4E" />
          <stop offset="60%" stopColor="#871A29" />
          <stop offset="100%" stopColor="#5d040f" />
        </linearGradient>
        <linearGradient id="cntr-gold-leaf" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F9EBB2" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8A6D15" />
        </linearGradient>
        <linearGradient id="cntr-emerald-leaf" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4E6D5B" />
          <stop offset="60%" stopColor="#284435" />
          <stop offset="100%" stopColor="#15271E" />
        </linearGradient>
      </defs>

      {/* LEFT WING - Flanking the center seal to the left */}
      <g>
        {/* Golden botanical tendrils branching to left */}
        <path
          d="M 300 160 C 240 150, 180 130, 110 155 C 60 170, 30 190, 0 210"
          stroke="url(#cntr-gold-leaf)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path d="M 210 145 C 190 120, 160 125, 155 145 C 170 160, 200 155, 210 145 Z" fill="url(#cntr-gold-leaf)" />
        <path d="M 140 155 C 120 135, 95 140, 90 160 C 105 170, 130 168, 140 155 Z" fill="url(#cntr-gold-leaf)" />
        <path d="M 60 185 C 45 170, 25 180, 20 195 C 35 205, 52 198, 60 185 Z" fill="url(#cntr-gold-leaf)" />

        {/* Deep emerald foliage on left */}
        <path d="M 230 170 C 200 195, 195 230, 220 245 C 245 230, 245 195, 230 170 Z" fill="url(#cntr-emerald-leaf)" />
        <path d="M 160 160 C 135 185, 140 215, 165 225 C 185 210, 180 180, 160 160 Z" fill="url(#cntr-emerald-leaf)" />
        <path d="M 250 110 C 220 95, 205 125, 225 145 C 245 140, 255 120, 250 110 Z" fill="url(#cntr-emerald-leaf)" />

        {/* Peony Blossom Left Flank (Centered around x=190, y=160) */}
        <g transform="translate(190, 160)">
          <path d="M 0 0 C -40 -30, -65 10, -45 45 C -25 75, 15 65, 40 40 C 65 15, 35 -35, 0 0 Z" fill="url(#cntr-peony-dark)" />
          <path d="M -15 -35 C -50 -20, -70 20, -40 55 C -10 80, 25 60, 50 25 C 65 -10, 20 -45, -15 -35 Z" fill="url(#cntr-peony-mid)" opacity="0.9" />
          <path d="M -30 -10 C -55 5, -50 40, -25 55 C 5 70, 35 50, 40 20 C 45 -15, 0 -30, -30 -10 Z" fill="url(#cntr-peony-dark)" />
          <path d="M -20 -20 C -40 -5, -35 30, -10 40 C 15 50, 35 30, 28 5 C 20 -20, -5 -30, -20 -20 Z" fill="url(#cntr-peony-light)" />
          <path d="M -12 -12 C -28 0, -24 24, -4 32 C 16 35, 28 20, 20 0 C 12 -16, 0 -20, -12 -12 Z" fill="url(#cntr-peony-mid)" />
          <path d="M -6 -6 C -16 2, -14 16, 0 20 C 14 22, 20 12, 12 0 C 6 -10, 0 -12, -6 -6 Z" fill="url(#cntr-peony-light)" />
          <circle cx="2" cy="4" r="2.2" fill="#FFE58F" />
          <circle cx="-2" cy="1" r="1.6" fill="#D4AF37" />
          <circle cx="5" cy="7" r="1.4" fill="#FFF2B2" />
        </g>

        {/* Small Peony Bud Left */}
        <g transform="translate(100, 160)">
          <path d="M 0 0 C -20 -15, -30 10, -15 25 C 0 35, 20 25, 22 10 C 20 -5, 10 -15, 0 0 Z" fill="url(#cntr-peony-mid)" />
          <path d="M -5 -5 C -18 2, -12 18, 0 20 C 12 20, 15 8, 8 -2 C 2 -8, -2 -8, -5 -5 Z" fill="url(#cntr-peony-light)" />
          <path d="M -2 -2 C -10 2, -6 12, 0 14 C 8 14, 10 6, 4 -1 C 0 -5, -1 -5, -2 -2 Z" fill="url(#cntr-peony-dark)" />
        </g>
      </g>

      {/* RIGHT WING - Flanking the center seal to the right */}
      <g>
        {/* Golden botanical tendrils branching to right */}
        <path
          d="M 380 160 C 440 150, 500 130, 570 155 C 620 170, 650 190, 680 210"
          stroke="url(#cntr-gold-leaf)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path d="M 470 145 C 490 120, 520 125, 525 145 C 510 160, 480 155, 470 145 Z" fill="url(#cntr-gold-leaf)" />
        <path d="M 540 155 C 560 135, 585 140, 590 160 C 575 170, 550 168, 540 155 Z" fill="url(#cntr-gold-leaf)" />
        <path d="M 620 185 C 635 170, 655 180, 660 195 C 645 205, 628 198, 620 185 Z" fill="url(#cntr-gold-leaf)" />

        {/* Deep emerald foliage on right */}
        <path d="M 450 170 C 480 195, 485 230, 460 245 C 435 230, 435 195, 450 170 Z" fill="url(#cntr-emerald-leaf)" />
        <path d="M 520 160 C 545 185, 540 215, 515 225 C 495 210, 500 180, 520 160 Z" fill="url(#cntr-emerald-leaf)" />
        <path d="M 430 110 C 460 95, 475 125, 455 145 C 435 140, 425 120, 430 110 Z" fill="url(#cntr-emerald-leaf)" />

        {/* Peony Blossom Right Flank (Centered around x=490, y=160) */}
        <g transform="translate(490, 160)">
          <path d="M 0 0 C 40 -30, 65 10, 45 45 C 25 75, -15 65, -40 40 C -65 15, -35 -35, 0 0 Z" fill="url(#cntr-peony-dark)" />
          <path d="M 15 -35 C 50 -20, 70 20, 40 55 C 10 80, -25 60, -50 25 C -65 -10, -20 -45, 15 -35 Z" fill="url(#cntr-peony-mid)" opacity="0.9" />
          <path d="M 30 -10 C 55 5, 50 40, 25 55 C -5 70, -35 50, -40 20 C -45 -15, 0 -30, 30 -10 Z" fill="url(#cntr-peony-dark)" />
          <path d="M 20 -20 C 40 -5, 35 30, 10 40 C -15 50, -35 30, -28 5 C -20 -20, 5 -30, 20 -20 Z" fill="url(#cntr-peony-light)" />
          <path d="M 12 -12 C 28 0, 24 24, 4 32 C -16 35, -28 20, -20 0 C -12 -16, 0 -20, 12 -12 Z" fill="url(#cntr-peony-mid)" />
          <path d="M 6 -6 C 16 2, 14 16, 0 20 C -14 22, -20 12, -12 0 C -6 -10, 0 -12, 6 -6 Z" fill="url(#cntr-peony-light)" />
          <circle cx="-2" cy="4" r="2.2" fill="#FFE58F" />
          <circle cx="2" cy="1" r="1.6" fill="#D4AF37" />
          <circle cx="-5" cy="7" r="1.4" fill="#FFF2B2" />
        </g>

        {/* Small Peony Bud Right */}
        <g transform="translate(580, 160)">
          <path d="M 0 0 C 20 -15, 30 10, 15 25 C 0 35, -20 25, -22 10 C -20 -5, -10 -15, 0 0 Z" fill="url(#cntr-peony-mid)" />
          <path d="M 5 -5 C 18 2, 12 18, 0 20 C -12 20, -15 8, -8 -2 C -2 -8, 2 -8, 5 -5 Z" fill="url(#cntr-peony-light)" />
          <path d="M 2 -2 C 10 2, 6 12, 0 14 C -8 14, -10 6, -4 -1 C 0 -5, 1 -5, 2 -2 Z" fill="url(#cntr-peony-dark)" />
        </g>
      </g>
    </svg>
  );
}
