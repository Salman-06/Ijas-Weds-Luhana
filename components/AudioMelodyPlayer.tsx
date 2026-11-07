'use client';

import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function AudioMelodyPlayer({ autoStart = false }: { autoStart?: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const isPlayingRef = useRef(false);
  const loopTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize or resume audio context and play royal harmonic arpeggios
  const playMelody = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      isPlayingRef.current = true;
      setIsPlaying(true);

      const ctx = audioCtxRef.current;
      // Gentle, soothing pentatonic wedding harp/flute notes (frequencies in Hz)
      const scale = [
        277.18, // C#4
        311.13, // D#4
        369.99, // F#4
        415.30, // G#4
        466.16, // A#4
        554.37, // C#5
        622.25, // D#5
        739.99, // F#5
      ];

      // A serene 16-step romantic melody pattern
      const pattern = [0, 2, 4, 3, 5, 4, 2, 1, 0, 3, 5, 7, 5, 4, 2, 0];
      let step = 0;

      const scheduleStep = () => {
        if (!isPlayingRef.current || !audioCtxRef.current) return;

        const now = ctx.currentTime;
        const noteFreq = scale[pattern[step % pattern.length]];

        // Soft bell/harp tone oscillator
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Dual oscillator for rich warmth
        const subOsc = ctx.createOscillator();
        const subGain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(noteFreq, now);

        subOsc.type = 'triangle';
        subOsc.frequency.setValueAtTime(noteFreq * 0.5, now);

        // Natural exponential decay envelope
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.045, now + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);

        subGain.gain.setValueAtTime(0, now);
        subGain.gain.linearRampToValueAtTime(0.02, now + 0.05);
        subGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

        // Simple stereo panner / filter for warmth
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1400, now);

        osc.connect(gain);
        subOsc.connect(subGain);
        gain.connect(filter);
        subGain.connect(filter);
        filter.connect(ctx.destination);

        osc.start(now);
        subOsc.start(now);
        osc.stop(now + 1.8);
        subOsc.stop(now + 1.4);

        step++;
        // Tempo: approx 550ms per gentle note
        loopTimeoutRef.current = setTimeout(scheduleStep, 520);
      };

      scheduleStep();
    } catch {
      // AudioContext policy fallback
    }
  };

  const stopMelody = () => {
    isPlayingRef.current = false;
    setIsPlaying(false);
    if (loopTimeoutRef.current) {
      clearTimeout(loopTimeoutRef.current);
      loopTimeoutRef.current = null;
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopMelody();
    } else {
      playMelody();
    }
  };

  useEffect(() => {
    if (autoStart) {
      const timer = setTimeout(() => {
        playMelody();
      }, 50);
      return () => {
        clearTimeout(timer);
        stopMelody();
      };
    }
    return () => {
      stopMelody();
    };
  }, [autoStart]);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={toggleMusic}
        type="button"
        title={isPlaying ? 'Pause Instrumental Music' : 'Play Instrumental Music'}
        className={`group flex items-center gap-2.5 px-3.5 py-2.5 rounded-full backdrop-blur-md transition-all duration-300 shadow-royal border ${
          isPlaying
            ? 'bg-[#5d040f]/90 text-[#F4E295] border-[#D4AF37]/50 shadow-gold-glow'
            : 'bg-white/90 text-[#5d040f] border-[#D4AF37]/30 hover:border-[#D4AF37]'
        }`}
      >
        <div className="relative flex items-center justify-center">
          {isPlaying ? (
            <div className="flex items-end gap-0.5 h-3.5 w-3.5">
              <span className="w-1 bg-[#F4E295] rounded-full animate-pulse h-3" />
              <span className="w-1 bg-[#F4E295] rounded-full animate-pulse h-2" />
              <span className="w-1 bg-[#F4E295] rounded-full animate-pulse h-3.5" />
            </div>
          ) : (
            <Music className="w-4 h-4 text-[#5d040f]" />
          )}
        </div>

        <span className="text-xs font-medium tracking-wide">
          {isPlaying ? 'Wedding Melody' : 'Play Music'}
        </span>

        <span className="text-xs opacity-75">
          {isPlaying ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
        </span>
      </button>
    </div>
  );
}
