import styles from "./AboutSection.module.scss";

const stats = [
  { value: "15+", label: "Years Exp." },
  { value: "300+", label: "Events/Year" },
  { value: "24", label: "Countries" },
] as const;

export const AboutSection = () => {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.portrait}>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm7t2X_uN4BmB9HXUciEmf5Zlf96StwLo2anFIGWt1jFz_z7Aqd_d5dQVgPOLNd8qZscJ15sMl6tGCZ4NqC4y67dpTRfKDaVhLB92EBzRvXmQZqwutpRsB1BjLw6ZrukPstEhax7BkIkKlz0LfC3d7qEgTsXgm6Mnu2nuzZSz-dK3rjeoEPlQl-3IcGZADUSYtgP-RXd6C0rLjy3LlKWWcO0LQrdts8b10gUF9zCXKBpnD3PItrf7urdsiOot_H_KRb7gVXD_FmHcm"
            alt="Cinematic portrait of a male fire artist spinning multiple flaming staffs with sparks flying against a pitch black night background"
          />
          <div className={styles.portraitOverlay} />
        </div>

        <div className={styles.content}>
          <div className={styles.eyebrowRow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <span className={styles.eyebrow}>The Visionary</span>
          </div>

          <h2 className={styles.heading}>
            <span className={styles.headingLine}>FIFTEEN</span>
            <span className={styles.headingGradient}>YEARS OF FLAME.</span>
          </h2>

          <div className={styles.bio}>
            <p>
              Born from the underground fire-flow scene and refined on global
              stages, my practice is a fusion of technical precision and primal
              energy. I don&rsquo;t just perform; I choreograph the elements to
              tell stories that linger long after the smoke clears.
            </p>
            <p>
              With over 1,200 shows across five continents, I have pushed the
              boundaries of safety and artistry, developing proprietary fuel
              blends and equipment that allow for unprecedented control and
              visual impact.
            </p>
          </div>

          <div className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
