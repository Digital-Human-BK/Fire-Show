import { useRef } from "react";
import classes from "./ServicesCarousel.module.scss";

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
];

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
    <section className={classes.section} id="performances">
      <div className={classes.header}>
        <div className={classes.headerText}>
          <span className={classes.eyebrow}>Experiences</span>
          <h2 className={classes.heading}>Live Mastery</h2>
        </div>
        <div className={classes.controls}>
          <button
            className={classes.controlBtn}
            aria-label="Previous"
            onClick={() => scroll("prev")}
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button
            className={classes.controlBtn}
            aria-label="Next"
            onClick={() => scroll("next")}
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>

      <div className={classes.carousel} ref={scrollRef}>
        {services.map((service) => (
          <div key={service.title} className={classes.card}>
            <div className={classes.cardMedia}>
              <img
                src={service.image}
                alt={service.alt}
                className={classes.cardImage}
              />
              <div className={classes.cardGradient} />
              <div className={classes.cardInfo}>
                <div className={classes.cardInfoRow}>
                  <div>
                    <h3 className={classes.cardTitle}>{service.title}</h3>
                    <p className={classes.cardSubtitle}>{service.subtitle}</p>
                  </div>
                  <p className={classes.cardPrice}>{service.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
