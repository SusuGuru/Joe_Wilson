import Navbar from "@/components/feature/Navbar";
import AboutHero from "./components/AboutHero";
import BioSection from "./components/BioSection";
import ExperienceSection from "./components/ExperienceSection";
import ClientsSection from "./components/ClientsSection";
import VideoSection from "./components/VideoSection";
import AboutTestimonials from "./components/AboutTestimonials";
import AboutContact from "./components/AboutContact";
import CTASection from "@/pages/home/components/CTASection";
import Footer from "@/components/feature/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AboutHero />
      <BioSection />
      <ExperienceSection />
      <ClientsSection />
      <VideoSection />
      <AboutTestimonials />
      <AboutContact />
      <CTASection />
      <Footer />
    </main>
  );
}
