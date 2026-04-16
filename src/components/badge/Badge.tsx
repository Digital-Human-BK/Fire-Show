import type { ReactNode } from "react";
import classes from "./Badge.module.scss";

type Variant = "accent" | "secondary" | "danger" | "neutral";

type BadgeProps = {
  variant?: Variant;
  children: ReactNode;
};

const variantClass: Record<Variant, string> = {
  accent: classes.accent,
  secondary: classes.secondary,
  danger: classes.danger,
  neutral: classes.neutral,
};

export const Badge = ({ variant = "neutral", children }: BadgeProps) => {
  return (
    <span className={`${classes.badge} ${variantClass[variant]}`}>
      {children}
    </span>
  );
};
