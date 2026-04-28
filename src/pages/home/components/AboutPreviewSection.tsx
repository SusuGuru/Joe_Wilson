import { Link } from "react-router-dom";

export default function AboutPreviewSection() {
  return (
    <section className="flex flex-col md:flex-row min-h-[420px] overflow-hidden">
      {/* Left: Image */}
      <div className="w-full md:w-1/2 h-72 md:h-auto overflow-hidden flex-shrink-0">
        <img
          src="https://static.readdy.ai/image/bd3e65a9c2956e637f2d341da068edd0/944c18d1fa3d83a747e487affb1ee507.png"
          alt="About Joseph Wilson"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Right: Content — white background */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center px-10 md:px-16 py-14">
        <p className="text-[#1ab8e8] text-xs font-bold tracking-widest uppercase mb-2">Who I Am</p>
        <h2 className="text-2xl md:text-3xl font-black text-[#1ab8e8] uppercase mb-5 tracking-wide leading-tight">
          About Me
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-3">
          Joseph Wilson is a world-class bassist, music director, and performer with over a decade of experience commanding stages across the globe. His raw energy, technical mastery, and magnetic stage presence have made him one of the most electrifying live performers in the industry.
        </p>
        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          From intimate venues to sold-out arenas, Joseph brings an unmatched intensity to every performance — blending funk, soul, and contemporary bass into a sound that is entirely his own. Beyond the stage, he is a dedicated educator and music director, shaping the next generation of musicians.
        </p>
        <Link
          to="/about"
          className="inline-block border border-gray-900 text-gray-900 text-xs font-bold px-7 py-3 uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-colors whitespace-nowrap cursor-pointer w-fit"
        >
          More Info
        </Link>
      </div>
    </section>
  );
}
