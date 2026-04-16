import type { InputHTMLAttributes } from "react";
import classes from "./Input.module.scss";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <div className={classes.field}>
      {label && (
        <label className={classes.label} htmlFor={id}>
          {label}
        </label>
      )}
      <input className={classes.input} id={id} {...props} />
    </div>
  );
};
