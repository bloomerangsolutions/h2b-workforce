import type { CSSProperties } from "react";

type Props = {
  name: string;
  className?: string;
  filled?: boolean;
  style?: CSSProperties;
};

export function Icon({ name, className = "", filled = false, style }: Props) {
  return (
    <span
      className={`material-symbols-outlined ${filled ? "filled" : ""} ${className}`}
      style={style}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
