import { useState } from "react";

const artists = [
  "Major Gospel Artists",
  "International Soloists",
  "Contemporary Worship Teams",
];

const stages = [
  "Global Arenas",
  "Live DVD Recordings",
  "Festival Mainstages",
];

const quotes = [
  {
    text: '"The Foundation of the Band"',
    sub: "A reputation built on reliability, impeccable timing, and a deep understanding of music theory and arrangement.",
  },
  {
    text: '"Music Is My Language"',
    sub: "Every note I play tells a story. Every performance is a conversation between me and the audience.",
  },
  {
    text: '"Teaching the Next Generation"',
    sub: "Sharing knowledge is the greatest gift a musician can give. I pour everything into my students.",
  },
];

const iconButtons = [
  { icon: "ri-rhythm-line" },
  { icon: "ri-record-circle-line" },
  { icon: "ri-layout-grid-line" },
];

export default function ExperienceSection() {
  const [activeQuote, setActiveQuote] = useState(0);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "#1a1a1a" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 60% 40%, rgba(7,125,167,0.08) 0%, transparent 65%)",
        }}
      />

      <div
        className="relative z-10 px-4 py-10 sm:px-6 md:px-10 md:py-16 lg:px-16 lg:py-20"
      >
        {/* Top row: 3 cards — stack on mobile, 3-col on md */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          {/* Years card */}
          <div
            className="flex flex-col justify-center"
            style={{
              background: "#242424",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "clamp(20px,3vw,36px)",
            }}
          >
            <span
              className="font-inter font-black leading-none mb-2"
              style={{ fontSize: "clamp(40px,5vw,64px)", color: "#077DA7" }}
            >
              12+
            </span>
            <p
              className="font-inter font-bold text-white mb-1.5"
              style={{ fontSize: "clamp(13px,1.1vw,14px)" }}
            >
              Years of Excellence
            </p>
            <p
              className="font-inter leading-relaxed"
              style={{ fontSize: "clamp(11px,0.85vw,12px)", color: "#9CA3AF" }}
            >
              Consistent growth across live worship, studio production, and music direction.
            </p>
          </div>

          {/* Artists card */}
          <div
            className="flex flex-col"
            style={{
              background: "#242424",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "clamp(20px,3vw,36px)",
            }}
          >
            <h3
              className="font-inter font-bold uppercase mb-4"
              style={{ fontSize: "clamp(16px,2vw,26px)", color: "#C9A227" }}
            >
              Artists
            </h3>
            <ul className="flex flex-col gap-2.5">
              {artists.map((a, i) => (
                <li
                  key={i}
                  className="font-inter flex items-start gap-2"
                  style={{ fontSize: "clamp(12px,0.9vw,13px)", color: "#D1D5DB" }}
                >
                  <span style={{ color: "#D1D5DB" }}>•</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* Stages card */}
          <div
            className="flex flex-col"
            style={{
              background: "#242424",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "clamp(20px,3vw,36px)",
            }}
          >
            <h3
              className="font-inter font-bold uppercase mb-4"
              style={{ fontSize: "clamp(16px,2vw,26px)", color: "#C9A227" }}
            >
              Stages
            </h3>
            <ul className="flex flex-col gap-2.5">
              {stages.map((s, i) => (
                <li
                  key={i}
                  className="font-inter flex items-start gap-2"
                  style={{ fontSize: "clamp(12px,0.9vw,13px)", color: "#D1D5DB" }}
                >
                  <span style={{ color: "#D1D5DB" }}>•</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom: Wide quote card — stacks on mobile */}
        <div
          className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
          style={{
            background: "#242424",
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "clamp(20px,3vw,40px)",
          }}
        >
          <div className="flex-1 min-w-0">
            <p
              className="font-inter font-bold mb-2"
              style={{ fontSize: "clamp(14px,1.4vw,20px)", color: "#fff" }}
            >
              {quotes[activeQuote].text}
            </p>
            <p
              className="font-inter leading-relaxed"
              style={{ fontSize: "clamp(11px,0.85vw,13px)", color: "#9CA3AF" }}
            >
              {quotes[activeQuote].sub}
            </p>
          </div>

          {/* Icon nav buttons */}
          <div className="flex gap-2 flex-shrink-0">
            {iconButtons.map((btn, i) => (
              <button
                key={i}
                onClick={() => setActiveQuote(i)}
                className="flex items-center justify-center transition-all cursor-pointer"
                style={{
                  width: 38,
                  height: 38,
                  background: i === activeQuote ? "#077DA7" : "#2e2e2e",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: i === activeQuote ? "#fff" : "#9CA3AF",
                  borderRadius: 0,
                }}
              >
                <i className={`${btn.icon} text-sm`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
