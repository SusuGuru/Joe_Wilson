const includes = [
  "91 in-depth video lessons",
  "40+ hours of content",
  "200+ downloadable bass tabs",
  "50 backing tracks",
  "Private student community",
  "Monthly live Q&A sessions",
  "Certificate of completion",
  "Lifetime access & updates",
];

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[#1ab8e8] text-xs font-bold uppercase tracking-widest mb-2">Limited Time Offer</p>
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">Complete Mastery Suite</h2>
        <p className="text-gray-500 text-sm mb-8">
          Everything you need to become a world-class bassist — in one complete package.
        </p>

        <div className="bg-gray-900 rounded-lg p-8 text-left">
          {/* Price */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-1">
              <span className="text-gray-400 text-xl line-through">$497</span>
              <span className="bg-[#1ab8e8] text-white text-sm font-bold px-3 py-1 rounded-full">SAVE 40%</span>
            </div>
            <div className="flex items-end justify-center gap-1">
              <span className="text-gray-400 text-2xl font-bold">$</span>
              <span className="text-white text-6xl font-black leading-none">297</span>
            </div>
            <p className="text-gray-400 text-xs mt-2">One-time payment · Lifetime access</p>
          </div>

          {/* Includes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
            {includes.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                  <i className="ri-checkbox-circle-fill text-[#1ab8e8] text-base" />
                </div>
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="w-full bg-[#1ab8e8] text-white text-base font-black py-4 rounded uppercase tracking-wider hover:bg-[#0fa0cc] transition-colors cursor-pointer whitespace-nowrap">
            Enroll Now — Get Instant Access
          </button>

          <p className="text-center text-gray-500 text-xs mt-4">
            <i className="ri-shield-check-line mr-1" />
            30-Day Money Back Guarantee · Secure Checkout
          </p>
        </div>

        {/* Payment options */}
        <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
          {["ri-visa-line", "ri-mastercard-line", "ri-paypal-line", "ri-bank-card-line"].map((icon, i) => (
            <div key={i} className="w-8 h-8 flex items-center justify-center text-gray-400">
              <i className={`${icon} text-2xl`} />
            </div>
          ))}
          <span className="text-gray-400 text-xs">All major cards accepted</span>
        </div>
      </div>
    </section>
  );
}
