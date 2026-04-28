const testimonials = [
  {
    name: "Marcus Johnson",
    role: "Music Producer",
    text: "Joseph is an absolute beast on the bass. His groove and feel are unmatched. Working with him in the studio was one of the best experiences of my career. Every session he brings something new.",
    avatar: "https://readdy.ai/api/search-image?query=professional%20male%20musician%20portrait%20headshot%2C%20dark%20background%2C%20confident%20expression%2C%20music%20industry%20professional%2C%20mature%20man&width=48&height=48&seq=testi-home-1&orientation=squarish",
    stars: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Event Organizer",
    text: "We booked Joseph for our annual music festival and he absolutely blew the crowd away. His stage presence and musicianship are truly world-class. We will definitely be booking him again.",
    avatar: "https://readdy.ai/api/search-image?query=professional%20female%20event%20organizer%20portrait%20headshot%2C%20dark%20background%2C%20confident%20smile%2C%20business%20professional%20woman&width=48&height=48&seq=testi-home-2&orientation=squarish",
    stars: 5,
  },
  {
    name: "David Chen",
    role: "Masterclass Student",
    text: "Joseph&apos;s masterclass completely transformed my playing. His teaching style is clear, engaging, and incredibly effective. I went from intermediate to advanced in just a few months.",
    avatar: "https://readdy.ai/api/search-image?query=young%20asian%20male%20musician%20student%20portrait%20headshot%2C%20dark%20background%2C%20friendly%20expression%2C%20music%20student&width=48&height=48&seq=testi-home-3&orientation=squarish",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-950 py-16 px-8 md:px-16">
      <h2 className="text-center text-xl font-black text-white mb-10 tracking-widest uppercase">
        Testimonials
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded">
            <div className="flex gap-1 mb-3">
              {Array.from({ length: t.stars }).map((_, j) => (
                <i key={j} className="ri-star-fill text-yellow-400 text-xs" />
              ))}
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5 italic">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <img src={t.avatar} alt={t.name} className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{t.name}</p>
                <p className="text-gray-500 text-xs">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
