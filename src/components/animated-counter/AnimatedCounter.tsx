import { useEffect, useRef } from "react";
import styles from "./AnimatedCounter.module.scss";

type AnimatedCounterProps = {
  targetValue: number;
  startValue?: number;
  label?: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
};

const easeOut = (t: number): number => 1 - Math.pow(1 - t, 3);

const animateCounter = (
  el: HTMLSpanElement,
  target: number,
  startValue: number,
  duration: number,
) => {
  const start = Date.now();
  const animate = () => {
    const now = Date.now();
    const progress = Math.min((now - start) / duration, 1);
    const eased = easeOut(progress);
    const current = startValue + (target - startValue) * eased;
    el.textContent = Math.round(current).toString();
    if (progress < 1) requestAnimationFrame(animate);
  };
  requestAnimationFrame(animate);
};

export const AnimatedCounter = ({
  targetValue,
  startValue = 0,
  label,
  suffix,
  prefix,
  duration = 2000,
}: AnimatedCounterProps) => {
  const counterRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            if (valueRef.current) {
              animateCounter(
                valueRef.current,
                targetValue,
                startValue,
                duration,
              );
            }
          }
        });
      },
      { threshold: 0.1 },
    );
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    return () => observer.disconnect();
  }, [targetValue, startValue, duration]);

  return (
    <div className={styles.stat} ref={counterRef}>
      <div className={styles.statValue}>
        {prefix && <span>{prefix}</span>}
        <span
          ref={(el) => {
            if (el) {
              valueRef.current = el;
              el.textContent = startValue.toString();
            }
          }}
        />
        {suffix && <span>{suffix}</span>}
      </div>
      {label && <div className={styles.statLabel}>{label}</div>}
    </div>
  );
};
