import { useState } from "react";

const faqs = [
  {
    q: "Do I need any prior experience to take this masterclass?",
    a: "No prior experience is required. The masterclass starts from the very basics and progressively builds up to advanced techniques. Whether you've never touched a bass guitar or you've been playing for years, this course is designed to meet you where you are.",
  },
  {
    q: "What equipment do I need to get started?",
    a: "You'll need a bass guitar (electric or acoustic), a cable, and either an amplifier or headphone amp. We recommend starting with an affordable beginner setup — you don't need expensive gear to learn. A list of recommended equipment is provided in the course materials.",
  },
  {
    q: "How long do I have access to the course?",
    a: "You get lifetime access to all course materials, including any future updates and additions. Once you enroll, the content is yours forever — learn at your own pace, revisit lessons anytime.",
  },
  {
    q: "Is there a money-back guarantee?",
    a: "Yes! We offer a full 30-day money-back guarantee. If you're not completely satisfied with the masterclass for any reason, simply contact us within 30 days of purchase and we'll issue a full refund — no questions asked.",
  },
  {
    q: "How is this different from free YouTube tutorials?",
    a: "While YouTube has great content, it lacks structure, progression, and accountability. This masterclass provides a carefully sequenced curriculum, professional production quality, downloadable resources, a private community, and direct access to Joseph through monthly live Q&A sessions.",
  },
  {
    q: "Can I access the course on mobile devices?",
    a: "Yes! The course platform is fully responsive and works on all devices — desktop, tablet, and mobile. You can learn anywhere, anytime, even offline with downloaded lessons.",
  },
  {
    q: "Will I receive a certificate upon completion?",
    a: "Yes, upon completing all modules and lessons, you'll receive a digital certificate of completion from Joseph Wilson's Masterclass. This can be shared on LinkedIn and other professional platforms.",
  },
  {
    q: "Are there payment plans available?",
    a: "Yes, we offer flexible payment plans for students who prefer to spread the cost. You can choose to pay in 3 monthly installments of $109 instead of the one-time payment. Contact us for details.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#1ab8e8] text-xs font-bold uppercase tracking-widest mb-2">Got Questions?</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <span className="text-gray-900 text-sm font-semibold pr-4">{faq.q}</span>
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                  <i className={`text-[#1ab8e8] text-lg transition-transform ${openIndex === i ? "ri-subtract-line" : "ri-add-line"}`} />
                </div>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 border-t border-gray-100">
                  <p className="text-gray-500 text-sm leading-relaxed pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-4">Still have questions? We&apos;re here to help.</p>
          <a
            href="/contact"
            className="inline-block bg-gray-900 text-white text-sm font-bold px-8 py-3 rounded uppercase tracking-wider hover:bg-gray-700 transition-colors cursor-pointer whitespace-nowrap"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
