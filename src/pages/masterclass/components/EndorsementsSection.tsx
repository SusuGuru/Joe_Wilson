const endorsements = [
  {
    name: "Marcus Thorne",
    role: "Lead Bass, Greater Faith Choir",
    avatar:
      "https://readdy.ai/api/search-image?query=professional%20male%20musician%20portrait%20dark%20background%2C%20confident%20expression%2C%20studio%20lighting%2C%20music%20artist%20headshot%2C%20dark%20tones&width=60&height=60&seq=endorse-1&orientation=squarish",
    quote:
      "The way Elias breaks down chord substitutions changed my entire approach to church services. It's more than bass; it's musicality.",
  },
  {
    name: "David Chen",
    role: "Session Player",
    avatar:
      "https://readdy.ai/api/search-image?query=professional%20asian%20male%20musician%20portrait%20dark%20background%2C%20confident%20expression%2C%20studio%20lighting%2C%20music%20artist%20headshot&width=60&height=60&seq=endorse-2&orientation=squarish",
    quote:
      "This is the first course that actually addresses the spirit of the music, not just the scales. Truly high-end education.",
  },
  {
    name: "Sarah Jenkins",
    role: "Independent Artist",
    avatar:
      "https://readdy.ai/api/search-image?query=professional%20female%20musician%20portrait%20dark%20background%2C%20confident%20expression%2C%20studio%20lighting%2C%20music%20artist%20headshot%2C%20elegant&width=60&height=60&seq=endorse-3&orientation=squarish",
    quote:
      "From technique to gear knowledge, this masterclass covers it all. The premium feel of the platform makes learning a joy.",
  },
];

export default function EndorsementsSection() {
  return (
    <section className="bg-white py-10 md:py-24 px-4 md:px-16">
      <div className="max-w-[1120px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-fraunces text-[26px] md:text-[42px] font-black text-[#1a1a1a] leading-[1.15] italic">
            Artist Endorsements
          </h2>
          <p className="text-[#6b7280] text-[13px] md:text-[14px] mt-2 md:mt-3 max-w-[360px] mx-auto leading-[1.7]">
            Hear from the players who transformed their sound through the Masterclass.
          </p>
        </div>

        {/* Cards — 1 col mobile, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {endorsements.map((e, i) => (
            <div key={i} className="bg-[#f5f7fa] p-5 md:p-7">
              {/* Quotation mark */}
              <div
                className="text-[#2596BE] text-[42px] md:text-[48px] font-black leading-none mb-2 md:mb-3"
                style={{ fontFamily: "Georgia, serif" }}
              >
                &ldquo;
              </div>

              <p className="text-[#374151] text-[12px] md:text-[13px] leading-[1.75] mb-5 md:mb-6">
                {e.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 md:w-10 md:h-10 overflow-hidden flex-shrink-0">
                  <img
                    src={e.avatar}
                    alt={e.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <p className="text-[#1a1a1a] text-[12px] md:text-[13px] font-bold leading-tight">{e.name}</p>
                  <p className="text-[#9ca3af] text-[10px] md:text-[11px] leading-tight">{e.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
