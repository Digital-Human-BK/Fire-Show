import ChevronsDown from "@/assets/icons/chevrons-down.svg?react";
import Facebook from "@/assets/icons/facebook.svg?react";
import Instagram from "@/assets/icons/instagram.svg?react";
import TikTok from "@/assets/icons/tiktok.svg?react";
import Youtube from "@/assets/icons/youtube.svg?react";
import styles from "./HeroSection.module.scss";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBf4dzl-SDmSWHGTCcT7iVfSOeZI8YXw0LwX_eOoagXB6P8IWFJsIFBwFBbfdfSUT5HyWT5QSkpNpk66SWY8YYCiHPgMaZuGDXoJeRo1vzkowwhgYbbuFgK-B1Hzba-uwn_tMa35sEPfB6x6JChJrANdRIRxpMy-QFvWxCiFItYGAoxJBvKkU2dGZQWLrvN8rUElqucY4YhEGGXBXOVeiVN41pDFq6yvCDDeNcdFqemciXilpzpEUzrkKIkpiFTec_qvQkzfPVXPrrv";

export const HeroSection = () => {
  const isImage = false;
  return (
    <section className={styles.section} id="hero">
      <div className={styles.mediaBg}>
        {isImage ? (
          <>
            <img
              src={HERO_IMAGE}
              alt="Cinematic wide shot of a fire performer in a dark industrial space, intense orange flames swirling against a smoky black background"
            />
            <div className={styles.gradient} />
          </>
        ) : (
          <>
            <video
              src="/videos/woman.mp4"
              autoPlay
              loop
              muted
              className={styles.video}
              preload="metadata"
            />
            <div className={styles.overlay} />
          </>
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.heroLeft}>
          <h1 className={styles.title}>
            THE <span className={styles.gradientText}>CONTROLLED</span>
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
            <a
              href="tel:+359888555666"
              aria-label="Call +359 888 555 666"
              className={styles.phone}
            >
              +359 888 555-666
            </a>
          </div>
          <div className={styles.socialLinks}>
            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <Facebook width={24} height={24} />
            </a>
            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <Instagram width={24} height={24} />
            </a>
            <a
              href="https://www.tiktok.com/"
              aria-label="TikTok"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <TikTok width={24} height={24} />
            </a>
            <a
              href="https://www.youtube.com/"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <Youtube width={24} height={24} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll to Ignite</span>
        <div className={styles.scrollArrow}>
          <ChevronsDown />
        </div>
      </div>
    </section>
  );
};
