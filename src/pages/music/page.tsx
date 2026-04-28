import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import CTASection from "@/pages/home/components/CTASection";
import { albums } from "@/mocks/albums";

const ALBUMS_PER_PAGE = 6;

export default function MusicPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(albums.length / ALBUMS_PER_PAGE);
  const paginatedAlbums = albums.slice(
    (currentPage - 1) * ALBUMS_PER_PAGE,
    currentPage * ALBUMS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Navbar />

      {/* ── Hero Banner ── */}
      <section className="relative h-52 md:h-64 overflow-hidden mt-[52px]">
        <img
          src="https://readdy.ai/api/search-image?query=drum%20kit%20close%20up%20dark%20studio%20background%2C%20professional%20percussion%20instruments%2C%20dramatic%20lighting%2C%20dark%20moody%20atmosphere%2C%20music%20studio%20photography%2C%20cinematic&width=1440&height=300&seq=music-hero-bg&orientation=landscape"
          alt="Music Hero"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-[#0d0d0d]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-widest">
            Albums
          </h1>
          <div className="flex items-center gap-2 mt-2 text-xs text-gray-400 flex-wrap justify-center">
            <Link to="/" className="hover:text-white cursor-pointer transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#1ab8e8]">Albums</span>
          </div>
        </div>
      </section>

      {/* ── Albums Grid ── */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {paginatedAlbums.map((album) => (
              <Link
                key={album.id}
                to={`/music/${album.id}`}
                className="group cursor-pointer block bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-[#1ab8e8]/40 transition-all duration-300"
              >
                {/* Cover */}
                <div className="w-full aspect-[4/3] overflow-hidden relative">
                  <img
                    src={album.coverImage}
                    alt={album.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 flex items-center justify-center bg-[#1ab8e8] rounded-full shadow-xl">
                      <i className="ri-play-fill text-white text-2xl" />
                    </div>
                  </div>

                  {/* Year badge */}
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-[#1ab8e8] text-xs font-bold px-2 py-0.5 rounded-full border border-[#1ab8e8]/30">
                    {album.year}
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-white text-sm font-black uppercase tracking-wide truncate group-hover:text-[#1ab8e8] transition-colors">
                    {album.title}
                  </h3>
                  <p className="text-gray-500 text-xs mt-1">{album.artist}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-gray-600 flex items-center gap-1">
                      <i className="ri-music-2-line text-xs" />
                      {album.tracks.length} tracks
                    </span>
                    <span className="text-xs text-[#1ab8e8] font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Listen <i className="ri-arrow-right-line text-xs" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* ── Pagination ── */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-1 mt-12">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 rounded-lg cursor-pointer transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <i className="ri-arrow-left-s-line text-base" />
              </button>

              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-9 h-9 flex items-center justify-center text-sm font-semibold rounded-lg cursor-pointer transition-colors whitespace-nowrap ${
                    currentPage === i + 1
                      ? "bg-[#1ab8e8] text-white"
                      : "text-gray-500 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 rounded-lg cursor-pointer transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <i className="ri-arrow-right-s-line text-base" />
              </button>
            </div>
          )}
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
