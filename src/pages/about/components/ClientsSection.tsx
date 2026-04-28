const clients = [
  { name: "Sony Music", icon: "ri-disc-line" },
  { name: "Universal Music", icon: "ri-music-line" },
  { name: "Warner Bros", icon: "ri-film-line" },
  { name: "Atlantic Records", icon: "ri-record-circle-line" },
  { name: "Def Jam", icon: "ri-headphone-line" },
  { name: "Capitol Records", icon: "ri-album-line" },
  { name: "Interscope", icon: "ri-equalizer-line" },
  { name: "Columbia Records", icon: "ri-radio-line" },
  { name: "RCA Records", icon: "ri-speaker-line" },
  { name: "Epic Records", icon: "ri-music-2-line" },
];

export default function ClientsSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-xl font-black text-gray-900 tracking-widest uppercase mb-12">
          My Clients
        </h2>
        <div className="grid grid-cols-5 gap-6">
          {clients.map((client, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-2 py-5 border border-gray-100 rounded hover:border-[#1ab8e8] transition-colors group cursor-pointer"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <i className={`${client.icon} text-2xl text-gray-400 group-hover:text-[#1ab8e8] transition-colors`} />
              </div>
              <span className="text-xs text-gray-500 text-center font-medium group-hover:text-gray-700 transition-colors">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
