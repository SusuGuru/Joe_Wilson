import { Link } from "react-router-dom";

export default function ServicesHero() {
  return (
    <section className="relative h-[200px] md:h-[240px] overflow-hidden mt-[52px]">
      <img
        src="https://static.readdy.ai/image/bd3e65a9c2956e637f2d341da068edd0/e6acbd22a058ea5bccbfcec228d8d163.jpeg"
        alt="Services Hero"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl md:text-3xl font-black text-white uppercase tracking-widest mb-2">
          Services
        </h1>
        <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-widest">
          <Link to="/" className="hover:text-white cursor-pointer transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#1ab8e8]">Services</span>
        </div>
      </div>
    </section>
  );
}
