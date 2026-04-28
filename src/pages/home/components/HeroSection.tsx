import { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(28);
  const [volume, setVolume] = useState(75);
  const progressRef = useRef<HTMLDivElement>(null);
  const volumeRef = useRef<HTMLDivElement>(null);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current) return;
    const rect = progressRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    setProgress(pct);
  };

  const handleVolumeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!volumeRef.current) return;
    const rect = volumeRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    setVolume(pct);
  };

  return (
    <section className="relative w-full h-screen min-h-[680px] overflow-hidden flex flex-col">
      {/* Background */}
      <img
        src="https://static.readdy.ai/image/bd3e65a9c2956e637f2d341da068edd0/944c18d1fa3d83a747e487affb1ee507.png"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      {/* Subtle left gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
      {/* Bottom fade into player */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />

      {/* Main content — grows to fill, text at bottom-left */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-8 md:px-16 pb-6 w-full">
        {/* Tags */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 items-center">
          <span className="text-[#1ab8e8] text-xs font-bold tracking-widest uppercase">Bass DJ Artist</span>
          <span className="text-white/30 text-xs">•</span>
          <span className="text-white/60 text-xs font-semibold tracking-widest uppercase">Music Director</span>
          <span className="text-white/30 text-xs">•</span>
          <span className="text-white/60 text-xs font-semibold tracking-widest uppercase">Producer</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-none mb-6 tracking-tight">
          Joe Wilson<br />Bass
        </h1>

        {/* Hire Me CTA */}
        <div className="mb-0">
          <Link
            to="/contact"
            className="inline-block bg-[#1a7fa8] text-white text-xs font-bold px-8 py-3 uppercase tracking-wider hover:bg-[#166a8f] transition-colors whitespace-nowrap cursor-pointer"
          >
            Hire Me
          </Link>
        </div>
      </div>

      {/* Full-width audio player bar — pinned to bottom */}
      <div className="relative z-10 w-full bg-black/80 backdrop-blur-sm border-t border-white/10 px-6 md:px-10 py-3 flex items-center gap-4">
        {/* Prev */}
        <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer flex-shrink-0">
          <i className="ri-skip-back-fill text-base" />
        </button>

        {/* Play/Pause */}
        <button
          onClick={() => setPlaying(!playing)}
          className="w-9 h-9 flex items-center justify-center text-white cursor-pointer flex-shrink-0"
        >
          <i className={`text-2xl ${playing ? "ri-pause-fill" : "ri-play-fill"}`} />
        </button>

        {/* Next */}
        <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer flex-shrink-0">
          <i className="ri-skip-forward-fill text-base" />
        </button>

        {/* Track info */}
        <div className="hidden sm:flex flex-col min-w-0 flex-shrink-0 w-32">
          <span className="text-white text-xs font-bold truncate">Groove Theory</span>
          <span className="text-gray-400 text-xs truncate">Joseph Wilson</span>
        </div>

        {/* Progress bar */}
        <div className="flex-1 flex items-center gap-3">
          <span className="text-gray-500 text-xs whitespace-nowrap hidden sm:block">1:12</span>
          <div
            ref={progressRef}
            className="flex-1 h-1 bg-white/20 rounded-full cursor-pointer relative"
            onClick={handleProgressClick}
          >
            <div
              className="h-full bg-[#1ab8e8] rounded-full relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow" />
            </div>
          </div>
          <span className="text-gray-500 text-xs whitespace-nowrap hidden sm:block">4:12</span>
        </div>

        {/* Volume */}
        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
          <div className="w-4 h-4 flex items-center justify-center">
            <i className="ri-volume-up-line text-gray-400 text-sm" />
          </div>
          <div
            ref={volumeRef}
            className="w-20 h-1 bg-white/20 rounded-full cursor-pointer relative"
            onClick={handleVolumeClick}
          >
            <div
              className="h-full bg-gray-400 rounded-full"
              style={{ width: `${volume}%` }}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 flex-shrink-0">
          <button className="w-5 h-5 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer">
            <i className="ri-shuffle-line text-sm" />
          </button>
          <button className="w-5 h-5 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer">
            <i className="ri-repeat-line text-sm" />
          </button>
          <button className="w-5 h-5 flex items-center justify-center text-gray-400 hover:text-[#1ab8e8] cursor-pointer">
            <i className="ri-heart-line text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
}
