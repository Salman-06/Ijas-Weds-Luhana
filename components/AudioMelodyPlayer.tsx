'use client';

import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

const NASHEED_SRC = '/assets/aistudio/NASHEED_Jamal-ul-wujood_a19055cb.mp3';

export default function AudioMelodyPlayer({ autoStart = false }: { autoStart?: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playMusic = () => {
    if (!audioRef.current) return;
    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        // Autoplay policy fallback
        setIsPlaying(false);
      });
  };

  const pauseMusic = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  };

  useEffect(() => {
    if (autoStart) {
      const timer = setTimeout(() => {
        playMusic();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [autoStart]);

  return (
    <div className="fixed bottom-6 right-6 z-40 select-none">
      {/* Hidden background audio element for the nasheed track */}
      <audio
        ref={audioRef}
        src={NASHEED_SRC}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <button
        onClick={toggleMusic}
        type="button"
        title={isPlaying ? 'Pause Nasheed (Jamal-ul-Wujood)' : 'Play Nasheed (Jamal-ul-Wujood)'}
        className={`group flex items-center gap-2.5 px-4 py-2.5 rounded-full backdrop-blur-md transition-all duration-300 shadow-royal border cursor-pointer ${
          isPlaying
            ? 'bg-[#5d040f]/95 text-[#F4E295] border-[#D4AF37]/60 shadow-gold-glow scale-102'
            : 'bg-white/95 text-[#5d040f] border-[#D4AF37]/35 hover:border-[#D4AF37] hover:bg-[#FAF6F0]'
        }`}
      >
        <div className="relative flex items-center justify-center">
          {isPlaying ? (
            <div className="flex items-end gap-0.5 h-3.5 w-3.5" aria-hidden="true">
              <span className="w-1 bg-[#F4E295] rounded-full animate-pulse h-3" />
              <span className="w-1 bg-[#F4E295] rounded-full animate-pulse h-2" />
              <span className="w-1 bg-[#F4E295] rounded-full animate-pulse h-3.5" />
            </div>
          ) : (
            <Music className="w-4 h-4 text-[#5d040f]" />
          )}
        </div>

        <span className="text-xs font-semibold tracking-wide">
          {isPlaying ? 'Jamal-ul-Wujood' : 'Play Nasheed'}
        </span>

        <span className="text-xs opacity-80">
          {isPlaying ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
        </span>
      </button>
    </div>
  );
}

