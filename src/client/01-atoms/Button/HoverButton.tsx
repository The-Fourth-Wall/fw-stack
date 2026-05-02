import * as Ariakit from "@ariakit/react";
import {Button} from "./Button";
import "./HoverButton.css";

type Props = Ariakit.ButtonProps & {
  disabledStyle?: React.CSSProperties;
};

export const HoverButton = ({style, disabledStyle, ...props}: Props) => {
  return (
    <Button
      {...props}
      disabledStyle={disabledStyle}
      style={{
        opacity: 1,
        ...style,
      }}
      className="HoverButton"
    />
  );
};
