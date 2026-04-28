const stats = [
  { value: "15+", label: "Years Experience", icon: "ri-award-line" },
  { value: "500+", label: "Projects Completed", icon: "ri-music-2-line" },
  { value: "120+", label: "Happy Clients", icon: "ri-user-smile-line" },
  { value: "40+", label: "Countries Toured", icon: "ri-earth-line" },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden border-t border-b border-white/5">
      {/* Background image */}
      <img
        src="https://static.readdy.ai/image/bd3e65a9c2956e637f2d341da068edd0/e6acbd22a058ea5bccbfcec228d8d163.jpeg"
        alt="Stats background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative px-4 sm:px-8 md:px-12 lg:px-20 py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 flex items-center justify-center mb-3">
                <i className={`${stat.icon} text-[#1ab8e8] text-2xl`} />
              </div>
              <p className="text-white text-3xl md:text-4xl font-black">{stat.value}</p>
              <p className="text-gray-400 text-xs uppercase tracking-widest mt-1 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
