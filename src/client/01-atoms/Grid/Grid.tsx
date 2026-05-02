type Props = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export const Grid = ({className, style, children}: Props) => {
  return (
    <div
      className={className}
      style={{
        display: "grid",
        ...style,
      }}>
      {children}
    </div>
  );
};
