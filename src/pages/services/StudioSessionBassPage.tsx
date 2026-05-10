import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import CTASection from "@/components/feature/CTASection";
import { mediaItems } from "@/mocks/media";
import RequestAQuoteSection, { OtherServicesSection } from "./components/RequestAQuoteSection";

import studioSessionImg from "@/assets/home/servicesstudio.jpg";

const opportunities = [
  { icon: "ri-album-line", title: "Album Sessions", desc: "Record foundational bass tracks for full-length albums across any genre — gospel, R&B, jazz, pop, and beyond." },
  { icon: "ri-film-line", title: "Film & TV Scoring", desc: "High-quality bass recording for film scores, TV soundtracks, and advertising campaigns with fast turnaround." },
  { icon: "ri-wifi-line", title: "Remote Recording", desc: "Professional studio-quality recording delivered remotely. Share your files and receive broadcast-ready tracks." },
  { icon: "ri-advertisement-line", title: "Commercials & Jingles", desc: "Punchy, memorable bass lines for radio and TV commercials that cut through and leave an impression." },
];

const process = [
  { num: "01", icon: "ri-file-music-line", title: "Project Brief", desc: "Share your reference tracks, tempo, key, feel, and any specific stylistic or technical requirements." },
  { num: "02", icon: "ri-play-circle-line", title: "Demo Pass", desc: "Receive a quick demo take for feedback and direction before the full recording session begins." },
  { num: "03", icon: "ri-record-circle-line", title: "Full Recording", desc: "Multiple takes recorded with full articulation, dynamics, and professional DI and mic'd options." },
  { num: "04", icon: "ri-send-plane-line", title: "File Delivery", desc: "Clean, labelled, mixed-ready audio files delivered in your preferred format within the agreed timeframe." },
];

const displayVideos = mediaItems.filter((m) => m.category === "studio").concat(mediaItems).slice(0, 3);

export default function StudioSessionBassPage() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);

  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section className="relative h-[250px] md:h-[350px] w-full">
        <img src={studioSessionImg} alt="Studio & Session Bass" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-8 text-center px-4">
          <h1 className="text-[32px] md:text-[48px] font-black text-white uppercase tracking-widest mb-1 md:mb-2">
            STUDIO & SESSION BASS
          </h1>
          <div className="flex items-center gap-2 text-[10px] md:text-[12px] text-white/80 font-medium tracking-widest flex-wrap justify-center">
            <Link to="/" className="hover:text-white transition-colors">HOME</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white transition-colors">SERVICES</Link>
            <span>/</span>
            <span className="text-[#2596BE]">STUDIO & SESSION BASS</span>
          </div>
        </div>
      </section>

      {/* ══ SESSION OPPORTUNITIES ═════════════════════════════════════ */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#2596BE] text-xs font-bold uppercase tracking-[0.3em] mb-2">Session Uses</p>
          <h2 className="text-[#111] text-2xl md:text-3xl font-black uppercase tracking-wide mb-10">Session Opportunities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {opportunities.map((o) => (
              <div key={o.title} className="border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#2596BE]/10 flex items-center justify-center mb-4">
                  <i className={`${o.icon} text-[#2596BE] text-xl`} />
                </div>
                <h3 className="text-[#111] text-sm font-black uppercase tracking-wide mb-2">{o.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ VIDEOS & AUDIOS ═══════════════════════════════════════════ */}
      <section id="videos" className="bg-[#0d0d0d] py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#2596BE] text-xs font-bold uppercase tracking-[0.3em] mb-2">Watch & Listen</p>
          <h2 className="text-white text-2xl md:text-3xl font-black uppercase tracking-wide mb-10">Videos & Audios</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="relative aspect-video bg-black overflow-hidden">
                {playingId === displayVideos[0].id ? (
                  <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${displayVideos[0].youtubeId}?autoplay=1`} title={displayVideos[0].title} allow="autoplay; encrypted-media" allowFullScreen />
                ) : (
                  <>
                    <img src={displayVideos[0].thumbnail} alt={displayVideos[0].title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40" />
                    <button onClick={() => setPlayingId(displayVideos[0].id)} className="absolute inset-0 flex items-center justify-center cursor-pointer">
                      <div className="w-16 h-16 rounded-full bg-[#2596BE] flex items-center justify-center hover:scale-110 transition-transform">
                        <i className="ri-play-fill text-white text-2xl ml-1" />
                      </div>
                    </button>
                    <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-0.5">{displayVideos[0].duration}</span>
                  </>
                )}
              </div>
              <div className="mt-3">
                <h3 className="text-white text-sm font-bold">{displayVideos[0].title}</h3>
                <p className="text-gray-400 text-xs mt-1">{displayVideos[0].date} · {displayVideos[0].views} views</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {displayVideos.slice(1).map((v) => (
                <div key={v.id} className="flex gap-3 group cursor-pointer" onClick={() => setPlayingId(v.id)}>
                  <div className="relative w-32 h-20 flex-shrink-0 overflow-hidden bg-black">
                    <img src={v.thumbnail} alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-7 h-7 rounded-full bg-[#2596BE]/80 flex items-center justify-center">
                        <i className="ri-play-fill text-white text-xs ml-0.5" />
                      </div>
                    </div>
                    <span className="absolute bottom-1 right-1 bg-black/70 text-white text-[10px] px-1">{v.duration}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-gray-200 text-xs font-bold leading-snug group-hover:text-[#2596BE] transition-colors line-clamp-2">{v.title}</h4>
                    <p className="text-gray-500 text-[10px] mt-1">{v.date}</p>
                  </div>
                </div>
              ))}
              <Link to="/media" className="mt-auto text-[#2596BE] text-xs font-bold hover:underline inline-flex items-center gap-1">
                View All Media <i className="ri-arrow-right-line" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══════════════════════════════════════════════ */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#2596BE] text-xs font-bold uppercase tracking-[0.3em] mb-2">Process</p>
          <h2 className="text-[#111] text-2xl md:text-3xl font-black uppercase tracking-wide mb-12">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.num}>
                <p className="text-gray-200 text-5xl font-black mb-3">{step.num}</p>
                <div className="w-10 h-10 rounded-full border border-[#2596BE] flex items-center justify-center mb-3">
                  <i className={`${step.icon} text-[#2596BE] text-base`} />
                </div>
                <h3 className="text-[#111] text-sm font-black uppercase tracking-wide mb-2">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ REQUEST A QUOTE ═══════════════════════════════════════════ */}
      <RequestAQuoteSection currentServiceId="studio-session-bass" />

      {/* ══ OTHER SERVICES ════════════════════════════════════════════ */}
      <OtherServicesSection currentServiceId="studio-session-bass" />

      <CTASection />
      <Footer />
    </div>
  );
}
