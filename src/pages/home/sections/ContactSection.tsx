import Facebook from "@/assets/icons/facebook.svg?react";
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

        <div className={styles.socialGrid}>
          <div className={styles.socialItem}>
            <a href="#" aria-label="Facebook" className={styles.socialBtn}>
              <Facebook />
            </a>
            <span className={styles.socialLabel}>Facebook</span>
          </div>
        </div>
      </div>

      {/* <button className={styles.fab} aria-label="Quick booking">
        <Zap size={24} />
      </button> */}
    </section>
  );
};
