import { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { cn } from "@/utils/styles";
import { AnimatedButton } from "../animated-button/AnimatedButton";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(
    window.location.hash || "#hero",
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["hero", "gallery", "performances", "about", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newHash = `#${entry.target.id}`;
          setActiveSection(newHash);
          // Update URL hash without adding to history
          window.history.replaceState(null, "", newHash);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={cn(styles.nav, isScrolled && styles.scrolled)}>
      <a href="#hero" className={styles.logo}>
        INFERNO
      </a>
      <div className={styles.links}>
        <a
          href="#performances"
          className={cn(activeSection === "#performances" && styles.active)}
        >
          Performances
        </a>
        <a
          href="#about"
          className={cn(activeSection === "#about" && styles.active)}
        >
          About
        </a>
        <a
          href="#gallery"
          className={cn(activeSection === "#gallery" && styles.active)}
        >
          Gallery
        </a>
        <a
          href="#contact"
          className={cn(activeSection === "#contact" && styles.active)}
        >
          Contact
        </a>
      </div>
      <AnimatedButton size={isScrolled ? "sm" : "md"}>Book Show</AnimatedButton>
    </nav>
  );
};
