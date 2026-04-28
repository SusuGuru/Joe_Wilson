import { useState } from "react";

const quotes = [
  {
    text: "The Foundation of the Band",
    sub: "Bass is not just an instrument — it is the heartbeat of every great song. I live to make people feel the groove.",
  },
  {
    text: "Music Is My Language",
    sub: "Every note I play tells a story. Every performance is a conversation between me and the audience.",
  },
  {
    text: "Teaching the Next Generation",
    sub: "Sharing knowledge is the greatest gift a musician can give. I pour everything into my students.",
  },
];

const artists = [
  "Marcus Miller", "Victor Wooten", "Thundercat", "Flea", "Jaco Pastorius",
  "Larry Graham", "Stanley Clarke", "Bootsy Collins",
];

const stages = [
  "Madison Square Garden", "Royal Albert Hall", "Hollywood Bowl",
  "Glastonbury Festival", "Montreux Jazz Festival", "Coachella",
];

export default function ExperienceSection() {
  const [activeQuote, setActiveQuote] = useState(0);

  return (
    <section className="bg-gray-950 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left: Stats + Quote */}
        <div className="md:col-span-1">
          <div className="mb-8">
            <span className="text-[#1ab8e8] text-5xl font-black">12+</span>
            <p className="text-gray-400 text-xs mt-1 leading-relaxed">
              Years of professional experience performing, recording, and teaching music worldwide.
            </p>
          </div>

          {/* Quote Carousel */}
          <div className="bg-gray-900 p-5 rounded">
            <i className="ri-double-quotes-l text-[#1ab8e8] text-2xl mb-3 block" />
            <p className="text-white text-sm font-bold mb-2">{quotes[activeQuote].text}</p>
            <p className="text-gray-400 text-xs leading-relaxed">{quotes[activeQuote].sub}</p>
            <div className="flex gap-2 mt-4">
              {quotes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveQuote(i)}
                  className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                    i === activeQuote ? "bg-[#1ab8e8]" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Middle: Artists */}
        <div>
          <h3 className="text-[#1ab8e8] text-sm font-bold tracking-widest uppercase mb-5">
            Artists
          </h3>
          <ul className="space-y-2">
            {artists.map((a, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                <span className="w-1 h-1 rounded-full bg-[#1ab8e8] flex-shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Stages */}
        <div>
          <h3 className="text-[#1ab8e8] text-sm font-bold tracking-widest uppercase mb-5">
            Stages
          </h3>
          <ul className="space-y-2">
            {stages.map((s, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                <span className="w-1 h-1 rounded-full bg-[#1ab8e8] flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
