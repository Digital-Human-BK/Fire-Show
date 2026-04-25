import { cn } from "@/utils/styles";
import { AnimatedButton } from "../animated-button/AnimatedButton";
import styles from "./MinimalNavbar.module.scss";

export const MinimalNavbar = () => {
  return (
    <nav className={cn(styles.nav)}>
      <a href="/" className={styles.logo}>
        ZAHARIEV
      </a>

      <a href="tel:+359888555666" aria-label="Call +359 888 555 666">
        <AnimatedButton size="sm">Book Show</AnimatedButton>
      </a>
    </nav>
  );
};
