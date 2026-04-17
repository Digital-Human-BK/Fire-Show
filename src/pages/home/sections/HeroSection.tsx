import classes from "./HeroSection.module.scss";

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
    <section className={classes.section} id="hero">
      <div className={classes.mediaBg}>
        <img
          src={HERO_IMAGE}
          alt="Cinematic wide shot of a fire performer in a dark industrial space, intense orange flames swirling against a smoky black background"
        />
        <div className={classes.gradient} />
      </div>

      <div className={classes.content}>
        <div className={classes.heroLeft}>
          <h1 className={classes.title}>
            THE <span className={classes.titleAccent}>CONTROLLED</span>
            <br />
            INFERNO
          </h1>
          <p className={classes.subtitle}>
            Cinematic fire performance art for high-end events, cinematic
            productions, and immersive festivals.
          </p>
        </div>

        <div className={classes.heroRight}>
          <div className={classes.phoneGroup}>
            <span className={classes.phoneLabel}>Direct Line</span>
            <p className={classes.phone}>+1 (800) 555-FIRE</p>
          </div>
          <div className={classes.socialLinks}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className={classes.socialLink}
              >
                <span className="material-symbols-outlined">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={classes.scrollIndicator}>
        <span className={classes.scrollText}>Scroll to Ignite</span>
        <div className={classes.scrollArrow}>
          <span className="material-symbols-outlined">
            keyboard_double_arrow_down
          </span>
        </div>
      </div>
    </section>
  );
};
