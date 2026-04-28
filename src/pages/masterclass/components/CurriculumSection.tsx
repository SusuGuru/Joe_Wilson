import { useState } from "react";

const modules = [
  {
    id: 1,
    title: "Module 1: Foundations of Bass",
    lessons: 12,
    duration: "4h 30m",
    topics: [
      "Introduction & Course Overview",
      "Instrument Setup & Maintenance",
      "Proper Posture & Hand Positioning",
      "Reading Bass Clef Notation",
      "Basic Scales & Patterns",
      "Rhythm & Timing Fundamentals",
    ],
  },
  {
    id: 2,
    title: "Module 2: Technique Development",
    lessons: 15,
    duration: "5h 45m",
    topics: [
      "Fingerstyle Technique",
      "Slap & Pop Fundamentals",
      "Pick Playing",
      "Two-Hand Tapping",
      "Muting Techniques",
      "Speed & Accuracy Exercises",
    ],
  },
  {
    id: 3,
    title: "Module 3: Music Theory for Bassists",
    lessons: 18,
    duration: "6h 20m",
    topics: [
      "Intervals & Chord Tones",
      "Major & Minor Scales",
      "Modes & Their Applications",
      "Chord Progressions",
      "Walking Bass Lines",
      "Improvisation Concepts",
    ],
  },
  {
    id: 4,
    title: "Module 4: Genre Mastery",
    lessons: 20,
    duration: "7h 10m",
    topics: [
      "Funk & R&B Grooves",
      "Jazz Bass Concepts",
      "Rock & Metal Techniques",
      "Latin Rhythms",
      "Gospel Bass Playing",
      "Electronic & Pop Bass",
    ],
  },
  {
    id: 5,
    title: "Module 5: Studio & Live Performance",
    lessons: 16,
    duration: "5h 55m",
    topics: [
      "Recording Studio Etiquette",
      "DI Recording Techniques",
      "Live Sound & Monitoring",
      "Stage Presence",
      "Working with a Band",
      "Session Musician Tips",
    ],
  },
  {
    id: 6,
    title: "Module 6: Career & Business",
    lessons: 10,
    duration: "3h 40m",
    topics: [
      "Building Your Brand",
      "Social Media for Musicians",
      "Networking & Connections",
      "Contracts & Agreements",
      "Touring & Gigging",
      "Passive Income Streams",
    ],
  },
];

const bonusItems = [
  { icon: "ri-file-music-line", title: "Bass Tab Library", desc: "200+ professionally transcribed bass tabs" },
  { icon: "ri-headphone-line", title: "Backing Tracks", desc: "50 high-quality practice backing tracks" },
  { icon: "ri-community-line", title: "Private Community", desc: "Access to exclusive student Discord server" },
  { icon: "ri-live-line", title: "Monthly Live Q&A", desc: "Monthly live sessions with Joseph Wilson" },
];

export default function CurriculumSection() {
  const [openModule, setOpenModule] = useState<number | null>(1);

  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Accordion */}
          <div className="flex-1">
            <p className="text-[#1ab8e8] text-xs font-bold uppercase tracking-widest mb-2">What You&apos;ll Learn</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">The Curriculum</h2>
            <p className="text-gray-500 text-sm mb-6">
              91 lessons across 6 comprehensive modules. Everything you need to go from beginner to professional.
            </p>

            <div className="space-y-2">
              {modules.map((mod) => (
                <div key={mod.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenModule(openModule === mod.id ? null : mod.id)}
                    className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-gray-50 transition-colors cursor-pointer text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 flex items-center justify-center bg-[#1ab8e8] rounded-full flex-shrink-0">
                        <span className="text-white text-xs font-black">{mod.id}</span>
                      </div>
                      <span className="text-gray-900 text-sm font-bold">{mod.title}</span>
                    </div>
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <span className="text-gray-400 text-xs hidden sm:block">{mod.lessons} lessons · {mod.duration}</span>
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className={`text-gray-400 text-base transition-transform ${openModule === mod.id ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"}`} />
                      </div>
                    </div>
                  </button>
                  {openModule === mod.id && (
                    <div className="px-5 pb-4 bg-gray-50 border-t border-gray-100">
                      <ul className="space-y-2 mt-3">
                        {mod.topics.map((topic, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                              <i className="ri-play-circle-line text-[#1ab8e8] text-sm" />
                            </div>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Bonus */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="bg-gray-900 rounded-lg p-6 sticky top-24">
              <p className="text-[#1ab8e8] text-xs font-bold uppercase tracking-widest mb-1">Included Free</p>
              <h3 className="text-white text-xl font-black mb-5">Bonus Materials</h3>
              <div className="space-y-4">
                {bonusItems.map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-9 h-9 flex items-center justify-center bg-[#1ab8e8]/10 rounded-lg flex-shrink-0">
                      <i className={`${item.icon} text-[#1ab8e8] text-lg`} />
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold">{item.title}</p>
                      <p className="text-gray-400 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-gray-700">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-gray-400 text-sm line-through">$497</span>
                  <span className="bg-[#1ab8e8] text-white text-xs font-bold px-2 py-0.5 rounded">40% OFF</span>
                </div>
                <p className="text-white text-3xl font-black mb-4">$297</p>
                <a
                  href="#pricing"
                  className="block w-full bg-[#1ab8e8] text-white text-sm font-bold py-3 rounded text-center uppercase tracking-wider hover:bg-[#0fa0cc] transition-colors cursor-pointer whitespace-nowrap"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
