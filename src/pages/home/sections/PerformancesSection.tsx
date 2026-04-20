import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./PerformancesSection.module.scss";

import "swiper/css";

type ServiceCard = {
  title: string;
  subtitle: string;
  price: string;
  image: string;
  alt: string;
};

const services: ServiceCard[] = [
  {
    title: "Solo Pyro Solo",
    subtitle: "15 Minute High Intensity",
    price: "from $800",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKGir0ORb9tgZj7-QFlsNVGi2tw_fYZMY1P0wAY1d-KBITcaCm1pn3c0KyyKWXtcNuisEe0U0HkfWN8Jk8MteX068Q8hDTrmU66-OI1Q_7krT3u47fJQYRQrhpEyfUsNBn2mvgHGTIt-d0ZnHC_xlFopmqiTWAS2HPRF3DUO51kR50PIs6i4oJjpJcyah60vbgU-XTTWsEGJPdF7DhcBClVAl8p3AaqFuwh9o8lHaEgEFhJrtImS7Eo7OR0t0IfjiAmEgF_fMvb7Zp",
    alt: "Close up of fire breathing performer with glowing embers flying through the air in a dramatic circular motion",
  },
  {
    title: "Duo Inferno",
    subtitle: "Synchronized Fire Ritual",
    price: "from $1,500",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAHCWBtb-QNWuAyuZWLkUrcp87mmjCO6Q73OzDXgPfIC9K6G37XscTE-_almpRI4k4TFPGnMnsDwcNg_ObuzS0lKvzKSMjfOSjKSATiUjFDBbjoyBchTWxnm63kRIk8VaI_KeYLK-jDxKiTeEFEGlRoTlefR8jRRNow7j3YATKifdXs7JVhPPevU7uuUYpBuhpGfyvDc2mu73wPJOtxr9RTmRtfIk0dU7aSU04xE7_MOMUTdyqvtKjqk4itZre9MqJTon2w3aYMCtOM",
    alt: "Two fire dancers performing a synchronized routine with burning staffs creating intricate light trails",
  },
  {
    title: "Grand Finale",
    subtitle: "Festival Grade Pyrotechnics",
    price: "from $3,200",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBASvl82pqj9HIVJP-TYiyKEpXjUki3R4eBboeQlzwx45A-vxoWoc1ZOZ0Ea3-ov05vbNsUcWHWRMJySa9YE4rVOswa5dOTH7FhFvvmM3Z6H4G0G1NxgOkz1CsAkxzROqSfWy6KUeqIm-kSDEt4R4fA3C8VJaQbHxOj15vK0Ns5OZq3R7rPYxV3bXgiIT9mSJN6vjyqDdQaieLIy_a71qolm4_XCkegWRL54Dpo5yCCZZLfNfsGLLghoWoKXX7Ji1pmh75vBQVrkacA",
    alt: "Massive stage fire production with multiple performers and pyrotechnic explosions behind them",
  },
  {
    title: "Solo Pyro Solo2",
    subtitle: "15 Minute High Intensity",
    price: "from $800",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKGir0ORb9tgZj7-QFlsNVGi2tw_fYZMY1P0wAY1d-KBITcaCm1pn3c0KyyKWXtcNuisEe0U0HkfWN8Jk8MteX068Q8hDTrmU66-OI1Q_7krT3u47fJQYRQrhpEyfUsNBn2mvgHGTIt-d0ZnHC_xlFopmqiTWAS2HPRF3DUO51kR50PIs6i4oJjpJcyah60vbgU-XTTWsEGJPdF7DhcBClVAl8p3AaqFuwh9o8lHaEgEFhJrtImS7Eo7OR0t0IfjiAmEgF_fMvb7Zp",
    alt: "Close up of fire breathing performer with glowing embers flying through the air in a dramatic circular motion",
  },
  {
    title: "Duo Inferno2",
    subtitle: "Synchronized Fire Ritual",
    price: "from $1,500",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAHCWBtb-QNWuAyuZWLkUrcp87mmjCO6Q73OzDXgPfIC9K6G37XscTE-_almpRI4k4TFPGnMnsDwcNg_ObuzS0lKvzKSMjfOSjKSATiUjFDBbjoyBchTWxnm63kRIk8VaI_KeYLK-jDxKiTeEFEGlRoTlefR8jRRNow7j3YATKifdXs7JVhPPevU7uuUYpBuhpGfyvDc2mu73wPJOtxr9RTmRtfIk0dU7aSU04xE7_MOMUTdyqvtKjqk4itZre9MqJTon2w3aYMCtOM",
    alt: "Two fire dancers performing a synchronized routine with burning staffs creating intricate light trails",
  },
  {
    title: "Grand Finale2",
    subtitle: "Festival Grade Pyrotechnics",
    price: "from $3,200",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBASvl82pqj9HIVJP-TYiyKEpXjUki3R4eBboeQlzwx45A-vxoWoc1ZOZ0Ea3-ov05vbNsUcWHWRMJySa9YE4rVOswa5dOTH7FhFvvmM3Z6H4G0G1NxgOkz1CsAkxzROqSfWy6KUeqIm-kSDEt4R4fA3C8VJaQbHxOj15vK0Ns5OZq3R7rPYxV3bXgiIT9mSJN6vjyqDdQaieLIy_a71qolm4_XCkegWRL54Dpo5yCCZZLfNfsGLLghoWoKXX7Ji1pmh75vBQVrkacA",
    alt: "Massive stage fire production with multiple performers and pyrotechnic explosions behind them",
  },
];

export const PerformancesSection = () => {
  return (
    <section className={styles.section} id="performances">
      <div className={styles.header}>
        <span className={styles.eyebrow}>Performances</span>
        <h2 className={styles.heading}>Fire & Light</h2>
      </div>

      <Swiper
        className={styles.swiper}
        modules={[Autoplay, A11y]}
        autoplay={{ delay: 0 }}
        speed={11000}
        loop
        spaceBetween={32}
        slidesPerView={1.3}
        breakpoints={{
          768: { slidesPerView: 2.3 },
          1440: { slidesPerView: 3.3 },
        }}
      >
        {services.map((service) => (
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

      <div className={styles.swiperGap} />
      <Swiper
        className={styles.swiper}
        modules={[Autoplay, A11y]}
        autoplay={{ delay: 0 }}
        speed={7500}
        loop
        spaceBetween={32}
        slidesPerView={1.3}
        breakpoints={{
          768: { slidesPerView: 2.3 },
          1440: { slidesPerView: 3.3 },
        }}
      >
        {services.reverse().map((service) => (
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
    </section>
  );
};
