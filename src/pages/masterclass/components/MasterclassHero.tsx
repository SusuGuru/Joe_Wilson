import { Link } from "react-router-dom";

export default function MasterclassHero() {
  return (
    <section
      className="relative h-[200px] md:h-[240px] overflow-hidden mt-[52px]"
      style={{
        backgroundImage: `url(https://readdy.ai/api/search-image?query=dark%20concert%20stage%20with%20dramatic%20lighting%2C%20bass%20guitar%20musician%20performing%2C%20deep%20shadows%2C%20moody%20atmosphere%2C%20professional%20music%20photography%2C%20dark%20teal%20and%20black%20tones%2C%20cinematic%20wide%20shot&width=1440&height=400&seq=masterclass-hero-bg&orientation=landscape)`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-2xl md:text-3xl font-black text-white tracking-widest uppercase mb-2">
          Masterclass
        </h1>
        <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-widest">
          <Link to="/" className="hover:text-white transition-colors cursor-pointer">Home</Link>
          <span>/</span>
          <span className="text-[#1ab8e8]">Masterclass</span>
        </div>
      </div>
    </section>
  );
}
