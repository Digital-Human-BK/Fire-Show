import styles from "./ContactSection.module.scss";
import { socialLinks } from "./ContactSection.constants";
import { Camera, PlayCircle, Video, Globe, Zap } from "lucide-react";

const iconMap = {
  Camera,
  PlayCircle,
  Video,
  Globe,
} as const;

export const ContactSection = () => {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.content}>
        <span className={styles.eyebrow}>Inquiries &amp; Bookings</span>
        <h2 className={styles.heading}>
          READY TO SET THE
          <br />
          <span className="text-gradient-primary-accent">STAGE ON FIRE?</span>
        </h2>
        <p className={styles.phone}>+1 (800) 555-FIRE</p>

        <div className={styles.socialGrid}>
          {socialLinks.map((link) => {
            const IconComponent = iconMap[link.icon as keyof typeof iconMap];
            return (
              <div key={link.label} className={styles.socialItem}>
                <a
                  href={link.href}
                  aria-label={link.label}
                  className={styles.socialBtn}
                >
                  <IconComponent size={24} />
                </a>
                <span className={styles.socialLabel}>{link.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <button className={styles.fab} aria-label="Quick booking">
        <Zap size={24} />
      </button>
    </section>
  );
};
