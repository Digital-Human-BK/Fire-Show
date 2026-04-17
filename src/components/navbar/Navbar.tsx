import { useEffect, useState } from "react";
import { Button } from "@/components/button/Button";
import styles from "./Navbar.module.scss";

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
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
      <a href="#hero" className={styles.logo}>
        INFERNO
      </a>
      <div className={styles.links}>
        <a href="#gallery">Gallery</a>
        <a href="#performances">Performances</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <Button variant="fire" size={isScrolled ? "sm" : "md"}>
        Book Show
      </Button>
    </nav>
  );
};
