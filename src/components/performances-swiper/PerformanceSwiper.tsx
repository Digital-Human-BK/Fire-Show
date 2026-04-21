import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./PerformanceSwiper.module.scss";

import "swiper/css";

type PerformanceSwiperProps = {
  data: {
    title: string;
    subtitle: string;
    price: string;
    image: string;
    alt: string;
  }[];
  speed: number;
  delay?: number;
};

export const PerformanceSwiper = ({
  data,
  speed,
  delay = 0,
}: PerformanceSwiperProps) => {
  return (
    <Swiper
      className={styles.swiper}
      modules={[Autoplay, A11y]}
      autoplay={{ delay }}
      speed={speed}
      loop
      spaceBetween={32}
      slidesPerView={1.3}
      breakpoints={{
        768: { slidesPerView: 2.3 },
        1440: { slidesPerView: 3.3 },
      }}
    >
      {data.map((service) => (
        <SwiperSlide key={service.title}>
          <div className={styles.card}>
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
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
