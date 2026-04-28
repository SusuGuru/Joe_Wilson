import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import CTASection from "@/pages/home/components/CTASection";
import ServicesHero from "./components/ServicesHero";
import ServicesListSection from "./components/ServicesListSection";
import ProcessSection from "./components/ProcessSection";
import StatsSection from "./components/StatsSection";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Navbar />
      <ServicesHero />
      <ServicesListSection />
      <StatsSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </div>
  );
}
