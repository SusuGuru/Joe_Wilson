import { Link } from "react-router-dom";

const stats = [
  { icon: "ri-music-2-line", value: "12+", label: "Years Experience" },
  { icon: "ri-album-line", value: "8", label: "Albums Released" },
  { icon: "ri-mic-line", value: "200+", label: "Live Performances" },
];

export default function BioSection() {
  return (
    <section className="bg-white py-14 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: Photo */}
        <div className="w-full">
          <div className="w-full h-[340px] md:h-[420px] overflow-hidden">
            <img
              src="https://storage.readdy-site.link/project_files/c0c1db3d-22db-46b5-85e9-428db5f1168e/b505d7f1-a2cb-4b31-94d3-6f633474031c_871badd755a5afb1a73b6976ceb11bc693cce248.jpg?v=9b1cc5aeb513872a2a091ef6b7fb7e81"
              alt="Joseph Wilson"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Right: Bio */}
        <div className="flex flex-col justify-start">
          <p className="text-[#1ab8e8] text-xs font-bold tracking-widest uppercase mb-1">
            I Am
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
            Joseph Wilson
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">
            Joseph Wilson is a world-renowned bassist, composer, and music educator with over 12 years of professional experience. Born and raised in New York City, Joseph discovered his passion for music at the age of seven, picking up his first bass guitar and never looking back.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-7">
            His unique style blends jazz, funk, R&amp;B, and soul into a signature sound that has captivated audiences across the globe. Joseph has performed alongside Grammy-winning artists, headlined major international festivals, and released eight critically acclaimed albums.
          </p>

          {/* Stats Row — bordered boxes */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center border border-gray-200 py-4 px-2">
                <div className="w-8 h-8 flex items-center justify-center mb-2">
                  <i className={`${s.icon} text-xl text-gray-700`} />
                </div>
                <span className="text-lg font-black text-gray-900">{s.value}</span>
                <span className="text-xs text-gray-400 mt-0.5 leading-tight">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-3 flex-wrap">
            <Link
              to="/contact"
              className="bg-[#1a7fa8] text-white text-xs font-bold px-6 py-3 uppercase tracking-wider hover:bg-[#166a8f] transition-colors whitespace-nowrap cursor-pointer"
            >
              Book Me
            </Link>
            <Link
              to="/music"
              className="border border-gray-900 text-gray-900 text-xs font-bold px-6 py-3 uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
            >
              My Music
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
