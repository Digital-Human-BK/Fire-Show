import { cn } from "@/utils/styles";
import { Link } from "react-router";
import { AnimatedButton } from "../animated-button/AnimatedButton";
import styles from "./MinimalNavbar.module.scss";

export const MinimalNavbar = () => {
  return (
    <nav className={cn(styles.nav)}>
      <a href="/" className={styles.logo}>
        ZAHARIEV
      </a>
      <div className={styles.links}>
        <Link to="/">HOME</Link>
      </div>
      <a href="tel:+359888555666" aria-label="Call +359 888 555 666">
        <AnimatedButton size="sm">Book Show</AnimatedButton>
      </a>
    </nav>
  );
};
