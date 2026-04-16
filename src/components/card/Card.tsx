import type { ReactNode, CSSProperties } from "react";
import classes from "./Card.module.scss";

type Variant = "default" | "accent" | "surface";

type CardProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

const variantClass: Record<Variant, string> = {
  default: "",
  accent: classes.accent,
  surface: classes.surface,
};

export const Card = ({
  variant = "default",
  children,
  className = "",
  style,
}: CardProps) => {
  const cls = [classes.card, variantClass[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cls} style={style}>
      {children}
    </div>
  );
};
