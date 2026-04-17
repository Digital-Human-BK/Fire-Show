import type { ReactNode, CSSProperties } from "react";
import styles from "./Card.module.scss";
import { cn } from "@/utils/styles";

type CardProps = {
  variant?: "default" | "accent" | "surface";
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export const Card = ({
  variant = "default",
  children,
  className = "",
  style,
}: CardProps) => {
  const cls = cn(styles.card, styles[variant], className);

  return (
    <div className={cls} style={style}>
      {children}
    </div>
  );
};
