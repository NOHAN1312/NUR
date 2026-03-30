'use client';

import React, { useState, useRef } from 'react';
import { Play, Pause, Loader2 } from 'lucide-react';

export default function QuoteAudioPlayer({ reference }: { reference: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Check if it's a Quranic Surah reference to decide whether to render the play button.
  // Example reference: "Surah Al-'Ankabut, 29:45" or "Surah At-Talaq, 65:2-3"
  const surahMatch = reference.match(/Surah.*?,?\s*(\d+):(\d+)/i);
  if (!surahMatch) return null; // Do not render for Hadiths

  const surahNumber = surahMatch[1];
  const ayahNumber = surahMatch[2]; // If range like "2-3", it just picks "2", which is fine

  const togglePlay = async () => {
    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
      return;
    }

    // First time playing -> Fetch specific Ayah audio URL from AlQuranCloud API
    setIsLoading(true);
    try {
      const res = await fetch(`https://api.alquran.cloud/v1/ayah/${surahNumber}:${ayahNumber}/ar.alafasy`);
      const data = await res.json();
      const audioUrl = data.data?.audio;
      
      if (audioUrl) {
        const audio = new Audio(audioUrl);
        audioRef.current = audio;
        
        audio.onended = () => setIsPlaying(false);
        
        await audio.play();
        setIsPlaying(true);
      } else {
        console.warn("No audio found for this Ayah.");
      }
    } catch (e) {
      console.error("Failed to fetch/play recitation", e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={togglePlay}
      disabled={isLoading}
      className={`p-2.5 rounded-full bg-white/5 transition-all outline-none flex items-center justify-center mr-3 border ${
        isPlaying || isLoading
          ? 'border-[#00E5FF]/40 text-[#00E5FF] bg-[#00E5FF]/20 shadow-[0_0_15px_rgba(0,229,255,0.3)]'
          : 'border-white/10 hover:border-[#00E5FF]/40 text-white/60 hover:text-[#00E5FF] hover:bg-[#00E5FF]/10'
      }`}
      title="Play Recitation (Mishary Rashid Alafasy)"
      aria-label="Play Recitation"
    >
      {isLoading ? (
        <Loader2 size={18} className="animate-spin text-[#00E5FF]" />
      ) : isPlaying ? (
        <Pause size={18} className="text-[#00E5FF]" />
      ) : (
        <Play size={18} />
      )}
    </button>
  );
}
