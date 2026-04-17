/**
 * Utility function to combine class names, filtering out falsy values.
 * Similar to Tailwind's `cn` function.
 */
export const cn = (
  ...classes: (string | undefined | null | false)[]
): string => {
  return classes.filter(Boolean).join(" ");
};
