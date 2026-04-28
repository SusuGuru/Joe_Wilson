import { useState, useRef } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import CTASection from "@/pages/home/components/CTASection";
import { albums } from "@/mocks/albums";

export default function AlbumDetailPage() {
  const { albumId } = useParams<{ albumId: string }>();
  const album = albums.find((a) => a.id === albumId);
  const otherAlbums = albums.filter((a) => a.id !== albumId).slice(0, 4);

  const [playingTrack, setPlayingTrack] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [liked, setLiked] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  if (!album) return <Navigate to="/music" replace />;

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current) return;
    const rect = progressRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setProgress(pct);
  };

  const toggleTrack = (trackId: string) => {
    setPlayingTrack((prev) => (prev === trackId ? null : trackId));
    setProgress(0);
  };

  const streamingPlatforms = [
    { name: "Spotify", icon: "ri-spotify-fill", color: "#1DB954", bg: "bg-[#1DB954]/10 hover:bg-[#1DB954]/20", border: "border-[#1DB954]/30" },
    { name: "Apple Music", icon: "ri-apple-fill", color: "#fc3c44", bg: "bg-[#fc3c44]/10 hover:bg-[#fc3c44]/20", border: "border-[#fc3c44]/30" },
    { name: "YouTube Music", icon: "ri-youtube-fill", color: "#FF0000", bg: "bg-[#FF0000]/10 hover:bg-[#FF0000]/20", border: "border-[#FF0000]/30" },
    { name: "SoundCloud", icon: "ri-soundcloud-fill", color: "#ff5500", bg: "bg-[#ff5500]/10 hover:bg-[#ff5500]/20", border: "border-[#ff5500]/30" },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Navbar />

      {/* ── Hero Banner ── */}
      <section className="relative h-52 md:h-64 overflow-hidden mt-[52px]">
        <img
          src="https://readdy.ai/api/search-image?query=professional%20music%20studio%20recording%20session%20dark%20moody%20atmosphere%2C%20mixing%20console%2C%20neon%20accent%20lights%2C%20cinematic%20photography%2C%20deep%20shadows%2C%20music%20production%20environment&width=1440&height=320&seq=album-detail-hero-v2&orientation=landscape"
          alt="Album Hero"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-[#0d0d0d]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-widest">
            Single Album
          </h1>
          <div className="flex items-center gap-2 mt-2 text-xs text-gray-400 flex-wrap justify-center">
            <Link to="/" className="hover:text-white cursor-pointer transition-colors">Home</Link>
            <span>/</span>
            <Link to="/music" className="hover:text-white cursor-pointer transition-colors">Albums</Link>
            <span>/</span>
            <span className="text-[#1ab8e8]">{album.title}</span>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 xl:gap-16">

            {/* ── LEFT COLUMN ── */}
            <div className="w-full lg:w-72 xl:w-80 flex-shrink-0">

              {/* Album Cover */}
              <div className="w-full aspect-square overflow-hidden rounded-lg shadow-2xl">
                <img
                  src={album.coverImage}
                  alt={album.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Album Meta */}
              <div className="mt-5">
                <h2 className="text-white text-xl font-black uppercase tracking-wide leading-tight">
                  {album.title}
                </h2>
                <p className="text-[#1ab8e8] text-sm font-medium mt-1">{album.artist}</p>
                <div className="flex items-center gap-3 mt-2 flex-wrap">
                  <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                    {album.year}
                  </span>
                  <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                    {album.tracks.length} Tracks
                  </span>
                </div>
              </div>

              {/* Mini Player */}
              <div className="mt-5 bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3 font-semibold">Now Playing</p>
                <p className="text-white text-sm font-semibold truncate mb-3">
                  {playingTrack
                    ? album.tracks.find((t) => t.id === playingTrack)?.title ?? album.title
                    : album.title}
                </p>

                {/* Progress bar */}
                <div
                  ref={progressRef}
                  className="h-1.5 bg-white/10 rounded-full cursor-pointer mb-2 group"
                  onClick={handleProgressClick}
                >
                  <div
                    className="h-full bg-[#1ab8e8] rounded-full transition-all relative"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-600 mb-4">
                  <span>0:00</span>
                  <span>
                    {playingTrack
                      ? album.tracks.find((t) => t.id === playingTrack)?.duration ?? "0:00"
                      : "0:00"}
                  </span>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between">
                  <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-white cursor-pointer transition-colors">
                    <i className="ri-shuffle-line text-base" />
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer transition-colors">
                    <i className="ri-skip-back-fill text-base" />
                  </button>
                  <button
                    onClick={() => toggleTrack(playingTrack ?? album.tracks[0].id)}
                    className="w-11 h-11 flex items-center justify-center bg-[#1ab8e8] rounded-full text-white cursor-pointer hover:bg-[#14a0cc] transition-colors shadow-lg"
                  >
                    <i className={`text-lg ${playingTrack ? "ri-pause-fill" : "ri-play-fill"}`} />
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer transition-colors">
                    <i className="ri-skip-forward-fill text-base" />
                  </button>
                  <button
                    onClick={() => setLiked(!liked)}
                    className={`w-8 h-8 flex items-center justify-center cursor-pointer transition-colors ${liked ? "text-red-500" : "text-gray-500 hover:text-white"}`}
                  >
                    <i className={liked ? "ri-heart-fill text-base" : "ri-heart-line text-base"} />
                  </button>
                </div>
              </div>

              {/* Streaming Platforms */}
              <div className="mt-6">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3 font-semibold">Stream On</p>
                <div className="grid grid-cols-2 gap-2">
                  {streamingPlatforms.map((p) => (
                    <a
                      key={p.name}
                      href="#"
                      rel="nofollow"
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border ${p.bg} ${p.border} transition-colors cursor-pointer`}
                    >
                      <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                        <i className={`${p.icon} text-sm`} style={{ color: p.color }} />
                      </div>
                      <span className="text-xs text-gray-300 font-medium whitespace-nowrap">{p.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-5 flex items-center gap-2">
                <span className="text-xs text-gray-600 uppercase tracking-widest font-semibold">Share:</span>
                {["ri-facebook-fill", "ri-twitter-x-fill", "ri-instagram-line", "ri-link"].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    rel="nofollow"
                    className="w-7 h-7 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-colors cursor-pointer"
                  >
                    <i className={`${icon} text-xs`} />
                  </a>
                ))}
              </div>
            </div>

            {/* ── RIGHT COLUMN ── */}
            <div className="flex-1 min-w-0">

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-3">About This Album</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{album.description}</p>
              </div>

              {/* Track List */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Tracklist</h3>
                  <span className="text-xs text-gray-600">{album.tracks.length} songs</span>
                </div>

                {/* Header row */}
                <div className="hidden sm:grid grid-cols-[2rem_1fr_auto_auto] gap-4 px-3 pb-2 border-b border-white/5 text-xs text-gray-600 uppercase tracking-widest font-semibold">
                  <span>#</span>
                  <span>Title</span>
                  <span>Duration</span>
                  <span></span>
                </div>

                <div className="divide-y divide-white/5">
                  {album.tracks.map((track, idx) => {
                    const isPlaying = playingTrack === track.id;
                    return (
                      <div
                        key={track.id}
                        className={`group flex items-center gap-3 sm:gap-4 px-3 py-3.5 rounded-lg cursor-pointer transition-colors ${
                          isPlaying ? "bg-[#1ab8e8]/10" : "hover:bg-white/5"
                        }`}
                        onClick={() => toggleTrack(track.id)}
                      >
                        {/* Index / Play icon */}
                        <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
                          {isPlaying ? (
                            <i className="ri-pause-fill text-[#1ab8e8] text-base" />
                          ) : (
                            <>
                              <span className="text-xs text-gray-600 group-hover:hidden">{idx + 1}</span>
                              <i className="ri-play-fill text-gray-400 text-base hidden group-hover:block" />
                            </>
                          )}
                        </div>

                        {/* Title */}
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-semibold truncate transition-colors ${isPlaying ? "text-[#1ab8e8]" : "text-gray-200 group-hover:text-white"}`}>
                            {track.title}
                          </p>
                          <p className="text-xs text-gray-600 mt-0.5 sm:hidden">{track.duration}</p>
                        </div>

                        {/* Duration */}
                        <span className="hidden sm:block text-xs text-gray-500 flex-shrink-0 w-10 text-right">
                          {track.duration}
                        </span>

                        {/* Actions */}
                        <div className="flex items-center gap-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-white cursor-pointer transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <i className="ri-heart-line text-sm" />
                          </button>
                          <button
                            className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-white cursor-pointer transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <i className="ri-more-2-fill text-sm" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Stats Row */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: "Streams", value: "2.4M", icon: "ri-headphone-line" },
                  { label: "Likes", value: "18.2K", icon: "ri-heart-line" },
                  { label: "Shares", value: "4.1K", icon: "ri-share-line" },
                  { label: "Downloads", value: "9.8K", icon: "ri-download-line" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/5 border border-white/10 rounded-lg p-4 flex flex-col items-center gap-1">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <i className={`${stat.icon} text-[#1ab8e8] text-lg`} />
                    </div>
                    <p className="text-white text-lg font-black">{stat.value}</p>
                    <p className="text-gray-600 text-xs uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Artist Card */}
              <div className="mt-8 bg-white/5 border border-white/10 rounded-lg p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="https://static.readdy.ai/image/bd3e65a9c2956e637f2d341da068edd0/1116bc2d1e868b24258c6a2bf8aa98f2.png"
                    alt={album.artist}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Artist</p>
                  <p className="text-white font-black text-base">{album.artist}</p>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed line-clamp-2">
                    Award-winning bassist and music producer with over 15 years of experience across jazz, soul, and contemporary music.
                  </p>
                </div>
                <Link
                  to="/about"
                  className="flex-shrink-0 bg-[#1ab8e8]/10 border border-[#1ab8e8]/30 text-[#1ab8e8] text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#1ab8e8]/20 transition-colors whitespace-nowrap cursor-pointer"
                >
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Other Albums ── */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-white text-lg font-black uppercase tracking-widest">Other Albums</h2>
            <Link
              to="/music"
              className="text-xs text-[#1ab8e8] hover:text-white transition-colors cursor-pointer flex items-center gap-1 whitespace-nowrap"
            >
              View All <i className="ri-arrow-right-line text-sm" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {otherAlbums.map((a) => (
              <Link
                key={a.id}
                to={`/music/${a.id}`}
                className="group cursor-pointer block"
              >
                <div className="w-full aspect-square overflow-hidden rounded-lg relative">
                  <img
                    src={a.coverImage}
                    alt={a.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 flex items-center justify-center bg-[#1ab8e8] rounded-full">
                      <i className="ri-play-fill text-white text-base" />
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-sm font-black text-white uppercase tracking-wide truncate group-hover:text-[#1ab8e8] transition-colors">
                    {a.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{a.artist} · {a.year}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
