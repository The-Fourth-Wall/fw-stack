type Props = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export const Column = ({children, id, className, style}: Props) => {
  return (
    <div
      id={id}
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        ...style,
      }}>
      {children}
    </div>
  );
};
