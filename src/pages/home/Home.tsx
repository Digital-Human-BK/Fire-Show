import { Navbar } from "@/components/navbar/Navbar";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { GallerySection } from "./sections/GallerySection";
import { HeroSection } from "./sections/HeroSection";
import { PerformancesSection } from "./sections/PerformancesSection";

export const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PerformancesSection />
      <AboutSection />
      <GallerySection />
      <ContactSection />
    </>
  );
};
