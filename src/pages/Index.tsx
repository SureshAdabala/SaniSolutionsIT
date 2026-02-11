import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GovernmentSection from "@/components/GovernmentSection";
import ClientsSection from "@/components/ClientsSection";
import InfrastructureSection from "@/components/InfrastructureSection";
import PresenceSection from "@/components/PresenceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CareersSection from "@/components/CareersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <AboutSection />
      <ServicesSection />
      <GovernmentSection />
      <ClientsSection />
      <InfrastructureSection />
      <PresenceSection />
      <TestimonialsSection />
      <CareersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
