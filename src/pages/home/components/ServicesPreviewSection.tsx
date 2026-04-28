import { Link } from "react-router-dom";

const services = [
  {
    tag: "Live Performance",
    title: "Studio & Session Bass",
    image: "https://static.readdy.ai/image/bd3e65a9c2956e637f2d341da068edd0/e6acbd22a058ea5bccbfcec228d8d163.jpeg",
    showButton: false,
  },
  {
    tag: "Music Production",
    title: "Music Production",
    image: "https://storage.readdy-site.link/project_files/c0c1db3d-22db-46b5-85e9-428db5f1168e/777ea6e7-2c96-4854-bf3b-a4abc3bffca4_18dc236e3024acdc4b26c780b0b1f61e4729d067.jpg?v=7b9ddb8cdb7bd2a0ea72d911b005d56d",
    showButton: true,
  },
  {
    tag: "Music Direction",
    title: "Music Direction",
    image: "https://storage.readdy-site.link/project_files/c0c1db3d-22db-46b5-85e9-428db5f1168e/5fa9540f-722f-4a09-8937-f475778f0116_57dd58ddace86e2dbf7b59e4c5231b37426bec09.jpg?v=63da87d61a44ed20c629057cc923191d",
    showButton: false,
  },
];

export default function ServicesPreviewSection() {
  return (
    <section className="bg-white">
      <h2 className="text-center text-xl font-black text-gray-900 py-12 tracking-widest uppercase">
        Services
      </h2>
      {/* Flush full-width grid, no gaps */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {services.map((service, i) => (
          <div key={i} className="relative overflow-hidden group cursor-pointer h-64 md:h-72">
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-[#1ab8e8] text-xs font-bold uppercase tracking-widest mb-1">
                {service.tag}
              </p>
              <h3 className="text-white text-sm md:text-base font-black uppercase leading-tight mb-3">
                {service.title}
              </h3>
              {service.showButton && (
                <Link
                  to="/services"
                  className="inline-block bg-[#1a7fa8] text-white text-xs font-bold px-4 py-1.5 uppercase tracking-wider hover:bg-[#166a8f] transition-colors whitespace-nowrap"
                >
                  Learn More
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
