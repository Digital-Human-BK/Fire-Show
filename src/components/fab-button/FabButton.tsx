import { cn } from "@/utils/styles";
import styles from "./FabButton.module.scss";

type FabButtonProps = {
  onClick?: () => void;
  "aria-label": string;
  children: React.ReactNode;
  className?: string;
};

export const FabButton = ({
  onClick,
  "aria-label": ariaLabel,
  children,
  className,
}: FabButtonProps) => {
  return (
    <button
      className={cn(styles.fab, className)}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
