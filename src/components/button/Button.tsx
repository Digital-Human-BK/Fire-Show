import type { ButtonHTMLAttributes } from "react";
import classes from "./Button.module.scss";

type Variant = "primary" | "secondary" | "ghost" | "danger" | "fire";
type Size = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

const variantClass: Record<Variant, string> = {
  primary: classes.primary,
  secondary: classes.secondary,
  ghost: classes.ghost,
  danger: classes.danger,
  fire: classes.fire,
};

const sizeClass: Record<Size, string> = {
  sm: classes.sm,
  md: "",
  lg: classes.lg,
};

export const Button = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) => {
  const cls = [classes.btn, variantClass[variant], sizeClass[size], className]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
};
