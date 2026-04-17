import type { ReactNode } from "react";
import styles from "./Tag.module.scss";

type TagProps = {
  children: ReactNode;
};

export const Tag = ({ children }: TagProps) => {
  return <span className={styles.tag}>{children}</span>;
};
