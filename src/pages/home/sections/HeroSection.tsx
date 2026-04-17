import styles from "./HeroSection.module.scss";
import { HERO_IMAGE, socialLinks } from "./HeroSection.constants";
import {
  Camera,
  PlayCircle,
  FileText,
  Globe,
  ChevronsDown,
} from "lucide-react";

const iconMap = {
  Camera,
  PlayCircle,
  FileText,
  Globe,
} as const;

export const HeroSection = () => {
  return (
    <section className={styles.section} id="hero">
      <div className={styles.mediaBg}>
        <img
          src={HERO_IMAGE}
          alt="Cinematic wide shot of a fire performer in a dark industrial space, intense orange flames swirling against a smoky black background"
        />
        <div className={styles.gradient} />
      </div>

      <div className={styles.content}>
        <div className={styles.heroLeft}>
          <h1 className={styles.title}>
            THE <span className={styles.titleAccent}>CONTROLLED</span>
            <br />
            INFERNO
          </h1>
          <p className={styles.subtitle}>
            Cinematic fire performance art for high-end events, cinematic
            productions, and immersive festivals.
          </p>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.phoneGroup}>
            <span className={styles.phoneLabel}>Direct Line</span>
            <p className={styles.phone}>+1 (800) 555-FIRE</p>
          </div>
          <div className={styles.socialLinks}>
            {socialLinks.map((link) => {
              const IconComponent = iconMap[link.icon as keyof typeof iconMap];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className={styles.socialLink}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll to Ignite</span>
        <div className={styles.scrollArrow}>
          <ChevronsDown size={24} />
        </div>
      </div>
    </section>
  );
};
