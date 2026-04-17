import type { ButtonHTMLAttributes } from "react";
import classes from "./AnimatedButton.module.scss";

type Size = "sm" | "md" | "lg";

type AnimatedButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: Size;
};

const sizeClass: Record<Size, string> = {
  sm: classes.sm,
  md: "",
  lg: classes.lg,
};

export const AnimatedButton = ({
  size = "md",
  className = "",
  children,
  ...props
}: AnimatedButtonProps) => {
  const cls = [classes.animatedBtn, sizeClass[size], className]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={cls} {...props}>
      <span>{children}</span>
    </button>
  );
};
