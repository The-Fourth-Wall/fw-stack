export type TextProps = {
  label: string;
  size: number;
  type: "primary" | "secondary" | "accent";
  color: string;
  className?: string;
  style?: React.CSSProperties;
};

export const Text = ({
  label,
  size,
  type,
  color,
  className,
  style,
}: TextProps) => {
  return (
    <span
      className={className}
      style={{
        fontFamily: "Space Mono, monospace",
        fontSize: `${size}rem`,
        fontWeight:
          type === "primary" ? "700" : type === "secondary" ? "400" : "700",
        opacity: type === "secondary" ? 0.9 : 1,
        color: color,
        ...style,
      }}>
      {label}
    </span>
  );
};
