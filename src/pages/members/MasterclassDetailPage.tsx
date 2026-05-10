import { useState, useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import MembersNavbar from "./components/MembersNavbar";
import Footer from "@/components/feature/Footer";
import CTASection from "@/components/feature/CTASection";
import { cohorts } from "@/mocks/cohorts";
import { ArrowLeft, Play, Download, FileText } from "lucide-react";

export default function MasterclassDetailPage() {
  const { cohortId } = useParams();
  const cohort = cohorts.find(c => c.id === cohortId) || cohorts[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [cohortId]);

  if (!cohort) return <Navigate to="/members" replace />;

  const sessions = cohort.sessionList || [];
  const resources = cohort.resourceList || [];

  return (
    <div className="min-h-screen bg-white flex flex-col font-inter">
      <MembersNavbar />

      {/* ── Hero Banner ── */}
      <section
        className="relative h-[250px] md:h-[350px] w-full"
        style={{
          backgroundImage: `url(https://readdy.ai/api/search-image?query=dark%20concert%20stage%20dramatic%20lighting%20musician%20performing%2C%20deep%20shadows%20moody%20atmosphere%2C%20professional%20music%20photography%2C%20dark%20teal%20and%20black%20tones%2C%20cinematic%20wide%20shot%2C%20stage%20lights%20beams%2C%20crowd%20silhouettes&width=1440&height=380&seq=masterclass-member-hero&orientation=landscape)`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
          <h1 className="text-[32px] md:text-[48px] font-black text-white uppercase tracking-widest mb-1 md:mb-2">
            MASTERCLASS
          </h1>
          <div className="flex items-center gap-2 text-[10px] md:text-[12px] text-white/80 font-medium tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">HOME</Link>
            <span>/</span>
            <Link to="/members" className="hover:text-white transition-colors">MEMBERS AREA</Link>
            <span>/</span>
            <span className="text-white">MASTERCLASS</span>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 md:px-8 py-10 md:py-16">
        {/* Back Link */}
        <Link
          to="/members"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Masterclasses
        </Link>

        {/* Wide Banner Image */}
        <div className="w-full aspect-[21/9] md:aspect-[21/6] overflow-hidden mb-10">
          <img
            src="https://images.unsplash.com/photo-1514649923863-ceaf75b770ab?q=80&w=2070&auto=format&fit=crop"
            alt="Masterclass Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Details */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">
            About this Masterclass
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
            Bibendum enim facilisis gravida neque convallis a cras semper auctor. Mauris vitae ultricies leo integer malesuada nunc vel. Purus sit amet luctus venenatis lectus. Blandit massa enim nec dui nunc mattis enim ut tellus.
          </p>
        </div>

        {/* Two Columns: Sessions & Resources */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left: Sessions */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-6">
              Sessions
            </h3>
            <div className="flex flex-col border-t border-gray-200">
              {sessions.map((session, idx) => (
                <div
                  key={session.id}
                  className="flex items-center justify-between py-4 border-b border-gray-200 group cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[11px] font-bold text-[#1a1a1a] uppercase tracking-widest pl-2">
                    {session.title}
                  </span>
                  <button className="text-gray-400 group-hover:text-gray-900 pr-2 transition-colors">
                    <Play size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Resources */}
          <div className="lg:w-[400px]">
            <div className="flex items-end justify-between mb-6">
              <h3 className="text-xl font-bold text-[#1a1a1a]">
                Resources
              </h3>
              <span className="text-[11px] text-gray-500 font-medium">
                {resources.length} Files
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {resources.map((res, idx) => {
                const isActive = idx === 0;
                return (
                  <div
                    key={res.id}
                    className={`flex items-center justify-between p-4 cursor-pointer transition-colors ${isActive ? "bg-[#077DA7]" : "bg-white hover:bg-gray-50 border border-gray-100 shadow-sm"
                      }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Document Icon Box */}
                      <div className={`w-10 h-10 flex items-center justify-center rounded-sm ${isActive ? "bg-white/20" : "bg-gray-100"
                        }`}>
                        <FileText size={18} className={isActive ? "text-white" : "text-gray-500"} />
                      </div>

                      {/* File Info */}
                      <div className="flex flex-col">
                        <span className={`text-[13px] font-bold ${isActive ? "text-white" : "text-[#1a1a1a]"}`}>
                          {res.title}
                        </span>
                        <span className={`text-[10px] ${isActive ? "text-white/80" : "text-gray-500"}`}>
                          {res.fileSize}
                        </span>
                      </div>
                    </div>

                    {/* Download Icon */}
                    <button className={isActive ? "text-white" : "text-gray-400 hover:text-gray-900"}>
                      <Download size={16} />
                    </button>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </main>

      <CTASection />
      <Footer />
    </div>
  );
}
