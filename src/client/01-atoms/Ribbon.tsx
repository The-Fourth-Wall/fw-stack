type Props = {
  text: string;
  color: string;
  className?: string;
  style?: React.CSSProperties;
};

export const Ribbon = ({text, color, className, style}: Props) => {
  return (
    <div
      className={className}
      style={{
        zIndex: 101,
        position: "absolute",
        width: "10rem",
        top: "1rem",
        left: "-3.1rem",
        transform: "rotate(-45deg)",
        backgroundColor: color,
        backgroundImage: `linear-gradient(
          45deg,
          rgba(255, 255, 255, 0.15) 25%,
          transparent 25%,
          transparent 50%,
          rgba(255, 255, 255, 0.15) 50%,
          rgba(255, 255, 255, 0.15) 75%,
          transparent 75%,
          transparent
        )`,
        backgroundSize: "1rem 1rem",
        boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)",
        color: "var(--fg-color)",
        textAlign: "center",
        ...style,
      }}>
      <span
        style={{
          fontSize: "0.875rem",
          fontWeight: 700,
          color: "var(--fg-color)",
        }}>
        {text}
      </span>
    </div>
  );
};
