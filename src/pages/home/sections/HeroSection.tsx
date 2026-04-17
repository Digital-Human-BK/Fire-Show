import styles from "./HeroSection.module.scss";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBf4dzl-SDmSWHGTCcT7iVfSOeZI8YXw0LwX_eOoagXB6P8IWFJsIFBwFBbfdfSUT5HyWT5QSkpNpk66SWY8YYCiHPgMaZuGDXoJeRo1vzkowwhgYbbuFgK-B1Hzba-uwn_tMa35sEPfB6x6JChJrANdRIRxpMy-QFvWxCiFItYGAoxJBvKkU2dGZQWLrvN8rUElqucY4YhEGGXBXOVeiVN41pDFq6yvCDDeNcdFqemciXilpzpEUzrkKIkpiFTec_qvQkzfPVXPrrv";

const socialLinks = [
  { icon: "photo_camera", label: "Instagram", href: "#" },
  { icon: "play_circle", label: "YouTube", href: "#" },
  { icon: "description", label: "Press Kit", href: "#" },
  { icon: "public", label: "Website", href: "#" },
] as const;

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
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className={styles.socialLink}
              >
                <span className="material-symbols-outlined">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll to Ignite</span>
        <div className={styles.scrollArrow}>
          <span className="material-symbols-outlined">
            keyboard_double_arrow_down
          </span>
        </div>
      </div>
    </section>
  );
};
