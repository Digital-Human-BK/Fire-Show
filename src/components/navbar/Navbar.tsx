import { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { cn } from "@/utils/styles";
import { AnimatedButton } from "../animated-button/AnimatedButton";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(window.location.hash || "#hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <nav className={cn(styles.nav, isScrolled && styles.scrolled)}>
      <a href="#hero" className={styles.logo}>
        INFERNO
      </a>
      <div className={styles.links}>
        <a
          href="#gallery"
          className={cn(activeLink === "#gallery" && styles.active)}
        >
          Gallery
        </a>
        <a
          href="#performances"
          className={cn(activeLink === "#performances" && styles.active)}
        >
          Performances
        </a>
        <a
          href="#about"
          className={cn(activeLink === "#about" && styles.active)}
        >
          About
        </a>
        <a
          href="#contact"
          className={cn(activeLink === "#contact" && styles.active)}
        >
          Contact
        </a>
      </div>
      <AnimatedButton size={isScrolled ? "sm" : "md"}>Book Show</AnimatedButton>
    </nav>
  );
};
