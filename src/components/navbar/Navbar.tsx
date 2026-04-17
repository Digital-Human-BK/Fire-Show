import { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { cn } from "@/utils/styles";
import { AnimatedButton } from "../animated-button/AnimatedButton";

const navSections = [
  { id: "performances", label: "Performances" },
  { id: "about", label: "About" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

const allSections = ["hero", ...navSections.map((section) => section.id)];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingToSection, setIsScrollingToSection] = useState(false);
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
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      // Don't update active section if we're programmatically scrolling to a section
      if (isScrollingToSection) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newHash = `#${entry.target.id}`;
          setActiveSection(newHash);
          // Update URL hash without adding to history
          window.history.replaceState(null, "", newHash);
        }
      });
    }, observerOptions);

    allSections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isScrollingToSection]);

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetHash = e.currentTarget.hash;

    // Immediately set active section to clicked link
    setActiveSection(targetHash);
    window.history.replaceState(null, "", targetHash);

    // Temporarily disable IntersectionObserver updates
    setIsScrollingToSection(true);

    // Re-enable after scrolling completes (with some buffer)
    setTimeout(() => {
      setIsScrollingToSection(false);
    }, 1000);
    // Smooth scroll to section
    document.getElementById(targetHash.slice(1))?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className={cn(styles.nav, isScrolled && styles.scrolled)}>
      <a href="#hero" className={styles.logo} onClick={handleSectionClick}>
        INFERNO
      </a>
      <div className={styles.links}>
        {navSections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={cn(activeSection === `#${section.id}` && styles.active)}
            onClick={handleSectionClick}
          >
            {section.label}
          </a>
        ))}
      </div>
      <AnimatedButton size={isScrolled ? "sm" : "md"}>Book Show</AnimatedButton>
    </nav>
  );
};
