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

export default function WeddingExperience() {
  const [isGateOpen, setIsGateOpen] = useState(false);
  const [isGateFadingOut, setIsGateFadingOut] = useState(false);
  const [isGateDismissed, setIsGateDismissed] = useState(false);
  const [isMusicStarted, setIsMusicStarted] = useState(false);

  const handleOpenGate = () => {
    setIsGateOpen(true);
    setIsMusicStarted(true);
    // Allow the 3D doors to smoothly swing open and reveal the inner parchment card
    setTimeout(() => {
      setIsGateFadingOut(true);
    }, 1200);
    setTimeout(() => {
      setIsGateDismissed(true);
    }, 1750);
  };

  const handleSkipGate = () => {
    setIsGateOpen(true);
    setIsGateFadingOut(true);
    setIsGateDismissed(true);
    setIsMusicStarted(true);
  };

  const handleReplayGate = () => {
    setIsGateDismissed(false);
    setIsGateFadingOut(false);
    setIsGateOpen(false);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-arabesque-pattern relative flex flex-col">
      {/* 3D Realistic Gatefold Card Opening Experience */}
      <InvitationEnvelopeGate
        isOpen={isGateOpen}
        isFadingOut={isGateFadingOut}
        isDismissed={isGateDismissed}
        onOpen={handleOpenGate}
        onSkip={handleSkipGate}
      />

      {/* Subtle Falling Golden Petals & Sparkles Ambient Effect */}
      <GoldenPetalsRain />

      {/* Floating Audio Ambient Melody Player */}
      <AudioMelodyPlayer autoStart={isMusicStarted} />

      {/* Top Navigation Bar with View Card Replay */}
      <WeddingHeader onReplayCard={handleReplayGate} />

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

        {/* Venues & Travel Directions Guide */}
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
