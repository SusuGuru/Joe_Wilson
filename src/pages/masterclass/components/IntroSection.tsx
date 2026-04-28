import { useState } from "react";

const features = [
  {
    icon: "ri-music-2-line",
    title: "Bass Fundamentals",
    desc: "Master the core techniques that form the foundation of professional bass playing.",
  },
  {
    icon: "ri-headphone-line",
    title: "Music Theory",
    desc: "Understand harmony, rhythm, and composition from a bassist's perspective.",
  },
  {
    icon: "ri-record-circle-line",
    title: "Studio Recording",
    desc: "Learn how to record, produce, and mix bass tracks like a professional.",
  },
  {
    icon: "ri-mic-line",
    title: "Live Performance",
    desc: "Develop stage presence, setlist strategy, and live sound techniques.",
  },
];

export default function IntroSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: Video Thumbnail */}
          <div className="w-full lg:w-[420px] flex-shrink-0">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black">
              {playing ? (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Masterclass Preview"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : (
                <>
                  <img
                    src="https://readdy.ai/api/search-image?query=bass%20guitar%20close%20up%20macro%20photography%20dark%20background%2C%20professional%20studio%20lighting%2C%20musical%20instrument%20detail%2C%20cinematic%20dark%20tones%2C%20dramatic%20shadows%2C%20high%20quality%20music%20photography&width=420&height=236&seq=intro-video-thumb&orientation=landscape"
                    alt="Masterclass Preview"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button
                      onClick={() => setPlaying(true)}
                      className="w-14 h-14 flex items-center justify-center bg-[#1ab8e8] rounded-full hover:bg-[#0fa0cc] transition-colors cursor-pointer"
                    >
                      <i className="ri-play-fill text-white text-2xl ml-1" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white text-xs font-semibold">Bass Masterclass — Intro Preview</p>
                    <p className="text-gray-300 text-xs">Joseph Wilson</p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1">
            <p className="text-[#1ab8e8] text-xs font-bold uppercase tracking-widest mb-2">
              Joseph Wilson Presents
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
              Master the <span className="text-[#1ab8e8]">Entire</span><br />
              Spectrum of Sound
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Whether you're a complete beginner or an experienced musician looking to elevate your craft, this comprehensive masterclass covers everything you need to become a world-class bassist. Learn directly from Joseph Wilson — music director, producer, and touring artist with over 12 years of professional experience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-9 h-9 flex items-center justify-center bg-[#1ab8e8]/10 rounded-lg flex-shrink-0">
                    <i className={`${f.icon} text-[#1ab8e8] text-lg`} />
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm font-bold mb-0.5">{f.title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 p-4 bg-[#1ab8e8]/5 border border-[#1ab8e8]/20 rounded-lg">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                <i className="ri-shield-check-line text-[#1ab8e8] text-xl" />
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">
                <strong className="text-gray-800">30-Day Money Back Guarantee.</strong> If you're not completely satisfied with the masterclass, we'll refund your purchase — no questions asked.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
