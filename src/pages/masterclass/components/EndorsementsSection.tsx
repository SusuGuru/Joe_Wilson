const endorsements = [
  {
    name: "Marcus Reid",
    role: "Grammy-Winning Bassist",
    avatar: "https://readdy.ai/api/search-image?query=professional%20male%20musician%20portrait%20dark%20background%2C%20confident%20expression%2C%20studio%20lighting%2C%20music%20artist%20headshot%2C%20dark%20tones&width=60&height=60&seq=endorse-1&orientation=squarish",
    quote: "Joseph's masterclass is the most comprehensive bass education I've ever seen. His ability to break down complex concepts into digestible lessons is unmatched. Every serious bassist needs this.",
    rating: 5,
  },
  {
    name: "Alicia Fontaine",
    role: "Music Director, Broadway",
    avatar: "https://readdy.ai/api/search-image?query=professional%20female%20musician%20portrait%20dark%20background%2C%20confident%20expression%2C%20studio%20lighting%2C%20music%20artist%20headshot%2C%20elegant&width=60&height=60&seq=endorse-2&orientation=squarish",
    quote: "I've worked with hundreds of musicians over my career, and Joseph Wilson stands out as one of the most gifted educators I've encountered. This masterclass is a game-changer.",
    rating: 5,
  },
  {
    name: "Devon Clarke",
    role: "Touring Bassist, Major Label",
    avatar: "https://readdy.ai/api/search-image?query=young%20male%20musician%20portrait%20dark%20background%2C%20casual%20style%2C%20studio%20lighting%2C%20music%20artist%20headshot%2C%20modern%20look&width=60&height=60&seq=endorse-3&orientation=squarish",
    quote: "After 10 years of playing, I thought I knew everything. Joseph's masterclass showed me how much I was missing. My playing improved dramatically within the first month.",
    rating: 5,
  },
];

export default function EndorsementsSection() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#1ab8e8] text-xs font-bold uppercase tracking-widest mb-2">What Pros Say</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">Artist Endorsements</h2>
          <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
            Hear from professional musicians and industry leaders who have experienced Joseph&apos;s teaching firsthand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {endorsements.map((e, i) => (
            <div key={i} className="bg-white rounded-lg p-6 border border-gray-100">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: e.rating }).map((_, j) => (
                  <div key={j} className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-star-fill text-[#1ab8e8] text-sm" />
                  </div>
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">&ldquo;{e.quote}&rdquo;</p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img src={e.avatar} alt={e.name} className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <p className="text-gray-900 text-sm font-bold">{e.name}</p>
                  <p className="text-gray-400 text-xs">{e.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 bg-gray-900 rounded-lg p-8">
          {[
            { value: "550K+", label: "Students Enrolled" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "97%", label: "Completion Rate" },
            { value: "800+", label: "5-Star Reviews" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-[#1ab8e8] text-3xl font-black mb-1">{stat.value}</p>
              <p className="text-gray-400 text-xs uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
