type Props = {
  size: number;
  className?: string;
  style?: React.CSSProperties;
};

export const Spacer = ({size, className, style}: Props) => {
  return (
    <div
      className={className}
      style={{
        height: `${size}rem`,
        width: `${size}rem`,
        ...style,
      }}
    />
  );
};
