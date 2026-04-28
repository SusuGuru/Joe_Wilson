import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="bg-gray-950 py-20 px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-black text-white mb-8 leading-tight">
        Looking to work<br />together?
      </h2>
      <div className="flex gap-4 justify-center flex-wrap">
        <Link
          to="/contact"
          className="bg-[#1a7fa8] text-white text-sm font-bold px-8 py-3 rounded uppercase tracking-wider hover:bg-[#166a8f] transition-colors whitespace-nowrap cursor-pointer"
        >
          Book Joseph
        </Link>
        <Link
          to="/masterclass"
          className="border border-white text-white text-sm font-bold px-8 py-3 rounded uppercase tracking-wider hover:bg-white hover:text-gray-900 transition-colors whitespace-nowrap cursor-pointer"
        >
          Join Masterclass
        </Link>
      </div>
    </section>
  );
}
