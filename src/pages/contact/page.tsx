import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import CTASection from "@/pages/home/components/CTASection";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= 500) {
      setFormData({ ...formData, message: e.target.value });
      setCharCount(e.target.value.length);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.message.length > 500) return;
    const data = new URLSearchParams();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("subject", formData.subject);
    data.append("message", formData.message);
    try {
      await fetch("https://readdy.ai/api/form/d7obgfpuelgcie28hud0", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[160px] sm:h-[200px] md:h-[240px] overflow-hidden mt-[52px]">
        <img
          src="https://static.readdy.ai/image/bd3e65a9c2956e637f2d341da068edd0/aa9dbbf5d3afc2cc83b427d7cebac1db.jpeg"
          alt="Contact Hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-widest uppercase mb-2">
            Contact
          </h1>
          <div className="flex items-center gap-2 text-xs text-gray-300 uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors cursor-pointer">Home</Link>
            <span>/</span>
            <span className="text-[#1ab8e8]">Contact</span>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="px-4 sm:px-8 md:px-16 py-10 md:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

          {/* Left: Info */}
          <div>
            <p className="text-[#1ab8e8] text-xs font-bold tracking-widest uppercase mb-2">Get In Touch</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 uppercase mb-4 md:mb-6 leading-tight">
              Contact Me
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 md:mb-10">
              Whether you&apos;re looking to book Joseph for a live performance, studio session, music direction, or masterclass — reach out and let&apos;s make something great together.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {[
                {
                  icon: "ri-map-pin-line",
                  title: "Location",
                  line1: "New York, USA · London, UK",
                  line2: "Los Angeles, USA",
                },
                {
                  icon: "ri-phone-line",
                  title: "Phone",
                  line1: "+1 (212) 555-0198",
                  line2: "Mon – Fri, 9am – 6pm EST",
                },
                {
                  icon: "ri-mail-line",
                  title: "Email",
                  line1: "booking@josephwilson.com",
                  line2: "For bookings and general inquiries",
                },
                {
                  icon: "ri-time-line",
                  title: "Office Hours",
                  line1: "Monday – Friday: 9:00am – 6:00pm",
                  line2: "Saturday: 10:00am – 2:00pm",
                },
              ].map((card, i) => (
                <div key={i} className="flex items-start gap-4 p-4 md:p-5 border border-gray-100 hover:border-[#1ab8e8]/40 transition-colors">
                  <div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-[#1ab8e8]/10 flex-shrink-0">
                    <i className={`${card.icon} text-[#1ab8e8] text-base md:text-lg`} />
                  </div>
                  <div>
                    <p className="text-gray-900 text-xs font-bold uppercase tracking-wide mb-1">{card.title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{card.line1}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{card.line2}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 mt-6 md:mt-8">
              {[
                { icon: "ri-facebook-fill" },
                { icon: "ri-twitter-x-fill" },
                { icon: "ri-instagram-line" },
                { icon: "ri-youtube-fill" },
                { icon: "ri-spotify-fill" },
              ].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  rel="nofollow"
                  className="w-9 h-9 flex items-center justify-center border border-gray-200 text-gray-400 hover:border-[#1ab8e8] hover:text-[#1ab8e8] transition-colors cursor-pointer"
                >
                  <i className={`${s.icon} text-sm`} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <p className="text-[#1ab8e8] text-xs font-bold tracking-widest uppercase mb-2">Send A Message</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 uppercase mb-6 md:mb-8 leading-tight">
              Drop Me A Line
            </h2>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 border border-gray-100">
                <div className="w-14 h-14 flex items-center justify-center mb-4">
                  <i className="ri-checkbox-circle-line text-[#1ab8e8] text-5xl" />
                </div>
                <p className="text-gray-900 font-black text-lg uppercase tracking-wide">Message Sent!</p>
                <p className="text-gray-500 text-sm mt-2">I&apos;ll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form
                data-readdy-form
                id="contact-page-form"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1ab8e8] bg-white transition-colors"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1ab8e8] bg-white transition-colors"
                    required
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject *"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1ab8e8] bg-white transition-colors"
                  required
                />

                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message *"
                    rows={6}
                    value={formData.message}
                    onChange={handleMessageChange}
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1ab8e8] bg-white transition-colors resize-none"
                    required
                  />
                  <p className="text-xs text-gray-400 text-right mt-1">{charCount}/500</p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0d0d0d] text-white text-xs font-bold py-4 uppercase tracking-widest hover:bg-[#1ab8e8] transition-colors cursor-pointer whitespace-nowrap"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[260px] sm:h-[320px] md:h-[420px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Joseph Wilson Location"
        />
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
