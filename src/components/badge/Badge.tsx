import type { ReactNode } from "react";
import styles from "./Badge.module.scss";
import { cn } from "@/utils/styles";

type BadgeProps = {
  variant?: "accent" | "secondary" | "danger" | "neutral";
  children: ReactNode;
};

export const Badge = ({ variant = "neutral", children }: BadgeProps) => {
  return <span className={cn(styles.badge, styles[variant])}>{children}</span>;
};
