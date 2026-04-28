const steps = [
  {
    number: "01",
    icon: "ri-seedling-line",
    title: "Foundations",
    desc: "Build an unshakeable technical foundation. Learn proper posture, hand positioning, and the fundamental techniques every bassist must master.",
    modules: ["Instrument Setup", "Basic Techniques", "Reading Music", "Rhythm & Timing"],
  },
  {
    number: "02",
    icon: "ri-bar-chart-grouped-line",
    title: "Groove Mastery",
    desc: "Develop your internal groove and learn to lock in with drummers. Explore different genres and styles from funk to jazz to rock.",
    modules: ["Funk Grooves", "Jazz Walking Bass", "Rock Foundations", "R&B Pocket"],
  },
  {
    number: "03",
    icon: "ri-award-line",
    title: "Pro Level",
    desc: "Elevate your playing to professional standards. Learn advanced theory, studio techniques, and how to build a sustainable music career.",
    modules: ["Advanced Theory", "Studio Recording", "Live Performance", "Career Building"],
  },
];

export default function PathToMasterySection() {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#1ab8e8] text-xs font-bold uppercase tracking-widest mb-2">Your Journey</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">The Path to Mastery</h2>
          <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
            A carefully structured three-phase curriculum that takes you from beginner to professional bassist.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px bg-[#1ab8e8]/30" style={{ left: "16.67%", right: "16.67%" }} />

          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              {/* Step circle */}
              <div className="relative mb-6">
                <div className="w-20 h-20 flex items-center justify-center bg-[#1ab8e8] rounded-full">
                  <i className={`${step.icon} text-white text-3xl`} />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 flex items-center justify-center bg-gray-900 rounded-full">
                  <span className="text-white text-xs font-black">{step.number}</span>
                </div>
              </div>

              <h3 className="text-gray-900 text-xl font-black mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{step.desc}</p>

              <ul className="space-y-2 w-full">
                {step.modules.map((mod, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded px-3 py-2">
                    <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                      <i className="ri-arrow-right-s-line text-[#1ab8e8] text-base" />
                    </div>
                    {mod}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
