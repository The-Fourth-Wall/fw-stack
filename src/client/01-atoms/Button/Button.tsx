import * as Ariakit from "@ariakit/react";
import {Row, Text} from "@atoms";
import "./Button.css";

type Props = Ariakit.ButtonProps & {
  label: string;
  color?: string;
  background?: string;
};

export const Button = ({
  label,
  color = "var(--white)",
  background = "var(--accent-color)",
  type,
  disabled,
  onClick,
  className = "",
  style,
}: Props) => {
  const button = (
    <Ariakit.Button
      type={type}
      className={`${className} Button`}
      disabled={disabled}
      onClick={onClick}
      style={
        {
          "--button-color": color,
          "--button-background": background,
          ...style,
        } as React.CSSProperties
      }>
      <Text
        label={label}
        size={0.875}
        type="secondary"
        color="var(--fg-color)"
      />
    </Ariakit.Button>
  );

  return disabled ? (
    <Row className="ButtonWrapper" aria-hidden="true">
      {button}
    </Row>
  ) : (
    button
  );
};
