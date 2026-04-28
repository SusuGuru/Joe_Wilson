import { useState } from "react";

const highlights = [
  { icon: "ri-time-line", label: "40+ Hours", desc: "of video content" },
  { icon: "ri-file-list-3-line", label: "120 Lessons", desc: "structured modules" },
  { icon: "ri-download-line", label: "Downloadable", desc: "resources & tabs" },
  { icon: "ri-infinity-line", label: "Lifetime Access", desc: "learn at your pace" },
];

export default function MasterclassPreviewSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-gray-900 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#1ab8e8] text-xs font-bold uppercase tracking-widest mb-2">Watch First</p>
          <h2 className="text-3xl md:text-4xl font-black text-white">Masterclass Preview</h2>
          <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto">
            Get a taste of what&apos;s inside. Watch this free preview lesson and see why thousands of students have transformed their playing.
          </p>
        </div>

        {/* Video */}
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden bg-black mb-10">
          {playing ? (
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Masterclass Full Preview"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            <>
              <img
                src="https://readdy.ai/api/search-image?query=professional%20music%20studio%20recording%20session%20dark%20cinematic%20atmosphere%2C%20bass%20guitar%20player%20recording%2C%20studio%20equipment%2C%20dramatic%20lighting%2C%20dark%20background%2C%20high%20quality%20photography&width=900&height=506&seq=masterclass-preview-video&orientation=landscape"
                alt="Masterclass Preview Video"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-4">
                <button
                  onClick={() => setPlaying(true)}
                  className="w-20 h-20 flex items-center justify-center bg-[#1ab8e8] rounded-full hover:bg-[#0fa0cc] transition-all hover:scale-105 cursor-pointer"
                >
                  <i className="ri-play-fill text-white text-4xl ml-1" />
                </button>
                <p className="text-white text-sm font-medium">Watch Free Preview — 12 min</p>
              </div>
            </>
          )}
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 flex items-center justify-center bg-[#1ab8e8]/10 rounded-full">
                <i className={`${h.icon} text-[#1ab8e8] text-2xl`} />
              </div>
              <p className="text-white text-base font-black">{h.label}</p>
              <p className="text-gray-400 text-xs">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
