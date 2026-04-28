const cards = [
  {
    image: "https://readdy.ai/api/search-image?query=young%20musician%20beginner%20learning%20bass%20guitar%20at%20home%2C%20casual%20setting%2C%20warm%20lighting%2C%20focused%20expression%2C%20music%20practice%2C%20natural%20indoor%20photography&width=340&height=220&seq=for-you-1&orientation=landscape",
    title: "The Music Musician",
    subtitle: "Beginners & Hobbyists",
    desc: "You love music and want to learn bass properly. You've tried YouTube tutorials but feel lost without structure. This masterclass gives you a clear, step-by-step path from zero to confident player.",
    points: ["No prior experience needed", "Learn at your own pace", "Structured curriculum"],
  },
  {
    image: "https://readdy.ai/api/search-image?query=professional%20musician%20bassist%20performing%20on%20stage%20with%20band%2C%20concert%20lighting%2C%20dark%20atmosphere%2C%20skilled%20performer%2C%20live%20music%20event%20photography&width=340&height=220&seq=for-you-2&orientation=landscape",
    title: "The Full-Scale Player",
    subtitle: "Intermediate & Advanced",
    desc: "You already play but want to break through plateaus. Learn advanced techniques, music theory, and the professional mindset that separates good players from great ones.",
    points: ["Advanced techniques", "Music theory deep-dive", "Professional mindset"],
  },
];

export default function IsThisForYouSection() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#1ab8e8] text-xs font-bold uppercase tracking-widest mb-2">Who It&apos;s For</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">Is This For You?</h2>
          <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
            This masterclass is designed for musicians at every level. Whether you&apos;re just starting out or looking to go pro, there&apos;s something here for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden border border-gray-100">
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-[#1ab8e8] text-xs font-bold uppercase tracking-wider">{card.subtitle}</p>
                  <h3 className="text-white text-lg font-black">{card.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{card.desc}</p>
                <ul className="space-y-2">
                  {card.points.map((pt, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                        <i className="ri-checkbox-circle-fill text-[#1ab8e8] text-base" />
                      </div>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row: small cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          {[
            { icon: "ri-music-line", title: "The Music Student", desc: "Studying music formally and want real-world professional skills to complement your education." },
            { icon: "ri-album-line", title: "The Full Right Studio", desc: "A recording artist or producer who wants to understand bass deeply to create better music." },
            { icon: "ri-user-star-line", title: "Music Enthusiast", desc: "A passionate fan who wants to understand the craft behind the music you love." },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-lg p-5 border border-gray-100 flex gap-4 items-start">
              <div className="w-10 h-10 flex items-center justify-center bg-[#1ab8e8]/10 rounded-lg flex-shrink-0">
                <i className={`${item.icon} text-[#1ab8e8] text-xl`} />
              </div>
              <div>
                <h4 className="text-gray-900 text-sm font-bold mb-1">{item.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
