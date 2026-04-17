import Facebook from "@/assets/icons/facebook.svg?react";
import Instagram from "@/assets/icons/instagram.svg?react";
import Share from "@/assets/icons/share-2.svg?react";
import TikTok from "@/assets/icons/tiktok.svg?react";
import Youtube from "@/assets/icons/youtube.svg?react";
import styles from "./ContactSection.module.scss";

export const ContactSection = () => {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.content}>
        <span className={styles.eyebrow}>Inquiries &amp; Bookings</span>
        <h2 className={styles.heading}>
          READY TO SET THE
          <br />
          <span className={styles.gradientText}>STAGE ON FIRE?</span>
        </h2>
        <a
          href="tel:+359888555666"
          aria-label="Call +359 888 555 666"
          className={styles.phone}
        >
          +359 888 555-666
        </a>

        <div className={styles.socialWrapper}>
          <a
            href="https://www.facebook.com/"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <div className={styles.socialIcon}>
              <Facebook />
            </div>
            <span>Facebook</span>
          </a>
          <a
            href="https://www.instagram.com/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <div className={styles.socialIcon}>
              <Instagram />
            </div>
            <span>Instagram</span>
          </a>
          <a
            href="https://www.tiktok.com/"
            aria-label="TikTok"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <div className={styles.socialIcon}>
              <TikTok />
            </div>
            <span>TikTok</span>
          </a>
          <a
            href="https://www.youtube.com/"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <div className={styles.socialIcon}>
              <Youtube />
            </div>
            <span>YouTube</span>
          </a>
        </div>
      </div>

      <button className={styles.fab} aria-label="Share on social media">
        <Share width={24} height={24} />
      </button>
    </section>
  );
};
