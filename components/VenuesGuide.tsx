'use client';

import {
  Navigation,
  Car,
  Train,
  Plane,
  Sparkles,
} from 'lucide-react';

export default function VenuesGuide() {
  return (
    <section id="venues" className="py-20 px-4 max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#5d040f] font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Location &amp; Travel</span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-[#5d040f] font-semibold">
          Venues &amp; Directions
        </h2>
        <p className="text-sm md:text-base text-[#6B5B52] max-w-2xl mx-auto">
          We have arranged convenient celebration venues in Pollachi and Coimbatore with dedicated parking, easy transit access, and direct Google Maps navigation.
        </p>
      </div>

      {/* Main Venue Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Venue 1: Sri Kantha Mahal, Pollachi */}
        <div className="flex flex-col justify-between p-8 rounded-3xl bg-white border border-[#D4AF37]/50 shadow-royal">
          <div>
            <div className="flex items-center justify-between text-xs text-[#8A7968] mb-3">
              <span className="font-serif italic text-sm text-[#D4AF37]">
                Main Wedding Ceremony
              </span>
              <span>Sunday, 13 Dec 2026</span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#5d040f] mb-2">
              Sri Kantha Mahal
            </h3>
            <p className="text-sm text-[#4A3B32] font-medium mb-1">
              Coimbatore Main Road, Pollachi, Tamil Nadu
            </p>
            <p className="text-xs text-[#8A7968] mb-6">
              Prime arterial highway location with spacious guest parking, air-conditioned dining halls, and seamless accessibility.
            </p>

            {/* Travel tips */}
            <div className="space-y-2.5 pt-4 border-t border-[#F0E6D4] mb-6 text-xs text-[#5C4D44]">
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>By Road: Directly on Coimbatore–Pollachi Highway (NH 83).</span>
              </div>
              <div className="flex items-center gap-2">
                <Train className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>By Train: 10 mins from Pollachi Junction (POY); 40 km from Coimbatore Junction.</span>
              </div>
              <div className="flex items-center gap-2">
                <Plane className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>By Air: Coimbatore International Airport (CJB) ~ 45 km.</span>
              </div>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=Sri+Kantha+Mahal+Coimbatore+Main+Road+Pollachi"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#5d040f] text-white text-xs font-semibold hover:bg-[#7D1223] transition-colors shadow-sm cursor-pointer"
          >
            <Navigation className="w-4 h-4 text-[#F4E295]" />
            <span>Open Sri Kantha Mahal in Google Maps</span>
          </a>
        </div>

        {/* Venue 2: Divya Hall, Echanari, Coimbatore */}
        <div className="flex flex-col justify-between p-8 rounded-3xl bg-white border border-[#D4AF37]/50 shadow-royal">
          <div>
            <div className="flex items-center justify-between text-xs text-[#8A7968] mb-3">
              <span className="font-serif italic text-sm text-[#D4AF37]">
                Mehendi Celebration
              </span>
              <span>Saturday, 12 Dec 2026</span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#5d040f] mb-2">
              Divya Hall
            </h3>
            <p className="text-sm text-[#4A3B32] font-medium mb-1">
              Echanari, Opp Indane Gas Godown, Coimbatore, Tamil Nadu
            </p>
            <p className="text-xs text-[#8A7968] mb-6">
              Elegant banquet celebration hall with dedicated dining and convenient highway access for pre-wedding festivities.
            </p>

            {/* Travel tips */}
            <div className="space-y-2.5 pt-4 border-t border-[#F0E6D4] mb-6 text-xs text-[#5C4D44]">
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>By Road: Located at Echanari, directly opposite Indane Gas Godown on Pollachi Main Road.</span>
              </div>
              <div className="flex items-center gap-2">
                <Train className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>By Train: 12 mins from Podanur Junction; 20 mins from Coimbatore Junction (CBE).</span>
              </div>
              <div className="flex items-center gap-2">
                <Plane className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>By Air: Coimbatore International Airport (CJB) ~ 18 km.</span>
              </div>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/place/DIVYA+HALL/@10.930111,76.986022,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba85b5f19dafb93:0x3dcd66364b465897!8m2!3d10.930111!4d76.986022!16s%2Fg%2F11vkh343g6?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#5d040f] text-white text-xs font-semibold hover:bg-[#7D1223] transition-colors shadow-sm cursor-pointer"
          >
            <Navigation className="w-4 h-4 text-[#F4E295]" />
            <span>Open Divya Hall in Google Maps</span>
          </a>
        </div>
      </div>

      {/* Helper Note for Guests */}
      <div className="text-center text-xs text-[#8A7968] p-4 rounded-2xl bg-[#FFFBF2] border border-[#D4AF37]/30 max-w-2xl mx-auto">
        <span>💡 Need assistance with transport or landmark guidance? Contact the host family via the RSVP pass or helpline on your invitation card.</span>
      </div>
    </section>
  );
}
