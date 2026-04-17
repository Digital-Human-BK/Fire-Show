import { Navbar } from "@/components/navbar/Navbar";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { GallerySection } from "./sections/GallerySection";
import { HeroSection } from "./sections/HeroSection";
import { ServicesCarousel } from "./sections/ServicesCarousel";

export const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesCarousel />
      <AboutSection />
      <GallerySection />
      <ContactSection />
    </>
  );
};
