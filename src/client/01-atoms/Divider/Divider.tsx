import {Separator} from "radix-ui";

type Props = {
  faded?: boolean;
  fade_direction?: "left" | "right";
  orientation?: "horizontal" | "vertical";
  size?: number;
  color?: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const Divider = ({
  faded,
  fade_direction,
  orientation = "horizontal",
  size = 0,
  color = "var(--fg-color)",
  id,
  className = "",
  style,
}: Props) => {
  return (
    <Separator.Root
      id={id}
      orientation={orientation}
      className={`Divider ${className}`}
      style={{
        margin: `${size}rem 0`,
        background: faded
          ? `linear-gradient(
                to ${fade_direction || "right"},
                ${color} 0%,
                color-mix(in srgb, ${color} 50%, transparent) 50%,
                color-mix(in srgb, ${color} 0%, transparent) 100%
              )`
          : `${color}`,
        ...(orientation === "horizontal"
          ? {
              width: "100%",
              height: 1,
            }
          : {
              width: 1,
              height: "100%",
            }),
        ...style,
      }}
    />
  );
};
