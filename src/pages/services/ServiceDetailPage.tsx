import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import CTASection from "@/components/feature/CTASection";

import livePerformanceImg from "@/assets/home/servicesliveperformance.jpg";
import studioSessionImg from "@/assets/home/servicesstudio.jpg";
import musicProductionImg from "@/assets/home/servicesmusicproduction.jpg";
import musicDirectionImg from "@/assets/home/servicesmusicdirection.jpg";

const servicesData = [
  {
    id: "live-performance",
    title: "LIVE PERFORMANCE",
    subtitle: "Stage & Touring",
    image: livePerformanceImg,
    heroImage: livePerformanceImg,
    description:
      "Delivering world-class live bass performance for concerts, tours, corporate events, and private shows. Joseph brings electrifying energy and precision to every stage, creating unforgettable experiences that captivate audiences of all sizes.",
    longDescription:
      "With over 15 years of live performance experience spanning global tours and intimate private shows, Joseph Wilson brings unmatched professionalism and stage presence to every engagement. His dynamic playing style adapts seamlessly across genres — from jazz and R&B to rock and gospel — ensuring every audience walks away moved by the music.\n\nWhether you're organising a stadium concert, a corporate gala, or an intimate private event, Joseph's live performance service is crafted to elevate your occasion. Every set is meticulously prepared, working closely with your production team to deliver a seamless, electrifying performance.",
    features: [
      { icon: "ri-mic-line", label: "Concert & Tour Support" },
      { icon: "ri-building-line", label: "Corporate Events" },
      { icon: "ri-vip-crown-line", label: "Private Shows" },
      { icon: "ri-music-2-line", label: "Festival Performances" },
    ],
    process: [
      { step: "01", title: "Initial Consultation", desc: "Discuss your event vision, requirements, and musical direction." },
      { step: "02", title: "Set List Planning", desc: "Curate the perfect set list tailored to your audience and event atmosphere." },
      { step: "03", title: "Rehearsal & Soundcheck", desc: "Full preparation to ensure flawless delivery on the day." },
      { step: "04", title: "Live Performance", desc: "Electrifying, professional performance that exceeds expectations." },
    ],
  },
  {
    id: "studio-session-bass",
    title: "STUDIO & SESSION BASS",
    subtitle: "Recording & Session Work",
    image: studioSessionImg,
    heroImage: studioSessionImg,
    description:
      "Professional studio and session bass recording for albums, film scores, commercials, and digital releases. Remote and in-studio options available with fast turnaround and broadcast-ready quality.",
    longDescription:
      "Joseph Wilson's studio and session bass services bring world-class tone, groove, and musicality to your recordings. Whether you need a thunderous low-end anchor for a pop record or a nuanced, melodic bassline for a film score, Joseph delivers with precision and creativity.\n\nAvailable for both remote sessions and in-studio work, Joseph works efficiently to meet your deadlines without compromising quality. His extensive genre experience means he can adapt to any musical style, delivering exactly what your project needs — often exceeding your initial vision.",
    features: [
      { icon: "ri-record-circle-line", label: "Remote Recording" },
      { icon: "ri-home-line", label: "In-Studio Sessions" },
      { icon: "ri-film-line", label: "Film & TV Scoring" },
      { icon: "ri-advertisement-line", label: "Commercial Jingles" },
    ],
    process: [
      { step: "01", title: "Project Brief", desc: "Share your reference tracks, tempo, feel, and any specific requirements." },
      { step: "02", title: "Demo Pass", desc: "A quick demo take is sent for your approval before final recording." },
      { step: "03", title: "Full Recording", desc: "Professional quality recording with multiple takes and variations." },
      { step: "04", title: "Delivery", desc: "Clean, labelled audio files delivered within the agreed timeframe." },
    ],
  },
  {
    id: "music-production",
    title: "MUSIC PRODUCTION",
    subtitle: "Concept to Master",
    image: musicProductionImg,
    heroImage: musicProductionImg,
    description:
      "Full-service music production from concept to final master. Leveraging state-of-the-art studio equipment and years of industry experience, Joseph crafts sonic landscapes that push creative boundaries.",
    longDescription:
      "Joseph Wilson's music production service offers a complete, end-to-end creative partnership. From the initial spark of an idea to a polished, radio-ready master, Joseph guides every step of the process with meticulous attention to detail and a deep understanding of what makes music resonate.\n\nUsing industry-leading tools and a finely tuned ear developed through years of professional studio work, Joseph crafts productions that feel both contemporary and timeless. Every arrangement, every sonic texture, and every mix decision is made in service of your artistic vision.",
    features: [
      { icon: "ri-rhythm-line", label: "Beat Making & Arrangement" },
      { icon: "ri-record-circle-line", label: "Recording & Tracking" },
      { icon: "ri-equalizer-line", label: "Mixing & Mastering" },
      { icon: "ri-sound-module-line", label: "Sound Design" },
    ],
    process: [
      { step: "01", title: "Creative Brief", desc: "Define the sound, mood, references, and goals for your project." },
      { step: "02", title: "Pre-Production", desc: "Arrangement, programming, and demo production for your approval." },
      { step: "03", title: "Recording & Production", desc: "Full studio recording and production to professional standard." },
      { step: "04", title: "Mix & Master", desc: "Polished final mix and master ready for release on all platforms." },
    ],
  },
  {
    id: "music-direction",
    title: "MUSIC DIRECTION",
    subtitle: "Creative Leadership",
    image: musicDirectionImg,
    heroImage: musicDirectionImg,
    description:
      "Strategic creative leadership for artists, labels, and brands. From album concept to live show production, Joseph guides musical vision with a deep understanding of genre, audience, and artistic integrity.",
    longDescription:
      "As a music director, Joseph Wilson brings a rare combination of creative vision and strategic thinking. He understands not just how music sounds, but how it connects — with audiences, with brand identity, and with cultural moments. This holistic perspective makes him an invaluable partner for artists, labels, and brands looking to make a lasting impact.\n\nFrom defining the sonic identity of an album to orchestrating the musical flow of a live show, Joseph's music direction service ensures that every element serves the larger artistic narrative. He collaborates closely with all stakeholders, balancing creative ambition with commercial reality.",
    features: [
      { icon: "ri-lightbulb-line", label: "Album Creative Direction" },
      { icon: "ri-mic-2-line", label: "Live Show Production" },
      { icon: "ri-user-star-line", label: "Artist Development" },
      { icon: "ri-shake-hands-line", label: "Brand Partnerships" },
    ],
    process: [
      { step: "01", title: "Vision Session", desc: "Deep dive into your artistic goals, audience, and sonic direction." },
      { step: "02", title: "Creative Blueprint", desc: "Develop a comprehensive creative roadmap for your project." },
      { step: "03", title: "Execution", desc: "Hands-on direction throughout recording, production, and performance." },
      { step: "04", title: "Review & Refine", desc: "Iterative feedback and refinement until the vision is fully realised." },
    ],
  },
];

export default function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  const service = servicesData.find((s) => s.id === serviceId);
  const otherServices = servicesData.filter((s) => s.id !== serviceId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] flex flex-col items-center justify-center gap-4">
        <p className="text-white text-xl font-bold">Service not found</p>
        <Link to="/services" className="text-[#2596BE] hover:underline">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* ── Hero Banner ── */}
      <div className="relative h-[250px] md:h-[350px] overflow-hidden">
        <img
          src={service.heroImage}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 mt-6">
          <h1 className="text-2xl md:text-4xl font-black text-white uppercase tracking-widest mb-3">
            {service.title}
          </h1>
          <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#2596BE]">{service.subtitle}</span>
          </div>
        </div>
      </div>

      {/* ── Main Content: Image Left + Text Right ── */}
      <section className="grid md:grid-cols-2 min-h-[480px]">
        {/* Image */}
        <div className="relative overflow-hidden min-h-[300px] md:min-h-[480px]">
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

        {/* Text */}
        <div className="bg-white flex items-center justify-center px-6 py-12 md:px-14 md:py-16">
          <div className="max-w-lg w-full">
            <p className="text-[#2596BE] text-xs font-bold uppercase tracking-widest mb-3">
              {service.subtitle}
            </p>
            <h2 className="text-[#111] text-2xl md:text-3xl font-black uppercase tracking-wide leading-tight mb-4">
              {service.title}
            </h2>
            <div className="w-10 h-0.5 bg-[#2596BE] mb-5" />
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              {service.longDescription.split("\n\n").map((para, i) => (
                <span key={i}>
                  {para}
                  {i < service.longDescription.split("\n\n").length - 1 && (
                    <><br /><br /></>
                  )}
                </span>
              ))}
            </p>

            {/* Features grid */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {service.features.map((feat) => (
                <li key={feat.label} className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="w-8 h-8 rounded-full bg-[#2596BE]/10 flex items-center justify-center flex-shrink-0">
                    <i className={`${feat.icon} text-[#2596BE] text-base`} />
                  </div>
                  {feat.label}
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="inline-block bg-[#2596BE] text-white text-xs font-bold px-8 py-3.5 uppercase tracking-widest hover:bg-[#1C7898] transition-colors"
            >
              Book This Service
            </Link>
          </div>
        </div>
      </section>

      {/* ── Process Section ── */}
      <section className="bg-[#0d0d0d] py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#2596BE] text-xs font-bold uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-white text-2xl md:text-3xl font-black uppercase tracking-wide">
              The Process
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-14 h-14 rounded-full border-2 border-[#2596BE] flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#2596BE] text-lg font-black">{step.step}</span>
                </div>
                <h3 className="text-white text-sm font-black uppercase tracking-wide mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other Services ── */}
      <section className="bg-white py-14 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[#111] text-xl md:text-2xl font-black uppercase tracking-wide">
              Other Services
            </h2>
            <Link
              to="/services"
              className="text-[#2596BE] text-sm font-bold hover:underline whitespace-nowrap"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <div
                key={s.id}
                onClick={() => navigate(`/services/${s.id}`)}
                className="group cursor-pointer"
              >
                <div className="relative h-52 overflow-hidden mb-4">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-sm font-black uppercase tracking-wide leading-tight">
                      {s.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-3">
                  {s.description}
                </p>
                <span className="inline-flex items-center gap-1 text-[#2596BE] text-xs font-bold uppercase tracking-widest group-hover:gap-2 transition-all">
                  Learn More <i className="ri-arrow-right-line" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
