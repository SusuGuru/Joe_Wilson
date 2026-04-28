import { Link } from "react-router-dom";

const services = [
  {
    id: "live-performance",
    tag: "Live Performance",
    title: "Studio & Session Bass",
    description:
      "World-class live bass performance for concerts, tours, corporate events, and private shows. Joseph brings electrifying energy and precision to every stage, delivering unforgettable musical experiences that captivate audiences of all sizes.",
    features: ["Concert & Tour Support", "Corporate Events", "Private Shows", "Festival Performances"],
    image: "https://static.readdy.ai/image/bd3e65a9c2956e637f2d341da068edd0/76e6079b8c13a478e83b68dc635c4b69.jpeg",
  },
  {
    id: "music-production",
    tag: "Music Production",
    title: "Music Production",
    description:
      "Full-service music production from concept to final master. Leveraging state-of-the-art studio equipment and years of industry experience, Joseph crafts sonic landscapes that push creative boundaries while maintaining commercial appeal.",
    features: ["Beat Making & Arrangement", "Recording & Tracking", "Mixing & Mastering", "Sound Design"],
    image: "https://readdy.ai/api/search-image?query=professional%20music%20producer%20at%20large%20mixing%20console%20in%20dark%20studio%2C%20multiple%20screens%20showing%20waveforms%2C%20dramatic%20teal%20and%20amber%20studio%20lighting%2C%20hands%20on%20faders%2C%20cinematic%20close%20up%2C%20deep%20shadows%2C%20high%20contrast&width=800&height=600&seq=svc-prod-v2&orientation=portrait",
  },
  {
    id: "music-direction",
    tag: "Music Direction",
    title: "Music Direction",
    description:
      "Strategic creative leadership for artists, labels, and brands. From album concept to live show production, Joseph guides musical vision with a deep understanding of genre, audience, and artistic integrity.",
    features: ["Album Creative Direction", "Live Show Production", "Artist Development", "Brand Partnerships"],
    image: "https://readdy.ai/api/search-image?query=music%20director%20on%20stage%20with%20band%20during%20rehearsal%2C%20dramatic%20stage%20lighting%2C%20artistic%20direction%2C%20musicians%20in%20background%2C%20cinematic%20photography%2C%20dark%20moody%20atmosphere%2C%20warm%20spotlight%2C%20professional%20music%20industry&width=800&height=600&seq=svc-dir-v2&orientation=portrait",
  },
  {
    id: "masterclass",
    tag: "Education",
    title: "Masterclass & Coaching",
    description:
      "Intensive one-on-one and group masterclasses designed to elevate your musicianship. Whether you're a beginner finding your groove or a seasoned pro refining your technique, Joseph's teaching approach is transformative.",
    features: ["1-on-1 Private Lessons", "Group Workshops", "Online Sessions", "Technique Clinics"],
    image: "https://readdy.ai/api/search-image?query=professional%20musician%20teaching%20bass%20guitar%20lesson%20in%20modern%20studio%2C%20close%20up%20hands%20on%20fretboard%2C%20warm%20studio%20lighting%2C%20dark%20background%2C%20intimate%20educational%20setting%2C%20cinematic%20photography%2C%20shallow%20depth%20of%20field&width=800&height=600&seq=svc-masterclass-v2&orientation=portrait",
  },
  {
    id: "session-recording",
    tag: "Studio",
    title: "Session Recording",
    description:
      "Professional session bass recording for albums, film scores, commercials, and digital releases. Remote and in-studio options available with fast turnaround and broadcast-ready quality.",
    features: ["Remote Recording", "In-Studio Sessions", "Film & TV Scoring", "Commercial Jingles"],
    image: "https://readdy.ai/api/search-image?query=professional%20recording%20studio%20session%20with%20large%20condenser%20microphone%20in%20isolation%20booth%2C%20dark%20moody%20atmosphere%2C%20warm%20amber%20lighting%2C%20acoustic%20panels%20on%20walls%2C%20cinematic%20photography%2C%20high%20end%20studio%20equipment&width=800&height=600&seq=svc-session-v2&orientation=portrait",
  },
  {
    id: "mixing-mastering",
    tag: "Post Production",
    title: "Mixing & Mastering",
    description:
      "Polished, radio-ready mixes and masters that translate across all playback systems. Using industry-standard tools and a trained ear, Joseph ensures your music sounds its absolute best everywhere.",
    features: ["Stereo Mixing", "Stem Mastering", "Streaming Optimization", "Vinyl Mastering"],
    image: "https://readdy.ai/api/search-image?query=audio%20engineer%20at%20large%20mixing%20console%20in%20dark%20professional%20studio%2C%20multiple%20screens%20showing%20audio%20waveforms%2C%20dramatic%20teal%20studio%20lighting%2C%20close%20up%20of%20mixing%20desk%20with%20faders%20and%20knobs%2C%20cinematic%20atmosphere&width=800&height=600&seq=svc-mixing-v2&orientation=portrait",
  },
];

export default function ServicesListSection() {
  return (
    <section className="py-0">
      {/* Services — alternating split layout */}
      {services.map((service, i) => {
        const isEven = i % 2 === 0;
        return (
          <div
            key={service.id}
            className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} min-h-[480px]`}
          >
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative overflow-hidden min-h-[300px] lg:min-h-[480px]">
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              {/* Tag badge */}
              <div className="absolute top-6 left-6 bg-[#1ab8e8] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest z-10">
                {service.tag}
              </div>
            </div>

            {/* Text Side — white background */}
            <div className="w-full lg:w-1/2 bg-white flex items-center">
              <div className="px-8 md:px-12 lg:px-16 py-12 lg:py-16 w-full">
                <p className="text-[#1ab8e8] text-xs font-bold uppercase tracking-widest mb-3">
                  {service.tag}
                </p>
                <h3 className="text-gray-900 text-xl md:text-2xl font-black uppercase tracking-wide leading-tight mb-4">
                  {service.title}
                </h3>
                <div className="w-10 h-0.5 bg-[#1ab8e8] mb-5" />
                <p className="text-gray-500 text-sm leading-relaxed mb-7">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                        <i className="ri-checkbox-circle-fill text-[#1ab8e8] text-sm" />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#0d0d0d] text-white text-xs font-bold px-6 py-3 rounded uppercase tracking-wider hover:bg-[#1ab8e8] transition-colors whitespace-nowrap cursor-pointer"
                >
                  Book This Service
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-arrow-right-line text-sm" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
