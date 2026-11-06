'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import QRCode from 'qrcode';
import {
  Navigation,
  Car,
  Train,
  Plane,
  Sparkles,
  QrCode,
  Download,
  Copy,
  Check,
  ExternalLink,
  Smartphone,
} from 'lucide-react';
import { WEDDING_EVENTS, WeddingEvent } from '@/lib/wedding-data';

interface QrLocationItem {
  id: string;
  name: string;
  eventType: string;
  dateStr: string;
  venueName: string;
  address: string;
  city: string;
  mapUrl: string;
}

const QR_LOCATIONS: QrLocationItem[] = [
  {
    id: 'marriage',
    name: 'Marriage (Nikah) Ceremony',
    eventType: 'Nikah Solemnization',
    dateStr: 'Sunday, 13 Dec 2026 · 11:00 AM',
    venueName: 'Sri Kantha Mahal',
    address: 'Coimbatore Main Road',
    city: 'Pollachi, Tamil Nadu',
    mapUrl: 'https://maps.google.com/?q=Sri+Kantha+Mahal+Coimbatore+Main+Road+Pollachi',
  },
  {
    id: 'reception',
    name: 'Grand Wedding Reception',
    eventType: 'Reception Dinner',
    dateStr: 'Monday, 14 Dec 2026 · 6:30 PM',
    venueName: 'Lindes Garden',
    address: 'Madukkarai Road, Sundarapuram',
    city: 'Coimbatore - 641 105, Tamil Nadu',
    mapUrl: 'https://maps.google.com/?q=Lindes+Garden+Madukkarai+Road+Sundarapuram+Coimbatore+641105',
  },
  {
    id: 'mehendi',
    name: 'Mehendi & Sangeet',
    eventType: 'Henna & Haldi Celebration',
    dateStr: 'Saturday, 12 Dec 2026 · 6:00 PM',
    venueName: 'The Palm Enclave',
    address: 'Near Sundarapuram, Madukkarai Road',
    city: 'Coimbatore, Tamil Nadu',
    mapUrl: 'https://maps.google.com/?q=Sundarapuram+Coimbatore+Tamil+Nadu',
  },
];

export default function VenuesGuide() {
  const [qrCodeUrls, setQrCodeUrls] = useState<Record<string, string>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Generate QR codes for each location
  useEffect(() => {
    let isMounted = true;

    const generateCodes = async () => {
      const generated: Record<string, string> = {};
      for (const loc of QR_LOCATIONS) {
        try {
          const dataUrl = await QRCode.toDataURL(loc.mapUrl, {
            width: 320,
            margin: 2,
            color: {
              dark: '#5C101C', // Royal Burgundy tone matching the print card
              light: '#FFFFFF',
            },
            errorCorrectionLevel: 'H',
          });
          generated[loc.id] = dataUrl;
        } catch {
          // QR generation fallback
        }
      }

      if (isMounted) {
        setQrCodeUrls(generated);
      }
    };

    generateCodes();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleCopyLink = (id: string, url: string) => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(url);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  const handleDownloadQr = (id: string, name: string) => {
    const dataUrl = qrCodeUrls[id];
    if (!dataUrl) return;

    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = `QR_Location_${name.replace(/\s+/g, '_')}_Google_Maps.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="venues" className="py-20 px-4 max-w-6xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#721825] font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Location &amp; Travel</span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-[#4A0E17] font-semibold">
          Venues &amp; Directions
        </h2>
        <p className="text-sm md:text-base text-[#6B5B52] max-w-2xl mx-auto">
          We have arranged convenient celebration venues in Pollachi and Coimbatore with dedicated parking, easy transit access, and instant mobile QR navigation.
        </p>
      </div>

      {/* Main Venue Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Venue 1: Sri Kantha Mahal, Pollachi */}
        <div className="flex flex-col justify-between p-8 rounded-3xl bg-white border border-[#D4AF37]/50 shadow-royal">
          <div>
            <div className="flex items-center justify-between text-xs text-[#8A7968] mb-3">
              <span className="font-serif italic text-sm text-[#D4AF37]">
                Nikah / Marriage Venue
              </span>
              <span className="text-[11px] font-semibold text-[#721825] bg-[#FAF4E6] px-3 py-1 rounded-full">
                Sunday, 13 Dec 2026
              </span>
            </div>

            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#4A0E17] mb-2">
              Sri Kantha Mahal
            </h3>
            <p className="text-sm text-[#721825] font-medium mb-4">
              Coimbatore Main Road, Pollachi, Tamil Nadu
            </p>

            <p className="text-xs text-[#6B5B52] leading-relaxed mb-6">
              A grand, traditional marriage hall situated right on the main Coimbatore–Pollachi arterial highway. Equipped with centralized air conditioning, expansive banquet dining, and dedicated family parking.
            </p>

            {/* Travel tips */}
            <div className="space-y-2.5 pt-4 border-t border-[#F0E6D4] mb-6 text-xs text-[#5C4D44]">
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>By Road: Well connected on NH-83 Coimbatore to Pollachi stretch.</span>
              </div>
              <div className="flex items-center gap-2">
                <Train className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>By Train: 10 mins from Pollachi Railway Station; 45 mins from Podanur / Coimbatore.</span>
              </div>
              <div className="flex items-center gap-2">
                <Plane className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>By Air: Coimbatore International Airport (CJB) ~ 50 km.</span>
              </div>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=Sri+Kantha+Mahal+Coimbatore+Main+Road+Pollachi"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#721825] text-white text-xs font-semibold hover:bg-[#5C101C] transition-colors shadow-sm cursor-pointer"
          >
            <Navigation className="w-4 h-4 text-[#F4E295]" />
            <span>Open Sri Kantha Mahal in Google Maps</span>
          </a>
        </div>

        {/* Venue 2: Lindes Garden, Coimbatore */}
        <div className="flex flex-col justify-between p-8 rounded-3xl bg-white border border-[#D4AF37]/50 shadow-royal">
          <div>
            <div className="flex items-center justify-between text-xs text-[#8A7968] mb-3">
              <span className="font-serif italic text-sm text-[#D4AF37]">
                Grand Reception Venue
              </span>
              <span className="text-[11px] font-semibold text-[#721825] bg-[#FAF4E6] px-3 py-1 rounded-full">
                Monday, 14 Dec 2026
              </span>
            </div>

            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#4A0E17] mb-2">
              Lindes Garden
            </h3>
            <p className="text-sm text-[#721825] font-medium mb-4">
              Madukkarai Road, Sundarapuram, Coimbatore - 641 105
            </p>

            <p className="text-xs text-[#6B5B52] leading-relaxed mb-6">
              A scenic garden and luxury banquet setting located in Sundarapuram. Features ambient evening garden illumination, spacious stage photography setup, and grand buffet dining lawns.
            </p>

            {/* Travel tips */}
            <div className="space-y-2.5 pt-4 border-t border-[#F0E6D4] mb-6 text-xs text-[#5C4D44]">
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>By Road: Accessible directly on Madukkarai Road off Sundarapuram Junction.</span>
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
            href="https://maps.google.com/?q=Lindes+Garden+Madukkarai+Road+Sundarapuram+Coimbatore+641105"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#721825] text-white text-xs font-semibold hover:bg-[#5C101C] transition-colors shadow-sm cursor-pointer"
          >
            <Navigation className="w-4 h-4 text-[#F4E295]" />
            <span>Open Lindes Garden in Google Maps</span>
          </a>
        </div>
      </div>

      {/* NEW SECTION: Location QR Codes for Guest Navigation */}
      <div className="relative bg-[#FFFBF2] rounded-3xl border-2 border-[#D4AF37]/60 p-8 md:p-12 shadow-royal overflow-hidden">
        {/* Subtle gold ornamentation */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#D4AF37]/15 to-transparent rounded-bl-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#721825]/10 to-transparent rounded-tr-full pointer-events-none" />

        {/* Section Header */}
        <div className="text-center space-y-2 mb-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF4E6] border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-wider text-[#721825]">
            <QrCode className="w-4 h-4 text-[#D4AF37]" />
            <span>Scan &amp; Navigate · Just Like The Printed Card</span>
          </div>
          <h3 className="font-serif text-2xl md:text-4xl text-[#4A0E17] font-bold">
            Google Maps Location QR Codes
          </h3>
          <p className="text-xs md:text-sm text-[#6B5B52] max-w-xl mx-auto">
            Scan these QR codes directly with your smartphone camera to launch Google Maps turn-by-turn driving directions to each event venue.
          </p>
        </div>

        {/* QR Code Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {QR_LOCATIONS.map((loc) => {
            const qrImg = qrCodeUrls[loc.id];
            const isCopied = copiedId === loc.id;
            const isMarriage = loc.id === 'marriage';

            return (
              <div
                key={loc.id}
                className={`flex flex-col justify-between p-6 rounded-2xl bg-white border transition-all duration-300 hover:shadow-royal ${
                  isMarriage
                    ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/40 shadow-md'
                    : 'border-[#E8DCC9]'
                }`}
              >
                <div>
                  {/* Category Pill */}
                  <div className="flex items-center justify-between mb-3 text-[11px]">
                    <span className="font-semibold text-[#721825] uppercase tracking-wider">
                      {loc.eventType}
                    </span>
                    <span className="text-[#8A7968]">
                      {loc.dateStr.split('·')[0]}
                    </span>
                  </div>

                  {/* Title & Venue */}
                  <h4 className="font-serif text-xl font-bold text-[#4A0E17] mb-1">
                    {loc.venueName}
                  </h4>
                  <p className="text-xs text-[#6B5B52] mb-4">
                    {loc.address}, {loc.city}
                  </p>

                  {/* QR Code Box */}
                  <div className="relative mx-auto my-3 w-48 h-48 p-3 rounded-2xl bg-[#FFFDF9] border-2 border-[#D4AF37]/50 shadow-inner flex flex-col items-center justify-center group">
                    {qrImg ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={qrImg}
                          alt={`${loc.venueName} Google Maps QR Code`}
                          fill
                          unoptimized
                          className="object-contain rounded-lg"
                        />
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-xs text-[#8A7968]">
                        <QrCode className="w-10 h-10 animate-pulse text-[#D4AF37] mb-2" />
                        <span>Generating QR...</span>
                      </div>
                    )}
                  </div>

                  {/* Scan helper text */}
                  <div className="text-center my-3">
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-[#721825] font-medium">
                      <Smartphone className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Scan with Camera to Navigate</span>
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-3 border-t border-[#F0E6D4]">
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#721825] text-white text-xs font-semibold hover:bg-[#5C101C] transition-colors shadow-xs"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#F4E295]" />
                    <span>Open in Maps</span>
                  </a>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleDownloadQr(loc.id, loc.venueName)}
                      disabled={!qrImg}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg border border-[#D4AF37]/60 bg-white text-[#721825] text-xs font-medium hover:bg-[#FAF4E6] transition-colors disabled:opacity-50"
                      title="Download QR code image"
                    >
                      <Download className="w-3 h-3 text-[#D4AF37]" />
                      <span>Save QR</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleCopyLink(loc.id, loc.mapUrl)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg border border-[#E8DCC9] bg-white text-[#5C4D44] text-xs font-medium hover:bg-[#FAF4E6] transition-colors"
                      title="Copy Google Maps link"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-700 font-semibold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-[#8A7968]" />
                          <span>Copy Link</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Helper Note for Guests */}
        <div className="mt-8 text-center text-xs text-[#8A7968]">
          <span>💡 Need assistance with transport or landmark guidance? Contact the host family via the RSVP pass or helpline on your invitation card.</span>
        </div>
      </div>
    </section>
  );
}
