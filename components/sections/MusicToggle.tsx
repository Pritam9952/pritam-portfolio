"use client";

import { useRef, useState } from "react";

import {
  Volume2,
  VolumeX,
} from "lucide-react";

export default function MusicToggle() {

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [playing, setPlaying] = useState(false);

  const toggleMusic = async () => {

    if (!audioRef.current) return;

    try {

      if (playing) {

        audioRef.current.pause();

        setPlaying(false);

      } else {

        audioRef.current.volume = 0.3;

        await audioRef.current.play();

        setPlaying(true);

      }

    } catch (err) {

      console.log("Music Error:", err);

    }
  };

  return (
    <>
      {/* Audio */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      {/* Button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-2xl border border-cyan-500/20 bg-black/40 backdrop-blur-xl flex items-center justify-center hover:bg-cyan-500 hover:text-black transition duration-500"
      >

        {playing ? (
          <Volume2 size={24} />
        ) : (
          <VolumeX size={24} />
        )}

      </button>
    </>
  );
}