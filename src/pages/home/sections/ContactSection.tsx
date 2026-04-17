import classes from "./ContactSection.module.scss";

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
    <section className={classes.section} id="contact">
      <div className={classes.glow} aria-hidden="true" />

      <div className={classes.content}>
        <span className={classes.eyebrow}>Inquiries &amp; Bookings</span>
        <h2 className={classes.heading}>
          READY TO SET THE
          <br />
          <span className={classes.headingGradient}>STAGE ON FIRE?</span>
        </h2>
        <p className={classes.phone}>+1 (800) 555-FIRE</p>

        <div className={classes.socialGrid}>
          {socialLinks.map((link) => (
            <div key={link.label} className={classes.socialItem}>
              <a
                href={link.href}
                aria-label={link.label}
                className={classes.socialBtn}
              >
                <span className="material-symbols-outlined">{link.icon}</span>
              </a>
              <span className={classes.socialLabel}>{link.label}</span>
            </div>
          ))}
        </div>
      </div>

      <button className={classes.fab} aria-label="Quick booking">
        <span className="material-symbols-outlined">bolt</span>
      </button>
    </section>
  );
};
