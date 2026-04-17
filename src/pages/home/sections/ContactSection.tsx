import styles from "./ContactSection.module.scss";

type SocialLink = {
  icon: string;
  label: string;
  href: string;
};

const socialLinks: SocialLink[] = [
  { icon: "photo_camera", label: "Instagram", href: "#" },
  { icon: "play_circle", label: "Youtube", href: "#" },
  { icon: "video_library", label: "Tiktok", href: "#" },
  { icon: "public", label: "Facebook", href: "#" },
];

export const ContactSection = () => {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.content}>
        <span className={styles.eyebrow}>Inquiries &amp; Bookings</span>
        <h2 className={styles.heading}>
          READY TO SET THE
          <br />
          <span className={styles.headingGradient}>STAGE ON FIRE?</span>
        </h2>
        <p className={styles.phone}>+1 (800) 555-FIRE</p>

        <div className={styles.socialGrid}>
          {socialLinks.map((link) => (
            <div key={link.label} className={styles.socialItem}>
              <a
                href={link.href}
                aria-label={link.label}
                className={styles.socialBtn}
              >
                <span className="material-symbols-outlined">{link.icon}</span>
              </a>
              <span className={styles.socialLabel}>{link.label}</span>
            </div>
          ))}
        </div>
      </div>

      <button className={styles.fab} aria-label="Quick booking">
        <span className="material-symbols-outlined">bolt</span>
      </button>
    </section>
  );
};
