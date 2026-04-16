import type { ReactNode } from "react";
import classes from "./Tag.module.scss";

type TagProps = {
  children: ReactNode;
};

export const Tag = ({ children }: TagProps) => {
  return <span className={classes.tag}>{children}</span>;
};
