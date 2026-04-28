import { useState } from "react";

export default function ContactPreviewSection() {
  const [formData, setFormData] = useState({ email: "", message: "" });
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
    data.append("email", formData.email);
    data.append("message", formData.message);

    try {
      await fetch("https://readdy.ai/api/form/d7ntertbmnmv4i2ukaog", {
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
    <section className="bg-white py-16 px-8 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Where to Find Me */}
        <div>
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-widest mb-6">
            Where to Find Me?
          </h3>
          <div className="space-y-5">
            <div className="flex gap-3">
              <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                <i className="ri-map-pin-fill text-[#1ab8e8] text-base" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">New York, USA</p>
                <p className="text-xs text-gray-500">123 Music Avenue, Manhattan, NY 10001</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                <i className="ri-map-pin-fill text-[#1ab8e8] text-base" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">London, UK</p>
                <p className="text-xs text-gray-500">45 Bass Street, Soho, London W1D 3QY</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                <i className="ri-map-pin-fill text-[#1ab8e8] text-base" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Los Angeles, USA</p>
                <p className="text-xs text-gray-500">789 Groove Blvd, Hollywood, CA 90028</p>
              </div>
            </div>
          </div>
        </div>

        {/* Drop Me A Line */}
        <div>
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-widest mb-6">
            Drop Me A Line
          </h3>
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <i className="ri-checkbox-circle-line text-[#1ab8e8] text-4xl" />
              </div>
              <p className="text-gray-700 font-semibold">Message sent!</p>
              <p className="text-gray-500 text-sm mt-1">I&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form
              data-readdy-form
              id="home-contact-form"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border-b border-gray-300 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1a7fa8] bg-transparent"
                required
              />
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleMessageChange}
                  className="w-full border-b border-gray-300 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1a7fa8] bg-transparent resize-none"
                  required
                />
                <p className="text-xs text-gray-400 text-right mt-1">{charCount}/500</p>
              </div>
              <button
                type="submit"
                className="border border-gray-900 text-gray-900 text-xs font-bold px-6 py-2.5 uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
