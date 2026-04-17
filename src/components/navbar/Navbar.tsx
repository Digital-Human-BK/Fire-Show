import { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { cn } from "@/utils/styles";
import { AnimatedButton } from "../animated-button/AnimatedButton";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(styles.nav, isScrolled && styles.scrolled)}>
      <a href="#hero" className={styles.logo}>
        INFERNO
      </a>
      <div className={styles.links}>
        <a href="#gallery">Gallery</a>
        <a href="#performances">Performances</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <AnimatedButton size={isScrolled ? "sm" : "md"}>Book Show</AnimatedButton>
    </nav>
  );
};
