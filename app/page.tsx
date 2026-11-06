'use client';

import { useState } from 'react';
import WeddingHeader from '@/components/WeddingHeader';
import WeddingHero from '@/components/WeddingHero';
import WeddingCountdown from '@/components/WeddingCountdown';
import EventsItinerary from '@/components/EventsItinerary';
import SpiritualVerses from '@/components/SpiritualVerses';
import VenuesGuide from '@/components/VenuesGuide';
import WeddingFooter from '@/components/WeddingFooter';
import AudioMelodyPlayer from '@/components/AudioMelodyPlayer';
import InvitationEnvelopeGate from '@/components/InvitationEnvelopeGate';
import ScrollReveal from '@/components/ScrollReveal';
import GoldenPetalsRain from '@/components/GoldenPetalsRain';

export default function WeddingPage() {
  const [isGateOpened, setIsGateOpened] = useState(false);

  const handleOpenGate = () => {
    setIsGateOpened(true);
  };

  return (
    <div className="min-h-screen bg-arabesque-pattern relative flex flex-col">
      {/* 3D Royal Palace Doors Opening Animation (Inspired by Hari & Jayashree) */}
      <InvitationEnvelopeGate onOpen={handleOpenGate} />

      {/* Subtle Falling Golden Petals & Sparkles Ambient Effect */}
      <GoldenPetalsRain />

      {/* Floating Audio Ambient Melody Player */}
      <AudioMelodyPlayer autoStart={isGateOpened} />

      {/* Top Navigation Bar */}
      <WeddingHeader />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <ScrollReveal threshold={0.05}>
          <WeddingHero />
        </ScrollReveal>

        {/* Live Date Counting & Countdown Timer */}
        <ScrollReveal threshold={0.1}>
          <WeddingCountdown />
        </ScrollReveal>

        {/* Ceremonies Itinerary (Mehendi, Marriage / Nikah, Reception) */}
        <ScrollReveal threshold={0.1}>
          <EventsItinerary />
        </ScrollReveal>

        {/* Divine Spiritual Verses & Tamil Invocations */}
        <ScrollReveal threshold={0.1}>
          <SpiritualVerses />
        </ScrollReveal>

        {/* Venues & Travel Directions Guide with QR Codes */}
        <ScrollReveal threshold={0.1}>
          <VenuesGuide />
        </ScrollReveal>
      </main>

      {/* Footer with Family Compliments */}
      <ScrollReveal threshold={0.05}>
        <WeddingFooter />
      </ScrollReveal>
    </div>
  );
}
