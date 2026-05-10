import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import CTASection from "@/components/feature/CTASection";
import { mediaItems } from "@/mocks/media";
import RequestAQuoteSection, { OtherServicesSection } from "./components/RequestAQuoteSection";

import livePerformanceImg from "@/assets/home/servicesliveperformance.jpg";

const opportunities = [
  { icon: "ri-building-4-line", title: "Concerts & Tours", desc: "Full headline and support slot performances across all venue sizes, from clubs to arenas." },
  { icon: "ri-vip-crown-line", title: "Corporate Events", desc: "Professional live entertainment for galas, product launches, award ceremonies, and brand events." },
  { icon: "ri-home-heart-line", title: "Private Shows", desc: "Bespoke private performances tailored to your occasion — weddings, celebrations, and exclusive events." },
  { icon: "ri-calendar-event-line", title: "Festivals", desc: "High-energy festival sets designed to captivate large crowds and create lasting memories." },
];

const process = [
  { num: "01", icon: "ri-chat-3-line", title: "Initial Consult", desc: "We discuss your event vision, production requirements, set preferences, and logistical details." },
  { num: "02", icon: "ri-file-list-3-line", title: "Booking & Agreement", desc: "Formalise the engagement with a clear contract covering performance scope, rider, and fees." },
  { num: "03", icon: "ri-music-2-line", title: "Creative Delivery", desc: "Set list planning, rehearsal, soundcheck, and full coordination with your production team." },
  { num: "04", icon: "ri-star-line", title: "Live Delivery", desc: "An electrifying, flawless performance that exceeds expectations and leaves audiences wanting more." },
];

const videos = mediaItems.filter((m) => m.category === "live").slice(0, 3);

export default function LivePerformancePage() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);



  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section className="relative h-[250px] md:h-[350px] w-full">
        <img src={livePerformanceImg} alt="Live Performance" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-8 text-center px-4">
          <h1 className="text-[32px] md:text-[48px] font-black text-white uppercase tracking-widest mb-1 md:mb-2">
            LIVE PERFORMANCE
          </h1>
          <div className="flex items-center gap-2 text-[10px] md:text-[12px] text-white/80 font-medium tracking-widest flex-wrap justify-center">
            <Link to="/" className="hover:text-white transition-colors">HOME</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white transition-colors">SERVICES</Link>
            <span>/</span>
            <span className="text-[#2596BE]">LIVE PERFORMANCE</span>
          </div>
        </div>
      </section>

      {/* ══ PERFORMANCE OPPORTUNITIES ═════════════════════════════════ */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#2596BE] text-xs font-bold uppercase tracking-[0.3em] mb-2">Performance Uses</p>
          <h2 className="text-[#111] text-2xl md:text-3xl font-black uppercase tracking-wide mb-10">Performance Opportunities</h2>
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
            {/* Main featured video */}
            <div className="lg:col-span-2">
              {videos[0] && (
                <div className="relative aspect-video bg-black overflow-hidden">
                  {playingId === videos[0].id ? (
                    <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${videos[0].youtubeId}?autoplay=1`} title={videos[0].title} allow="autoplay; encrypted-media" allowFullScreen />
                  ) : (
                    <>
                      <img src={videos[0].thumbnail} alt={videos[0].title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40" />
                      <button onClick={() => setPlayingId(videos[0].id)} className="absolute inset-0 flex items-center justify-center cursor-pointer">
                        <div className="w-16 h-16 rounded-full bg-[#2596BE] flex items-center justify-center hover:scale-110 transition-transform">
                          <i className="ri-play-fill text-white text-2xl ml-1" />
                        </div>
                      </button>
                      <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-0.5">{videos[0].duration}</span>
                    </>
                  )}
                </div>
              )}
              {videos[0] && (
                <div className="mt-3">
                  <h3 className="text-white text-sm font-bold leading-snug">{videos[0].title}</h3>
                  <p className="text-gray-400 text-xs mt-1">{videos[0].date} · {videos[0].views} views</p>
                </div>
              )}
            </div>
            {/* Sidebar videos */}
            <div className="flex flex-col gap-4">
              {videos.slice(1).map((v) => (
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
      <RequestAQuoteSection currentServiceId="live-performance" />

      {/* ══ OTHER SERVICES ════════════════════════════════════════════ */}
      <OtherServicesSection currentServiceId="live-performance" />

      <CTASection />
      <Footer />
    </div>
  );
}

