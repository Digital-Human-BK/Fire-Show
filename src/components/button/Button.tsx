import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";
import { cn } from "@/utils/styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "fire";
  size?: "sm" | "md" | "lg";
};

export const Button = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) => {
  const cls = cn(styles.btn, styles[variant], styles[size], className);

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
};
