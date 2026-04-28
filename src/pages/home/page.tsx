import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import HeroSection from "./components/HeroSection";
import ListenNowSection from "./components/ListenNowSection";
import AboutPreviewSection from "./components/AboutPreviewSection";
import ServicesPreviewSection from "./components/ServicesPreviewSection";
import MasterclassSection, { StatsBar } from "./components/MasterclassSection";
import MomentsSection from "./components/MomentsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactPreviewSection from "./components/ContactPreviewSection";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ListenNowSection />
      <AboutPreviewSection />
      <ServicesPreviewSection />
      <MasterclassSection />
      <StatsBar />
      <MomentsSection />
      <TestimonialsSection />
      <ContactPreviewSection />
      <CTASection />
      <Footer />
    </div>
  );
}
