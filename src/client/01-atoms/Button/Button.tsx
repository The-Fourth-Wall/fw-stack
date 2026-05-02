import * as Ariakit from "@ariakit/react";
import {Row} from "../Row/Row";
import "./Button.css";

type Props = Ariakit.ButtonProps & {
  disabledStyle?: React.CSSProperties;
};

export const Button = ({
  color = "",
  children,
  type,
  disabled,
  disabledStyle,
  onClick,
  className = "",
  style,
}: Props) => {
  const button = (
    <Ariakit.Button
      type={type}
      className={`Button ${className}`}
      disabled={disabled}
      onClick={onClick}
      style={{
        background: color,
        ...style,
        ...(disabled && disabledStyle),
      }}>
      <Row
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}>
        {children}
      </Row>
    </Ariakit.Button>
  );

  return disabled ? (
    <Row
      className="ButtonWrapper"
      style={{...disabledStyle}}
      aria-hidden="true">
      {button}
    </Row>
  ) : (
    button
  );
};
