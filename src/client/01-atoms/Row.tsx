type Props = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export const Row = ({className, style, children}: Props) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "row",
        ...style,
      }}>
      {children}
    </div>
  );
};
