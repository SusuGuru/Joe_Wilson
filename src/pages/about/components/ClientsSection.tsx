const clientLogos = [
  {
    name: "Rock Concert",
    src: "https://readdy.ai/api/search-image?query=music%20band%20vintage%20logo%20emblem%20black%20white%20circular%20badge%20rock%20concert&width=160&height=100&seq=client-logo-1&orientation=landscape",
  },
  {
    name: "Nick Concert",
    src: "https://readdy.ai/api/search-image?query=vintage%20music%20label%20logo%20black%20white%20nick%20concert%20badge%20retro%20horizontal&width=160&height=100&seq=client-logo-2&orientation=landscape",
  },
  {
    name: "Manager Rhythm",
    src: "https://readdy.ai/api/search-image?query=music%20management%20logo%20black%20white%20rhythm%20music%20badge%20headphones%20crown&width=160&height=100&seq=client-logo-3&orientation=landscape",
  },
  {
    name: "Music Group",
    src: "https://readdy.ai/api/search-image?query=music%20group%20vintage%20logo%20black%20white%20guitar%20badge%20emblem&width=160&height=100&seq=client-logo-4&orientation=landscape",
  },
  {
    name: "Jazz Studio",
    src: "https://readdy.ai/api/search-image?query=jazz%20studio%20vintage%20logo%20black%20white%20saxophone%20music%20badge&width=160&height=100&seq=client-logo-5&orientation=landscape",
  },
  {
    name: "Live Music",
    src: "https://readdy.ai/api/search-image?query=live%20music%20event%20vintage%20logo%20black%20white%20microphone%20badge%20emblem&width=160&height=100&seq=client-logo-6&orientation=landscape",
  },
  {
    name: "Sound Records",
    src: "https://readdy.ai/api/search-image?query=sound%20records%20vintage%20logo%20black%20white%20vinyl%20disc%20badge%20circular&width=160&height=100&seq=client-logo-7&orientation=landscape",
  },
  {
    name: "Modern Music",
    src: "https://readdy.ai/api/search-image?query=modern%20music%20label%20logo%20black%20white%20architectural%20building%20badge&width=160&height=100&seq=client-logo-8&orientation=landscape",
  },
  {
    name: "Vinyl Records",
    src: "https://readdy.ai/api/search-image?query=vinyl%20record%20store%20logo%20black%20white%20circular%20disc%20badge%20monochrome&width=160&height=100&seq=client-logo-9&orientation=landscape",
  },
  {
    name: "Audio Wave",
    src: "https://readdy.ai/api/search-image?query=audio%20wave%20music%20logo%20black%20white%20sound%20bar%20equalizer%20badge&width=160&height=100&seq=client-logo-10&orientation=landscape",
  },
];

// Compute border logic for arbitrary cols
function getBorderStyle(i: number, cols: number, total: number) {
  const isLastCol = (i + 1) % cols === 0;
  const isLastRow = i >= total - cols;
  return {
    borderRight: !isLastCol ? "1px solid #e5e7eb" : "none",
    borderBottom: !isLastRow ? "1px solid #e5e7eb" : "none",
  };
}

export default function ClientsSection() {
  const total = clientLogos.length;

  return (
    <section className="bg-white py-12 px-4 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-center font-inter font-black uppercase tracking-[0.2em] mb-10"
          style={{ fontSize: "clamp(13px,1.2vw,16px)", color: "#111" }}
        >
          My Clients
        </h2>

        {/* Mobile: 2-col grid */}
        <div
          className="grid grid-cols-2 md:hidden"
          style={{ border: "1px solid #e5e7eb" }}
        >
          {clientLogos.map((client, i) => {
            const cols = 2;
            const style = getBorderStyle(i, cols, total);
            return (
              <div
                key={i}
                className="flex items-center justify-center overflow-hidden"
                style={{ height: 80, ...style }}
              >
                <img
                  src={client.src}
                  alt={client.name}
                  className="w-full h-full object-contain p-2"
                  style={{ filter: "grayscale(100%)" }}
                />
              </div>
            );
          })}
        </div>

        {/* Desktop: 5-col grid */}
        <div
          className="hidden md:grid md:grid-cols-5"
          style={{ border: "1px solid #e5e7eb" }}
        >
          {clientLogos.map((client, i) => {
            const cols = 5;
            const style = getBorderStyle(i, cols, total);
            return (
              <div
                key={i}
                className="flex items-center justify-center overflow-hidden"
                style={{ height: 100, ...style }}
              >
                <img
                  src={client.src}
                  alt={client.name}
                  className="w-full h-full object-contain p-3"
                  style={{ filter: "grayscale(100%)" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
