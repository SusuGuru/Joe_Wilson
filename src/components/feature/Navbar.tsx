import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Masterclass", path: "/masterclass" },
  { label: "Music", path: "/music" },
  { label: "Media", path: "/media" },
  { label: "Contact", path: "/contact" },
  { label: "Testimonial", path: "/testimonial" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 cursor-pointer">
          <img
            src="https://static.readdy.ai/image/bd3e65a9c2956e637f2d341da068edd0/e146ec11c65cd03aa6e7804f75980bc0.png"
            alt="Logo"
            className="w-8 h-8 object-contain"
          />
          <span className="text-lg font-bold">
            <span className="text-white">Joseph</span>
            <span className="text-[#1ab8e8]">Wilson</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                location.pathname === link.path
                  ? "text-[#1ab8e8]"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/login" className="w-8 h-8 flex items-center justify-center cursor-pointer">
            <i className="ri-user-line text-white text-xl" />
          </Link>
          <Link
            to="/contact"
            className="bg-[#1a7fa8] text-white text-xs font-bold px-4 py-2 rounded uppercase tracking-wider hover:bg-[#166a8f] transition-colors whitespace-nowrap cursor-pointer"
          >
            Book Me
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <i className={`text-2xl ${mobileOpen ? "ri-close-line" : "ri-menu-line"}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 px-6 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm text-gray-300 hover:text-white cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3 mt-3">
            <Link to="/login" className="text-sm text-gray-300 hover:text-white cursor-pointer">
              Login
            </Link>
            <Link
              to="/contact"
              className="bg-[#1a7fa8] text-white text-xs font-bold px-4 py-2 rounded uppercase tracking-wider cursor-pointer"
            >
              Book Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
