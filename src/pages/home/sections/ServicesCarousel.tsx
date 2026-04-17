import { useRef } from "react";
import styles from "./ServicesCarousel.module.scss";
import { services } from "./ServicesCarousel.constants";

export const ServicesCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "prev" | "next") => {
    if (!scrollRef.current) return;
    const amount = 470;
    scrollRef.current.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.section} id="performances">
      <div className={styles.header}>
        <div className={styles.headerText}>
          <span className={styles.eyebrow}>Experiences</span>
          <h2 className={styles.heading}>Live Mastery</h2>
        </div>
        <div className={styles.controls}>
          <button
            className={styles.controlBtn}
            aria-label="Previous"
            onClick={() => scroll("prev")}
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button
            className={styles.controlBtn}
            aria-label="Next"
            onClick={() => scroll("next")}
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>

      <div className={styles.carousel} ref={scrollRef}>
        {services.map((service) => (
          <div key={service.title} className={styles.card}>
            <div className={styles.cardMedia}>
              <img
                src={service.image}
                alt={service.alt}
                className={styles.cardImage}
              />
              <div className={styles.cardGradient} />
              <div className={styles.cardInfo}>
                <div className={styles.cardInfoRow}>
                  <div>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                    <p className={styles.cardSubtitle}>{service.subtitle}</p>
                  </div>
                  <p className={styles.cardPrice}>{service.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
