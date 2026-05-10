import pocketGrooveImg from "@/assets/masterclass/pocketngroove.png";

export default function IntroSection() {
  return (
    <section className="bg-white py-10 md:py-24 px-4 md:px-16">
      <div className="max-w-[1120px] mx-auto">
        {/* Heading */}
        <div className="mb-7 md:mb-10">
          <h2 className="font-fraunces text-[26px] md:text-[42px] font-black text-[#1a1a1a] leading-[1.15] mb-3 md:mb-4">
            Master the{" "}
            <span className="text-[#2596BE] italic">Entire Spectrum</span>{" "}
            of Sound
          </h2>
          <p className="text-[#6b7280] text-[13px] md:text-[14px] leading-[1.7] max-w-[520px]">
            Master the art of bass from the inside out—develop your touch, refine your groove, and understand the full journey from stage to studio.
          </p>
        </div>

        {/* Bento grid — stacks on mobile */}
        <div className="flex flex-col md:grid md:grid-cols-12 gap-3 md:gap-4">

          {/* Pocket & Groove — full width on mobile */}
          <div className="md:col-span-5 relative overflow-hidden bg-[#1a1a2e] min-h-[240px] md:min-h-[360px] flex flex-col justify-end p-5 md:p-7">
            <img
              src={pocketGrooveImg}
              alt="Pocket & Groove"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1a]/90 via-[#0d0d1a]/40 to-transparent" />
            <div className="absolute top-4 left-4 z-10">
              <div className="w-7 h-7 flex items-center justify-center bg-white/10 backdrop-blur-sm">
                <i className="ri-grid-fill text-white/70 text-xs" />
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="text-white text-[19px] md:text-[24px] font-bold mb-1.5 md:mb-2">
                Pocket &amp; Groove
              </h3>
              <p className="text-gray-300 text-[12px] md:text-[13px] leading-[1.6]">
                Learn the rhythmic 'pocket' that makes gospel music feel alive and infectious.
              </p>
            </div>
          </div>

          {/* Right column — 2 top + 1 bottom spanning */}
          <div className="md:col-span-7 flex flex-col md:grid md:grid-cols-2 gap-3 md:gap-4">
            {/* Chord Tones */}
            <div className="bg-[#f5f7fa] p-4 md:p-6 flex flex-col justify-between min-h-[130px] md:min-h-[160px]">
              <div className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-[#2596BE]/10 mb-3 md:mb-4">
                <i className="ri-music-2-line text-[#2596BE] text-base md:text-lg" />
              </div>
              <div>
                <h4 className="text-[#1a1a1a] text-[13px] md:text-[16px] font-bold mb-1">
                  Chord Tones
                </h4>
                <p className="text-[#6b7280] text-[11px] md:text-[13px] leading-[1.6]">
                  Navigate the neck with confidence using modern harmonic concepts.
                </p>
              </div>
            </div>

            {/* Tone Sculpting */}
            <div className="bg-[#f5f7fa] p-4 md:p-6 flex flex-col justify-between min-h-[130px] md:min-h-[160px]">
              <div className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-[#2596BE]/10 mb-3 md:mb-4">
                <i className="ri-equalizer-line text-[#2596BE] text-base md:text-lg" />
              </div>
              <div>
                <h4 className="text-[#1a1a1a] text-[13px] md:text-[16px] font-bold mb-1">
                  Tone Sculpting
                </h4>
                <p className="text-[#6b7280] text-[11px] md:text-[13px] leading-[1.6]">
                  Craft your signature sound using EQ, pedals, and technique.
                </p>
              </div>
            </div>

            {/* Recording Mastery — full width on both */}
            <div className="md:col-span-2 bg-[#eef6fa] p-4 md:p-6 flex items-center gap-3 md:gap-4">
              <div className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-[#2596BE]/10 flex-shrink-0">
                <i className="ri-download-2-line text-[#2596BE] text-base md:text-lg" />
              </div>
              <div>
                <h4 className="text-[#1a1a1a] text-[13px] md:text-[16px] font-bold mb-0.5">
                  Recording Mastery
                </h4>
                <p className="text-[#6b7280] text-[11px] md:text-[13px] leading-[1.6]">
                  The pro secrets for capturing studio-quality bass from home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
