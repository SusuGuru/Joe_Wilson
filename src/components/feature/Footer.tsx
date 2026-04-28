import { Link } from "react-router-dom";

const socialLinks = [
  { label: "FACEBOOK", icon: "ri-facebook-fill", href: "#" },
  { label: "TWITTER", icon: "ri-twitter-x-fill", href: "#" },
  { label: "YOUTUBE", icon: "ri-youtube-fill", href: "#" },
  { label: "SPOTIFY", icon: "ri-spotify-fill", href: "#" },
];

const upcomingEvents = [
  { date: "Apr 18", event: "London Proms Apollo" },
  { date: "Apr 18", event: "Creamfields South Festival, Chelmsford (UK)" },
  { date: "Apr 18", event: "Summerburst Festival, Göteborg (SE)" },
  { date: "Apr 12", event: "XS, Las Vegas (US)" },
];

const quickMenuLeft = ["Home", "Events", "Gallery", "Videos"];
const quickMenuRight = ["Discography", "News", "Shop", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a]">
      {/* Social Bar */}
      <div className="border-t border-gray-800">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-800">
          {socialLinks.map((s, i) => (
            <a
              key={i}
              href={s.href}
              rel="nofollow"
              className="relative flex items-center justify-center gap-3 py-5 hover:bg-white/5 transition-colors cursor-pointer group overflow-hidden"
              style={{
                backgroundImage: `url(https://readdy.ai/api/search-image?query=dark%20abstract%20music%20texture%20background%20subtle%20pattern%20$%7Bs.label.toLowerCase%28%29%7D&width=300&height=80&seq=social-bg-${i}&orientation=landscape)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className={`${s.icon} text-white text-lg`} />
                </div>
                <span className="text-white text-sm font-bold tracking-widest whitespace-nowrap">{s.label}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer Content */}
      <div className="px-4 sm:px-6 md:px-8 py-8 md:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {/* Logo & Socials */}
        <div className="text-center sm:text-left">
          <Link to="/" className="inline-flex items-center gap-1 mb-4 cursor-pointer">
            <img
              src="https://static.readdy.ai/image/bd3e65a9c2956e637f2d341da068edd0/e146ec11c65cd03aa6e7804f75980bc0.png"
              alt="Logo"
              className="w-7 h-7 object-contain"
            />
            <span className="text-base font-bold">
              <span className="text-white">Joseph</span>
              <span className="text-[#1ab8e8]">Wilson</span>
            </span>
          </Link>
          <div className="flex gap-3 mt-2 justify-center sm:justify-start">
            <a href="#" rel="nofollow" className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer">
              <i className="ri-apple-fill text-base" />
            </a>
            <a href="#" rel="nofollow" className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer">
              <i className="ri-soundcloud-fill text-base" />
            </a>
            <a href="#" rel="nofollow" className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer">
              <i className="ri-spotify-fill text-base" />
            </a>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="text-center sm:text-left">
          <h4 className="text-white text-sm font-semibold mb-4">
            <a href="#events">Upcoming Events</a>
          </h4>
          <ul className="space-y-2">
            {upcomingEvents.map((ev, i) => (
              <li key={i} className="flex flex-col sm:flex-row gap-1 sm:gap-3 text-xs text-gray-400">
                <span className="text-[#1ab8e8] whitespace-nowrap font-medium">{ev.date}</span>
                <span>{ev.event}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Menu */}
        <div className="text-center sm:text-left">
          <h4 className="text-white text-sm font-semibold mb-4">
            <a href="#menu">Quick Menu</a>
          </h4>
          <div className="flex gap-8 justify-center sm:justify-start">
            <ul className="space-y-2">
              {quickMenuLeft.map((item, i) => (
                <li key={i}>
                  <a href="#" rel="nofollow" className="text-xs text-gray-400 hover:text-white cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {quickMenuRight.map((item, i) => (
                <li key={i}>
                  <a href="#" rel="nofollow" className="text-xs text-gray-400 hover:text-white cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Latest Released */}
        <div className="text-center sm:text-left">
          <h4 className="text-white text-sm font-semibold mb-4">
            <a href="#latest">Latest Released</a>
          </h4>
          <div className="w-32 h-32 rounded overflow-hidden mx-auto sm:mx-0">
            <img
              src="https://readdy.ai/api/search-image?query=album%20cover%20art%20astronaut%20space%20dark%20cinematic%20sci-fi%20music%20album%20artwork%20with%20title%20text%2C%20deep%20space%20background%2C%20dramatic%20lighting%2C%20professional%20album%20design&width=128&height=128&seq=album-cover-1&orientation=squarish"
              alt="Latest Album"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
