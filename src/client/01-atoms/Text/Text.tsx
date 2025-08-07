import "./Text.css";

type Props = {
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
  className = "",
  style,
}: Props) => {
  return (
    <span
      className={`${className} text-${type}`}
      style={{
        fontSize: `${size}rem`,
        color: color,
        ...style,
      }}>
      {label}
    </span>
  );
};
