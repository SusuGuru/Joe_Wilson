import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mediaItems, type MediaItem } from "@/mocks/media";

const tabs = [
  { key: "videos", label: "Videos" },
  { key: "audios", label: "Audios" },
  { key: "photos", label: "Photos" },
];

const filters = [
  { key: "all", label: "All" },
  { key: "live", label: "Live" },
  { key: "studio", label: "Studio" },
  { key: "masterclass", label: "Masterclass" },
  { key: "interview", label: "Interview" },
];

const PAGE_SIZE = 6;

const categoryColors: Record<string, string> = {
  live: "#1ab8e8",
  studio: "#10b981",
  masterclass: "#f59e0b",
  interview: "#8b5cf6",
};

function VideoCard({ item }: { item: MediaItem }) {
  const navigate = useNavigate();
  return (
    <div className="group cursor-pointer" onClick={() => navigate(`/media/${item.id}`)}
    >
      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black mb-3">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span
            className="text-white text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider"
            style={{ backgroundColor: categoryColors[item.category] ?? "#1ab8e8" }}
          >
            {item.category}
          </span>
        </div>
        {/* Duration */}
        <div className="absolute bottom-3 right-3">
          <span className="bg-black/70 text-white text-xs px-2 py-0.5 rounded">
            {item.duration}
          </span>
        </div>
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 flex items-center justify-center bg-[#1ab8e8] rounded-full group-hover:scale-110 transition-transform">
            <i className="ri-play-fill text-white text-2xl ml-1" />
          </div>
        </div>
      </div>
      <h3 className="text-gray-900 text-sm font-bold mb-1 group-hover:text-[#1ab8e8] transition-colors">
        {item.title}
      </h3>
      <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{item.description}</p>
      <div className="flex items-center gap-3 mt-1">
        <span className="text-gray-400 text-xs">{item.date}</span>
        <span className="text-gray-400 text-xs">{item.views} views</span>
      </div>
    </div>
  );
}

// ─── Streaming Platforms ────────────────────────────────────────────────────
const streamingPlatforms = [
  {
    name: "Spotify",
    icon: "ri-spotify-fill",
    color: "#1DB954",
    url: "#",
    desc: "Listen on Spotify",
  },
  {
    name: "Apple Music",
    icon: "ri-apple-fill",
    color: "#fc3c44",
    url: "#",
    desc: "Listen on Apple Music",
  },
  {
    name: "YouTube Music",
    icon: "ri-youtube-fill",
    color: "#FF0000",
    url: "#",
    desc: "Listen on YouTube Music",
  },
];

// ─── Studio Samples ──────────────────────────────────────────────────────────
const studioSamples = [
  {
    id: "sample-1",
    title: "Gospel Bass Groove — Saxo Clip",
    artist: "Joseph Wilson",
    duration: "3:41",
    progress: 65,
  },
  {
    id: "sample-2",
    title: "Gospel Bass Groove — Saxo Clip",
    artist: "Joseph Wilson",
    duration: "4:12",
    progress: 40,
  },
  {
    id: "sample-3",
    title: "Gospel Bass Groove — Saxo Clip",
    artist: "Joseph Wilson",
    duration: "2:58",
    progress: 80,
  },
];

// ─── Mixing Showcase ─────────────────────────────────────────────────────────
const mixingShowcase = [
  {
    id: "mix-1",
    title: "Progressive Rock Mixdown",
    finalProgress: 55,
    rawProgress: 30,
    thumb: "https://readdy.ai/api/search-image?query=dark%20music%20studio%20mixing%20board%20close%20up%2C%20professional%20audio%20equipment%2C%20dark%20moody%20atmosphere%2C%20recording%20studio%2C%20dramatic%20lighting%2C%20cinematic%20photography&width=500&height=280&seq=mix-thumb-1&orientation=landscape",
  },
  {
    id: "mix-2",
    title: "Progressive Rock Mixdown",
    finalProgress: 70,
    rawProgress: 45,
    thumb: "https://readdy.ai/api/search-image?query=bass%20guitar%20strings%20close%20up%20dark%20background%2C%20professional%20music%20photography%2C%20dramatic%20lighting%2C%20moody%20atmosphere%2C%20studio%20session&width=500&height=280&seq=mix-thumb-2&orientation=landscape",
  },
  {
    id: "mix-3",
    title: "Progressive Rock Mixdown",
    finalProgress: 40,
    rawProgress: 60,
    thumb: "https://readdy.ai/api/search-image?query=musician%20hands%20playing%20bass%20guitar%20dark%20studio%2C%20professional%20photography%2C%20dramatic%20shadows%2C%20music%20recording%20session%2C%20cinematic%20lighting&width=500&height=280&seq=mix-thumb-3&orientation=landscape",
  },
  {
    id: "mix-4",
    title: "Progressive Rock Mixdown",
    finalProgress: 85,
    rawProgress: 20,
    thumb: "https://readdy.ai/api/search-image?query=dark%20concert%20stage%20with%20dramatic%20lighting%2C%20bass%20musician%20performing%2C%20deep%20shadows%2C%20moody%20atmosphere%2C%20professional%20music%20photography&width=500&height=280&seq=mix-thumb-4&orientation=landscape",
  },
];

// ─── Mini Audio Player ────────────────────────────────────────────────────────
function MiniPlayer({
  progress,
  duration,
  label,
  color = "#1ab8e8",
}: {
  progress: number;
  duration: string;
  label: string;
  color?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const [pos, setPos] = useState(progress);

  return (
    <div className="flex items-center gap-2 w-full">
      <button
        onClick={() => setPlaying((p) => !p)}
        className="w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0 cursor-pointer transition-transform hover:scale-110"
        style={{ backgroundColor: color }}
      >
        <i className={`${playing ? "ri-pause-fill" : "ri-play-fill"} text-white text-sm ml-px`} />
      </button>
      <span className="text-white text-xs w-6 flex-shrink-0">0:00</span>
      <div
        className="flex-1 h-1 rounded-full bg-white/20 cursor-pointer relative"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const pct = ((e.clientX - rect.left) / rect.width) * 100;
          setPos(Math.max(0, Math.min(100, pct)));
        }}
      >
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${pos}%`, backgroundColor: color }}
        />
      </div>
      <span className="text-white/60 text-xs w-8 flex-shrink-0 text-right">{duration}</span>
    </div>
  );
}

// ─── Audio Tab ────────────────────────────────────────────────────────────────
function AudioTab() {
  const [likedTracks, setLikedTracks] = useState<Set<string>>(new Set());
  const [playingSample, setPlayingSample] = useState<string | null>(null);
  const [sampleProgress, setSampleProgress] = useState<Record<string, number>>(
    Object.fromEntries(studioSamples.map((s) => [s.id, s.progress]))
  );

  const toggleLike = (id: string) => {
    setLikedTracks((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="space-y-10">
      {/* ── Streaming Platforms ── */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-4 bg-[#1ab8e8] rounded-full" />
          <h3 className="text-gray-900 text-sm font-black uppercase tracking-wider">Listen on Streaming Platforms</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {streamingPlatforms.map((p, i) => (
            <a
              key={i}
              href={p.url}
              rel="nofollow"
              className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg hover:border-[#1ab8e8] transition-colors group cursor-pointer"
            >
              <div
                className="w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0"
                style={{ backgroundColor: `${p.color}20` }}
              >
                <i className={`${p.icon} text-xl`} style={{ color: p.color }} />
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-0.5">{p.desc}</p>
                <p className="text-gray-900 text-sm font-bold group-hover:text-[#1ab8e8] transition-colors">{p.name}</p>
              </div>
              <div className="ml-auto w-5 h-5 flex items-center justify-center text-gray-300 group-hover:text-[#1ab8e8] transition-colors">
                <i className="ri-arrow-right-s-line text-lg" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ── Studio Samples ── */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-4 bg-[#1ab8e8] rounded-full" />
          <h3 className="text-gray-900 text-sm font-black uppercase tracking-wider">Studio Samples</h3>
        </div>
        <div className="space-y-2">
          {studioSamples.map((track) => (
            <div
              key={track.id}
              className="flex items-center gap-4 px-5 py-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {/* Play btn */}
              <button
                onClick={() => setPlayingSample(playingSample === track.id ? null : track.id)}
                className="w-9 h-9 flex items-center justify-center bg-[#1ab8e8] rounded-full flex-shrink-0 hover:scale-105 transition-transform cursor-pointer"
              >
                <i className={`${playingSample === track.id ? "ri-pause-fill" : "ri-play-fill"} text-white text-base ml-px`} />
              </button>

              {/* Title */}
              <div className="w-52 flex-shrink-0 min-w-0">
                <p className="text-gray-900 text-sm font-bold truncate">{track.title}</p>
                <p className="text-gray-400 text-xs">{track.artist}</p>
              </div>

              {/* Progress bar */}
              <div className="flex-1 flex items-center gap-3">
                <div
                  className="flex-1 h-1.5 bg-gray-200 rounded-full cursor-pointer relative"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const pct = ((e.clientX - rect.left) / rect.width) * 100;
                    setSampleProgress((prev) => ({ ...prev, [track.id]: Math.max(0, Math.min(100, pct)) }));
                  }}
                >
                  <div
                    className="h-full bg-[#1ab8e8] rounded-full transition-all"
                    style={{ width: `${sampleProgress[track.id] ?? track.progress}%` }}
                  />
                </div>
                <span className="text-gray-400 text-xs flex-shrink-0">{track.duration}</span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  onClick={() => toggleLike(track.id)}
                  className="w-7 h-7 flex items-center justify-center cursor-pointer transition-colors"
                >
                  <i className={`${likedTracks.has(track.id) ? "ri-heart-fill text-[#1ab8e8]" : "ri-heart-line text-gray-400 hover:text-[#1ab8e8]"} text-base`} />
                </button>
                <button className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-[#1ab8e8] cursor-pointer transition-colors">
                  <i className="ri-share-line text-base" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Mixing Showcase ── */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-4 bg-[#1ab8e8] rounded-full" />
          <h3 className="text-gray-900 text-sm font-black uppercase tracking-wider">Mixing Showcase</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {mixingShowcase.map((mix) => (
            <div key={mix.id} className="relative rounded-lg overflow-hidden bg-gray-900">
              {/* Background image */}
              <div className="relative w-full h-44 overflow-hidden">
                <img
                  src={mix.thumb}
                  alt={mix.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-black/60" />
              </div>

              {/* Badges */}
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="bg-[#1ab8e8] text-white text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                  Final Mix
                </span>
                <span className="bg-white/20 text-white text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                  Raw D
                </span>
              </div>

              {/* Title */}
              <div className="absolute bottom-20 left-4">
                <h4 className="text-white text-base font-black">{mix.title}</h4>
              </div>

              {/* Players */}
              <div className="absolute bottom-3 left-4 right-4 space-y-2">
                <MiniPlayer
                  progress={mix.finalProgress}
                  duration="2:34"
                  label="Final Mix"
                  color="#1ab8e8"
                />
                <MiniPlayer
                  progress={mix.rawProgress}
                  duration="2:34"
                  label="Raw D"
                  color="#ffffff"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function MediaGrid() {
  const [activeTab, setActiveTab] = useState("videos");
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = mediaItems.filter((item) => {
    if (activeFilter !== "all" && item.category !== activeFilter) return false;
    return true;
  });

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <section className="bg-white py-14 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Tabs */}
        <div className="flex items-center gap-1 mb-6 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => { setActiveTab(tab.key); setVisibleCount(PAGE_SIZE); }}
              className={`px-5 py-2.5 text-sm font-bold transition-colors cursor-pointer whitespace-nowrap rounded-t ${
                activeTab === tab.key
                  ? "bg-[#1ab8e8] text-white"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => { setActiveFilter(f.key); setVisibleCount(PAGE_SIZE); }}
              className={`px-4 py-1.5 text-xs font-bold rounded uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === f.key
                  ? "bg-[#1ab8e8] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        {activeTab === "videos" && (
          <>
            {visible.length === 0 ? (
              <div className="text-center py-16 text-gray-400">
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <i className="ri-video-line text-4xl" />
                </div>
                <p className="text-sm">No videos found for this filter.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {visible.map((item) => (
                  <VideoCard key={item.id} item={item} />
                ))}
              </div>
            )}

            {hasMore && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                  className="border border-gray-300 text-gray-700 text-sm font-bold px-8 py-2.5 rounded uppercase tracking-wider hover:border-[#1ab8e8] hover:text-[#1ab8e8] transition-colors cursor-pointer whitespace-nowrap"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        )}

        {activeTab === "audios" && <AudioTab />}

        {activeTab === "photos" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { seq: "photo-1", label: "London Show 2024" },
              { seq: "photo-2", label: "Studio Session" },
              { seq: "photo-3", label: "Berlin Tour" },
              { seq: "photo-4", label: "Jazz Café" },
              { seq: "photo-5", label: "Masterclass" },
              { seq: "photo-6", label: "Amsterdam" },
              { seq: "photo-7", label: "Backstage" },
              { seq: "photo-8", label: "Paris Night" },
            ].map((photo, i) => (
              <div key={i} className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square bg-gray-100">
                <img
                  src={`https://readdy.ai/api/search-image?query=professional%20music%20concert%20photography%2C%20musician%20performing%20on%20stage%2C%20dramatic%20lighting%2C%20dark%20atmosphere%2C%20live%20music%20event%2C%20high%20quality%20photography&width=300&height=300&seq=${photo.seq}&orientation=squarish`}
                  alt={photo.label}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center gap-2">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <i className="ri-zoom-in-line text-white text-2xl" />
                    </div>
                    <span className="text-white text-xs font-bold">{photo.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>


    </section>
  );
}
