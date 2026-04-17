import { Navbar } from "@/components/navbar/Navbar";
import { ContactSection } from "./sections/ContactSection";
import { GalleryGrid } from "./sections/GalleryGrid";
import { HeroSection } from "./sections/HeroSection";
import { ServicesCarousel } from "./sections/ServicesCarousel";

export const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesCarousel />
      <GalleryGrid />
      <ContactSection />
    </>
  );
};
