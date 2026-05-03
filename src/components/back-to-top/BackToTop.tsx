import ChevronsUp from "@/assets/icons/chevrons-up.svg?react";
import { cn } from "@/utils/styles";
import styles from "./BackToTop.module.scss";

type BackToTopProps = {
  isVisible: boolean;
  isAtBottom: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
};

export const BackToTop = ({
  isVisible,
  isAtBottom,
  onClick,
  className,
}: BackToTopProps) => {
  return (
    <a
      href="#hero"
      aria-label="Back to top"
      className={cn(
        styles.backToTop,
        isVisible && styles.backToTopVisible,
        isAtBottom && styles.backToTopAtBottom,
        className,
      )}
      onClick={onClick}
    >
      <ChevronsUp width={20} height={20} />
    </a>
  );
};
