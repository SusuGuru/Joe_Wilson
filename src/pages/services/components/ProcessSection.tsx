const steps = [
  {
    number: "01",
    icon: "ri-chat-3-line",
    title: "Initial Consultation",
    description:
      "We start with a conversation about your project goals, timeline, and vision. No commitment required — just an honest discussion about how we can work together.",
  },
  {
    number: "02",
    icon: "ri-file-list-3-line",
    title: "Custom Proposal",
    description:
      "Based on your needs, I'll put together a tailored proposal outlining scope, deliverables, timeline, and investment — transparent and straightforward.",
  },
  {
    number: "03",
    icon: "ri-music-2-line",
    title: "Creative Execution",
    description:
      "With everything agreed, we dive in. Whether it's a live performance, studio session, or production project, I bring full focus and expertise to every detail.",
  },
  {
    number: "04",
    icon: "ri-check-double-line",
    title: "Delivery & Follow-up",
    description:
      "Final deliverables are handed over on time and to spec. I stay available for revisions and follow-up to make sure you're completely satisfied.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#0d0d0d] px-4 sm:px-8 md:px-12 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#1ab8e8] text-xs font-bold uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-white text-2xl md:text-3xl font-black uppercase tracking-wide">
            The Process
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-0 h-px bg-white/10 z-0" />
              )}

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Icon circle */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#1ab8e8]/10 border border-[#1ab8e8]/30 mb-4 relative">
                  <i className={`${step.icon} text-[#1ab8e8] text-xl`} />
                  <span className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center bg-[#1ab8e8] rounded-full text-white text-xs font-black">
                    {i + 1}
                  </span>
                </div>

                <h3 className="text-white text-sm font-black uppercase tracking-wide mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
