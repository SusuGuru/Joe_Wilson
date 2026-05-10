import { Link } from "react-router-dom";

export default function MediaHero() {
  return (
    <section
      className="relative h-[250px] md:h-[350px] overflow-hidden"
      style={{
        backgroundImage: `url(https://readdy.ai/api/search-image?query=dark%20concert%20stage%20dramatic%20lighting%20musician%20performing%2C%20deep%20shadows%20moody%20atmosphere%2C%20professional%20music%20photography%2C%20dark%20teal%20and%20black%20tones%2C%20cinematic%20wide%20shot%2C%20stage%20lights%20beams%2C%20crowd%20silhouettes&width=1440&height=380&seq=media-hero-bg&orientation=landscape)`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-8">
        <h1 className="text-[32px] md:text-[48px] font-black text-white tracking-widest uppercase mb-1 md:mb-2">
          Media
        </h1>
        <div className="flex items-center gap-2 text-[10px] md:text-[12px] text-white/80 font-medium tracking-widest">
          <Link to="/" className="hover:text-white transition-colors cursor-pointer uppercase">Home</Link>
          <span>/</span>
          <span className="text-white uppercase">Media</span>
        </div>
      </div>
    </section>
  );
}
