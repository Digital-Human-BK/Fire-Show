import { Navbar } from "@/components/navbar/Navbar";
import { getSiteContent } from "@/lib/contentful";
import { useEffect } from "react";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { GallerySection } from "./sections/GallerySection";
import { HeroSection } from "./sections/HeroSection";
import { PerformancesSection } from "./sections/PerformancesSection";

export const Home = () => {
  useEffect(() => {
    getSiteContent("bg").then((data) => console.log(data));
  }, []);

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
