import type { TextareaHTMLAttributes } from "react";
import styles from "./Textarea.module.scss";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

export const Textarea = ({ label, id, ...props }: TextareaProps) => {
  return (
    <div className={styles.field}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <textarea className={styles.textarea} id={id} {...props} />
    </div>
  );
};
