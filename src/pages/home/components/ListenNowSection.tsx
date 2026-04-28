import { useState } from "react";

const tracks = [
  {
    title: "Groove Theory",
    genre: "Funk Bass",
    seq: "listen-color-1",
    labelColor: "bg-pink-500",
    ringColor: "border-pink-400",
  },
  {
    title: "Deep Roots",
    genre: "Jazz Bass",
    seq: "listen-color-2",
    labelColor: "bg-yellow-400",
    ringColor: "border-yellow-300",
  },
  {
    title: "Night Ride",
    genre: "R&B",
    seq: "listen-color-3",
    labelColor: "bg-gray-800",
    ringColor: "border-gray-600",
  },
  {
    title: "Slap Happy",
    genre: "Funk",
    seq: "listen-color-4",
    labelColor: "bg-red-500",
    ringColor: "border-red-400",
  },
  {
    title: "Low End Theory",
    genre: "Hip Hop",
    seq: "listen-color-5",
    labelColor: "bg-yellow-500",
    ringColor: "border-yellow-400",
  },
];

export default function ListenNowSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 px-8 md:px-16">
      <h2 className="text-center text-xl font-black text-gray-900 mb-12 tracking-widest uppercase">
        Listen Now
      </h2>
      <div className="flex gap-8 md:gap-12 justify-center flex-wrap">
        {tracks.map((track, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-4 cursor-pointer group"
            onClick={() => setActive(active === i ? null : i)}
          >
            {/* Vinyl disc */}
            <div className={`relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden bg-[#111] border-4 ${active === i ? track.ringColor : "border-transparent"} transition-all duration-300`}>
              <img
                src={`https://readdy.ai/api/search-image?query=vinyl%20record%20album%20cover%20colorful%20vibrant%20music%20artwork%2C%20bold%20colors%2C%20artistic%20design%2C%20music%20album%2C%20circular%20format%2C%20professional&width=128&height=128&seq=${track.seq}&orientation=squarish`}
                alt={track.title}
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  active === i ? "animate-spin" : "group-hover:scale-105"
                }`}
                style={active === i ? { animationDuration: "3s" } : {}}
              />
              {/* Vinyl grooves overlay */}
              <div className="absolute inset-0 rounded-full"
                style={{
                  background: "repeating-radial-gradient(circle, transparent, transparent 3px, rgba(0,0,0,0.08) 3px, rgba(0,0,0,0.08) 4px)"
                }}
              />
              {/* Colored center label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-8 h-8 rounded-full ${track.labelColor} flex items-center justify-center shadow-lg border-2 border-white/30`}>
                  <div className="w-2 h-2 rounded-full bg-white/70" />
                </div>
              </div>
              {/* Play overlay on hover */}
              <div className={`absolute inset-0 bg-black/30 flex items-center justify-center rounded-full transition-opacity ${active === i ? "opacity-0" : "opacity-0 group-hover:opacity-100"}`}>
                <i className="ri-play-fill text-white text-2xl" />
              </div>
            </div>

            {/* Track info */}
            <div className="text-center">
              <p className={`text-xs font-black uppercase tracking-wide transition-colors ${active === i ? "text-[#1ab8e8]" : "text-gray-900 group-hover:text-[#1ab8e8]"}`}>
                {track.title}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">{track.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
