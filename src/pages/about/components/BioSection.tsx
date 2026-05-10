const services = [
  {
    icon: "ri-mic-2-line",
    title: "RECORDING",
    text: "Lorem ipsum dolor sit amet, nibh ut lorem commodo nulla facilisis adipiscing vehicula dui dictum varius ut.",
  },
  {
    icon: "ri-equalizer-2-line",
    title: "MIXING",
    text: "Lorem ipsum dolor sit amet, nibh ut lorem commodo nulla facilisis adipiscing vehicula dui dictum varius ut.",
  },
  {
    icon: "ri-headphone-line",
    title: "MASTERING",
    text: "Lorem ipsum dolor sit amet, nibh ut lorem commodo nulla facilisis adipiscing vehicula dui dictum varius ut.",
  },
];

export default function BioSection() {
  return (
    <section className="bg-white">
      {/* Main Bio Row — text first on mobile, then photo (order reversed on md) */}
      <div className="flex flex-col md:grid md:grid-cols-2">
        {/* Right: Bio content — rendered first on mobile */}
        <div
          className="flex flex-col justify-center bg-white order-1 md:order-2 px-6 py-10 md:py-0"
          style={{ padding: "clamp(28px,5vw,72px)" }}
        >
          <p
            className="font-inter font-bold uppercase tracking-[0.18em] mb-2"
            style={{ fontSize: 11, color: "#077DA7" }}
          >
            I Am
          </p>
          <h2
            className="font-inter font-black uppercase leading-[1] mb-4"
            style={{ fontSize: "clamp(26px,4vw,52px)", color: "#111" }}
          >
            Joseph Wilson
          </h2>
          <p
            className="font-inter leading-relaxed mb-4"
            style={{ fontSize: "clamp(12px,0.95vw,13px)", color: "#6B7280" }}
          >
            Joseph Wilson is a UK-based bass guitarist, music director, and producer known for his deep groove, musical sensitivity, and commitment to excellence in gospel and live music. With years of experience across church platforms, live events, and studio sessions, he has developed a sound that supports and elevates every musical moment.
          </p>
          <p
            className="font-inter leading-relaxed"
            style={{ fontSize: "clamp(12px,0.95vw,13px)", color: "#6B7280" }}
          >
            Whether leading bands, recording sessions, or performing on stage, Joseph focuses on serving the music with precision, tone, and feel. Passionate about growth and mentorship, he is dedicated to helping other musicians develop their skill, confidence, and understanding of bass in both live and studio environments.
          </p>
        </div>

        {/* Left: Photo — below text on mobile, left on desktop */}
        <div
          className="relative overflow-hidden order-2 md:order-1"
          style={{ minHeight: "clamp(260px,45vw,520px)" }}
        >
          <img
            src="https://storage.readdy-site.link/project_files/c0c1db3d-22db-46b5-85e9-428db5f1168e/b505d7f1-a2cb-4b31-94d3-6f633474031c_871badd755a5afb1a73b6976ceb11bc693cce248.jpg?v=9b1cc5aeb513872a2a091ef6b7fb7e81"
            alt="Joseph Wilson"
            className="absolute inset-0 w-full h-full object-cover object-top"
            style={{ filter: "grayscale(100%)" }}
          />
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="flex items-center justify-center rounded-full border-2 border-white cursor-pointer transition-all hover:bg-white/20"
              style={{ width: 56, height: 56 }}
            >
              <i className="ri-play-fill text-white text-2xl" style={{ marginLeft: 3 }} />
            </div>
          </div>
        </div>
      </div>

      {/* Services Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-200">
        {services.map((s, i) => (
          <div
            key={i}
            className="flex items-start gap-5 py-8 px-6 md:py-10"
            style={{
              paddingLeft: "clamp(20px,4vw,56px)",
              paddingRight: "clamp(20px,4vw,56px)",
              borderBottom: i < services.length - 1 ? "1px solid #e5e7eb" : "none",
            }}
          >
            {/* Icon box */}
            <div
              className="flex-shrink-0 flex items-center justify-center border border-gray-200"
              style={{ width: 44, height: 44, minWidth: 44 }}
            >
              <i className={`${s.icon} text-gray-700`} style={{ fontSize: 18 }} />
            </div>
            <div>
              <h4
                className="font-inter font-bold uppercase tracking-wider mb-1.5"
                style={{ fontSize: 12, color: "#111" }}
              >
                {s.title}
              </h4>
              <p
                className="font-inter leading-relaxed"
                style={{ fontSize: 12, color: "#9CA3AF" }}
              >
                {s.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
