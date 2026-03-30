'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    let audio: HTMLAudioElement;
    try {
      // Load user-provided background audio
      audio = new Audio('/audio/audio.m4a');
      audio.loop = true;
      audio.volume = 0.4; // Subtle background volume
      audioRef.current = audio;
    } catch (e) {
      console.warn('Audio initialization failed', e);
    }

    return () => {
      if (audio) {
        audio.pause();
        audio.src = '';
      }
    };
  }, []);

  const toggleMute = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Audio playback blocked or file not found.", err);
        setIsPlaying(false);
      });
    }
  };

  return (
    <button
      onClick={toggleMute}
      className={`relative flex items-center justify-center p-3 rounded-full transition-all duration-500 overflow-hidden ${
        isPlaying 
          ? 'bg-[#00E5FF]/20 text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.4)] border border-[#00E5FF]/40' 
          : 'bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 hover:text-white'
      }`}
      aria-label="Toggle ambient sound"
      title="Toggle Ambient Audio"
    >
      {isPlaying ? (
        <Volume2 size={18} className="relative z-10" />
      ) : (
        <VolumeX size={18} className="relative z-10" />
      )}
      
      {isPlaying && (
        <div className="absolute inset-0 bg-[#00E5FF]/30 animate-pulse pointer-events-none rounded-full" />
      )}
    </button>
  );
}
