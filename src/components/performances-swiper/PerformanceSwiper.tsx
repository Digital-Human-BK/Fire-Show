import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./PerformanceSwiper.module.scss";

import "swiper/css";

type PerformanceSwiperProps = {
  data: {
    title: string;
    description: string;
    price: string;
    priceSubtitle: string;
    image: string;
    alt: string;
  }[];
  speed: number;
  delay?: number;
  onCardClick?: (index: number) => void;
};

export const PerformanceSwiper = ({
  data,
  speed,
  delay = 0,
  onCardClick,
}: PerformanceSwiperProps) => {
  return (
    <Swiper
      className={styles.swiper}
      modules={[Autoplay, A11y]}
      autoplay={{ delay }}
      speed={speed}
      loop
      spaceBetween={16}
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: 2.3 },
        1440: { slidesPerView: 3.3 },
      }}
    >
      {data.map((service, index) => (
        <SwiperSlide key={service.title}>
          <div className={styles.card} onClick={() => onCardClick?.(index)}>
            <div className={styles.cardMedia}>
              <img
                src={service.image}
                alt={service.alt}
                className={styles.cardImage}
              />
              <div className={styles.cardGradient} />
              <div className={styles.cardInfo}>
                <div className={styles.cardInfoRow}>
                  <div className={styles.cardInfoLeft}>
                    <p className={styles.cardTitle}>{service.title}</p>
                    <div className={styles.descriptionWrapper}>
                      <p className={styles.cardDescription}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className={styles.priceWrapper}>
                    <p className={styles.cardPriceSubtitle}>
                      {service.priceSubtitle}
                    </p>
                    <p className={styles.cardPrice}>{service.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
