import type { ButtonHTMLAttributes } from "react";
import styles from "./AnimatedButton.module.scss";
import { cn } from "@/utils/styles";

type AnimatedButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg";
};

export const AnimatedButton = ({
  size = "md",
  className = "",
  children,
  ...props
}: AnimatedButtonProps) => {
  const sizeClass = styles[size];
  const cls = cn(styles.animatedBtn, sizeClass, className);

  return (
    <button className={cls} {...props}>
      <span>{children}</span>
    </button>
  );
};
