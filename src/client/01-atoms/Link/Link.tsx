type Props = {
  href: string;
  accessibility?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  noSwup?: boolean;
  external?: boolean;
  onClick?: React.DOMAttributes<HTMLAnchorElement>["onClick"];
};

export const Link = ({
  href,
  accessibility,
  children,
  className,
  style,
  noSwup,
  external,
  onClick,
}: Props) => {
  return (
    <a
      href={href}
      draggable="false"
      aria-label={accessibility}
      className={className}
      style={style}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      data-no-swup={noSwup ? "" : undefined}>
      {children}
    </a>
  );
};
