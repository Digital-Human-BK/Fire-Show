import type { TextareaHTMLAttributes } from "react";
import classes from "./Input.module.scss";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

export const Textarea = ({ label, id, ...props }: TextareaProps) => {
  return (
    <div className={classes.field}>
      {label && (
        <label className={classes.label} htmlFor={id}>
          {label}
        </label>
      )}
      <textarea className={classes.textarea} id={id} {...props} />
    </div>
  );
};
