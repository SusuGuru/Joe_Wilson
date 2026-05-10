import homeTestimonials from "../../../assets/home/hometestimonials.jpg";
import headshot1 from "../../../assets/home/testimonialheadshot1.jpg";
import headshot2 from "../../../assets/home/testimonialheadshot2.jpg";
import headshot3 from "../../../assets/home/testimonialheadshot3.jpg";

const testimonials = [
  {
    title: "Start the Beat",
    name: "Michal Brink",
    role: "Client",
    text: "Adipiscing at in tellus integer feugiat. Sed viverra tellus in hac habitasse platea dictumst. Placerat in egestas erat imperdiet sed euismod.",
    avatar: headshot1,
    stars: 5,
  },
  {
    title: "Blast It Out Loud",
    name: "Eduardo Lindsley",
    role: "Client",
    text: "Adipiscing at in tellus integer feugiat. Sed viverra tellus in hac habitasse platea dictumst. Placerat in egestas erat imperdiet sed euismod.",
    avatar: headshot2,
    stars: 5,
  },
  {
    title: "You Sing, We Bring",
    name: "Keneth Conroy",
    role: "Client",
    text: "Adipiscing at in tellus integer feugiat. Sed viverra tellus in hac habitasse platea dictumst. Placerat in egestas erat imperdiet sed euismod.",
    avatar: headshot3,
    stars: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="w-full bg-black bg-cover bg-center bg-no-repeat px-4 py-12 sm:px-6 md:py-[clamp(64px,8vw,96px)]"
      style={{ backgroundImage: `url(${homeTestimonials})` }}
    >
      <h2 className="mb-8 mt-4 text-center font-inter text-[clamp(24px,3.5vw,48px)] font-bold uppercase leading-none tracking-tight text-white md:mb-10 md:mt-6">
        Testimonials
      </h2>

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-4 md:gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div key={i} className="flex flex-col border border-white/20 bg-transparent p-5 md:min-h-[260px] md:p-6">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.stars }).map((_, j) => (
                <i key={j} className="ri-star-fill text-[12px] text-[#C9A227]" />
              ))}
            </div>

            <h3 className="mb-3 font-inter text-[18px] font-bold uppercase leading-[1.05] tracking-tight text-white md:text-[22px] md:mb-4">
              {t.title}
            </h3>

            <p className="mb-6 flex-1 font-inter text-[14px] leading-[1.75] text-white/80">{t.text}</p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="flex items-center gap-1.5 font-inter text-[14px] text-white">
                <p>{t.name}</p>
                <span className="text-white/70">/</span>
                <p className="text-white/80">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
