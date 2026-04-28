import { useState } from "react";

const allImages = [
  {
    src: "https://storage.readdy-site.link/project_files/c0c1db3d-22db-46b5-85e9-428db5f1168e/776fe232-b277-4848-adde-1cf0d56a56ec_edf73cee09a62960a566ea7adbf30511f42b6755.jpg?v=9d29599e694d26cccfb72657ce10479e",
    alt: "Live Performance",
  },
  {
    src: "https://storage.readdy-site.link/project_files/c0c1db3d-22db-46b5-85e9-428db5f1168e/908cad0e-6401-4cdb-ae37-8b2e38e68859_24473fcacab6f95bd4c8c317d99d5622234c9af4.jpg?v=71495332d971af1f248d1a539af85496",
    alt: "Studio Session",
  },
  {
    src: "https://storage.readdy-site.link/project_files/c0c1db3d-22db-46b5-85e9-428db5f1168e/8c7589c5-be4f-41bf-8228-67bd61c5dccb_76cb80f2238d91883f215bcec012271f88f0b264.jpg?v=b67a46aecf7687a7abde3c3823b8a390",
    alt: "Festival",
  },
  {
    src: "https://storage.readdy-site.link/project_files/c0c1db3d-22db-46b5-85e9-428db5f1168e/ab70161a-94f9-47c7-b6c6-de1f83702c36_70c8783fd8f9ee78dd82f7bb3c33e4e1665d959c.jpg?v=2af03a3a8f75ea0a6b647501b776c9b0",
    alt: "Bass Close Up",
  },
  {
    src: "https://storage.readdy-site.link/project_files/c0c1db3d-22db-46b5-85e9-428db5f1168e/1be91459-de4e-43ae-b118-7e6410ba0e95_f67186e974523c7b2e3db068af38f94bc6f61196.jpg?v=e5784dd5201defe7779ce338aad73cd5",
    alt: "Recording",
  },
  {
    src: "https://storage.readdy-site.link/project_files/c0c1db3d-22db-46b5-85e9-428db5f1168e/3eca50a3-2715-48ac-884b-2f5d2bbc33f9_3898dacb2de807a81dd46ce89be953d58fff9b4e.jpg?v=c2db65123c5939b87fac855c55029650",
    alt: "DJ Set",
  },
];

export default function MomentsSection() {
  const [page, setPage] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 px-8 md:px-16">
      <h2 className="text-center text-xl font-black text-gray-900 mb-10 tracking-widest uppercase">
        Moments
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {allImages.map((img, i) => (
          <div
            key={i}
            className="overflow-hidden group cursor-pointer relative"
            onClick={() => setLightbox(i)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-48 md:h-56 object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <div className="w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <i className="ri-zoom-in-line text-white text-xl" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-8">
        {[0, 1, 2, 3].map((i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
              page === i ? "bg-gray-900" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white cursor-pointer"
            onClick={() => setLightbox(null)}
          >
            <i className="ri-close-line text-2xl" />
          </button>
          <img
            src={allImages[lightbox].src}
            alt={allImages[lightbox].alt}
            className="max-w-4xl w-full max-h-[80vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white cursor-pointer"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + allImages.length) % allImages.length); }}
          >
            <i className="ri-arrow-left-s-line text-3xl" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white cursor-pointer"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % allImages.length); }}
          >
            <i className="ri-arrow-right-s-line text-3xl" />
          </button>
        </div>
      )}
    </section>
  );
}
