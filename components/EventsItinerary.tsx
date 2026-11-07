'use client';

import { useState } from 'react';
import { Calendar, Clock, MapPin, Navigation, Sparkles, Shirt } from 'lucide-react';
import { WEDDING_EVENTS, WeddingEvent } from '@/lib/wedding-data';

export default function EventsItinerary() {
  const [filter, setFilter] = useState<'all' | 'mehendi' | 'marriage'>('all');

  const filteredEvents =
    filter === 'all'
      ? WEDDING_EVENTS
      : WEDDING_EVENTS.filter((e) => e.type === filter);

  return (
    <section id="itinerary" className="py-20 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#5d040f] font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Sacred Celebrations</span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-[#5d040f] font-semibold">
          Wedding Events Itinerary
        </h2>
        <p className="text-sm md:text-base text-[#6B5B52] max-w-2xl mx-auto">
          We invite you to grace each sacred ceremony with your presence and warm du&apos;as.
          Explore the celebration timings, venue locations, and dress inspirations below.
        </p>

        {/* Interactive Filter Tabs */}
        <div className="inline-flex items-center p-1.5 bg-[#F0E6D4]/70 rounded-full border border-[#D4AF37]/30 mt-4">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-4 py-1.5 text-xs md:text-sm font-medium rounded-full transition-all ${
              filter === 'all'
                ? 'bg-[#5d040f] text-white shadow-sm'
                : 'text-[#6B5B52] hover:text-[#5d040f]'
            }`}
          >
            All Celebrations
          </button>
          <button
            type="button"
            onClick={() => setFilter('mehendi')}
            className={`px-4 py-1.5 text-xs md:text-sm font-medium rounded-full transition-all ${
              filter === 'mehendi'
                ? 'bg-[#5d040f] text-white shadow-sm'
                : 'text-[#6B5B52] hover:text-[#5d040f]'
            }`}
          >
            Mehendi Alone
          </button>
          <button
            type="button"
            onClick={() => setFilter('marriage')}
            className={`px-4 py-1.5 text-xs md:text-sm font-medium rounded-full transition-all ${
              filter === 'marriage'
                ? 'bg-[#5d040f] text-white shadow-sm'
                : 'text-[#6B5B52] hover:text-[#5d040f]'
            }`}
          >
            Marriage (Nikah) Alone
          </button>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
        {filteredEvents.map((event: WeddingEvent, index: number) => {
          const isMarriage = event.type === 'marriage';
          const isMehendi = event.type === 'mehendi';

          return (
            <div
              key={event.id}
              className={`relative flex flex-col justify-between rounded-3xl p-6 md:p-8 bg-white border transition-all duration-300 hover:shadow-royal ${
                isMarriage
                  ? 'border-[#D4AF37] ring-1 ring-[#D4AF37]/50 shadow-md bg-gradient-to-b from-[#FFFDF9] to-white'
                  : 'border-[#E8DCC9]'
              }`}
            >
              {/* Highlight ribbon for marriage */}
              {isMarriage && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#D4AF37] via-[#ECC874] to-[#A8811C] text-[#3D1A0A] font-semibold text-[11px] uppercase tracking-wider rounded-full shadow-sm">
                  Sacred Nikah Solemnization
                </div>
              )}

              {isMehendi && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#15803D] text-[#FEF08A] font-semibold text-[11px] uppercase tracking-wider rounded-full shadow-sm">
                  Henna &amp; Haldi Ceremony
                </div>
              )}

              <div>
                {/* Event Index & Tamil title */}
                <div className="flex items-center justify-between text-xs text-[#8A7968] mb-3">
                  <span className="font-serif italic text-sm text-[#D4AF37]">
                    0{index + 1}. Event
                  </span>
                  <span className="text-[11px] font-medium text-[#5d040f] bg-[#FAF4E6] px-2.5 py-0.5 rounded-full">
                    {event.tamilName}
                  </span>
                </div>

                {/* Event Name */}
                <h3 className="font-serif text-2xl font-bold text-[#5d040f] mb-2 leading-tight">
                  {event.name}
                </h3>

                {/* Date & Hijri */}
                <div className="space-y-1.5 mb-6 text-sm text-[#5C4D44]">
                  <div className="flex items-center gap-2 font-medium text-[#5d040f]">
                    <Calendar className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>{event.dateStr}</span>
                  </div>
                  {event.hijriDate && (
                    <div className="text-xs text-[#947864] pl-6 font-arabic">
                      {event.hijriDate}
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-xs text-[#5C4D44] pl-6">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span>{event.timeStr}</span>
                  </div>
                </div>

                {/* Venue Details */}
                <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#E8DCC9] mb-5 space-y-1">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#5d040f] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-[#5d040f]">
                        {event.venueName}
                      </div>
                      <div className="text-xs text-[#6B5B52] leading-relaxed">
                        {event.address}
                      </div>
                      <div className="text-xs font-medium text-[#5d040f] mt-0.5">
                        {event.city}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-[#6B5B52] leading-relaxed mb-5">
                  {event.description}
                </p>

                {/* Dress Code Inspiration */}
                <div className="pt-4 border-t border-[#F0E6D4] mb-6">
                  <div className="flex items-center gap-1.5 text-xs text-[#5d040f] font-medium mb-2">
                    <Shirt className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Dress Code Suggestion:</span>
                  </div>
                  <div className="text-xs text-[#6B5B52] mb-2">
                    {event.dressCode}
                  </div>
                  <div className="flex items-center gap-1.5">
                    {event.paletteColors.map((color, i) => (
                      <span
                        key={i}
                        className="w-4 h-4 rounded-full border border-black/10 shadow-xs"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <a
                  href={event.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#5d040f] bg-white border border-[#D4AF37]/60 rounded-xl hover:bg-[#FAF4E6] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions on Google Maps</span>
                </a>

                <a
                  href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.calendarTitle)}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(`${event.venueName}, ${event.address}, ${event.city}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl transition-all shadow-sm ${
                    isMarriage
                      ? 'bg-[#5d040f] text-white hover:bg-[#7D1223]'
                      : 'bg-[#5C4D44] text-white hover:bg-[#43362E]'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5 text-[#F4E295]" />
                  <span>Add to Calendar</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
