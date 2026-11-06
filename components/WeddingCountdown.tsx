'use client';

import { useState, useEffect } from 'react';
import { Calendar, Clock, BellRing, Sparkles } from 'lucide-react';
import { WEDDING_EVENTS } from '@/lib/wedding-data';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export default function WeddingCountdown() {
  const [selectedEventId, setSelectedEventId] = useState<string>('marriage');
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  const activeEvent = WEDDING_EVENTS.find((e) => e.id === selectedEventId) || WEDDING_EVENTS[1];

  useEffect(() => {
    const calculateTime = () => {
      const targetTime = new Date(activeEvent.dateIso).getTime();
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [activeEvent.dateIso]);

  // Generate Google Calendar Link
  const getGoogleCalendarUrl = () => {
    const startDate = new Date(activeEvent.dateIso);
    const endDate = new Date(startDate.getTime() + 3 * 60 * 60 * 1000); // 3 hours duration
    const formatGDate = (d: Date) => d.toISOString().replace(/-|:|\.\d\d\d/g, '');
    const title = encodeURIComponent(activeEvent.calendarTitle);
    const details = encodeURIComponent(
      `${activeEvent.description}\n\nCouple: A. Ijas Ahamed & J. Luhana Fathima\nVenue: ${activeEvent.venueName}, ${activeEvent.address}`
    );
    const location = encodeURIComponent(`${activeEvent.venueName}, ${activeEvent.address}, ${activeEvent.city}`);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${formatGDate(startDate)}/${formatGDate(endDate)}&details=${details}&location=${location}`;
  };

  // Generate downloadable ICS file
  const downloadIcs = () => {
    const startDate = new Date(activeEvent.dateIso);
    const endDate = new Date(startDate.getTime() + 3 * 60 * 60 * 1000);
    const formatIcsDate = (d: Date) => d.toISOString().replace(/-|:|\.\d\d\d/g, '');

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Ijas and Luhana Wedding//EN',
      'BEGIN:VEVENT',
      `UID:${activeEvent.id}-wedding-${Date.now()}@bel0ved-ijas-luhana.wedding`,
      `DTSTAMP:${formatIcsDate(new Date())}`,
      `DTSTART:${formatIcsDate(startDate)}`,
      `DTEND:${formatIcsDate(endDate)}`,
      `SUMMARY:${activeEvent.calendarTitle}`,
      `DESCRIPTION:${activeEvent.description.replace(/\n/g, '\\n')}`,
      `LOCATION:${activeEvent.venueName}, ${activeEvent.address}, ${activeEvent.city}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${activeEvent.id}-ijas-luhana-wedding.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="countdown" className="relative py-16 px-4 max-w-5xl mx-auto">
      {/* Decorative Islamic Arch frame styling */}
      <div className="relative bg-[#FFFBF2] rounded-3xl border border-[#D4AF37]/40 p-8 md:p-12 shadow-royal overflow-hidden">
        {/* Corner filigree accents */}
        <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]/60 pointer-events-none" />
        <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]/60 pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]/60 pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]/60 pointer-events-none" />

        {/* Section kicker */}
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#721825] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Counting Down The Moments</span>
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-[#4A0E17] font-semibold">
            Until We Celebrate Together
          </h2>
          <p className="text-sm md:text-base text-[#6B5B52] max-w-xl mx-auto">
            Every passing second brings us closer to the sacred union. Select an event below to view its personalized countdown.
          </p>
        </div>

        {/* Event Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {WEDDING_EVENTS.map((event) => {
            const isSelected = selectedEventId === event.id;
            return (
              <button
                key={event.id}
                type="button"
                onClick={() => setSelectedEventId(event.id)}
                className={`px-4 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#721825] text-[#FAF6F0] shadow-md shadow-[#721825]/20 ring-2 ring-[#D4AF37]'
                    : 'bg-white text-[#5C4D44] border border-[#E8DCC9] hover:border-[#D4AF37] hover:text-[#721825]'
                }`}
              >
                {event.name}
              </button>
            );
          })}
        </div>

        {/* Countdown Timer Display */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto mb-8">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-5 md:p-7 rounded-2xl bg-white border border-[#E8D7B8] shadow-sm relative overflow-hidden group hover:border-[#D4AF37] transition-all"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gold-gradient opacity-80" />
              <span className="font-serif text-4xl md:text-5xl font-bold text-[#721825] tabular-nums tracking-tight">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="mt-1.5 text-xs font-medium uppercase tracking-wider text-[#8A7968]">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Event Detail Summary Strip */}
        <div className="bg-[#FAF4E6] rounded-2xl p-4 md:p-6 border border-[#E0D0B6] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-[#721825]/10 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5 text-[#721825]" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#4A0E17]">
                {activeEvent.name} · {activeEvent.dateStr}
              </div>
              <div className="text-xs text-[#7A6A5E] flex items-center gap-1.5 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{activeEvent.timeStr}</span>
                <span>•</span>
                <span>{activeEvent.venueName}, {activeEvent.city}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full md:w-auto justify-end">
            <button
              onClick={downloadIcs}
              type="button"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-[#721825] bg-white border border-[#D4AF37]/50 rounded-lg hover:bg-[#FDF9EE] transition-colors"
            >
              <BellRing className="w-3.5 h-3.5" />
              Download .ICS
            </button>
            <a
              href={getGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-white bg-[#721825] rounded-lg hover:bg-[#5C101C] transition-colors shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-[#F4E295]" />
              Add to Google Calendar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
