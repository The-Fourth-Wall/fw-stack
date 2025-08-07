import React from "react";
import "./InputField.css";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export const InputField = React.forwardRef<HTMLInputElement, Props>(
  ({className = "", ...props}, ref) => {
    return (
      <input
        ref={ref}
        autoComplete="off"
        className={`InputField ${className} ${props.disabled ? "disabled" : ""}`}
        disabled={props.disabled}
        {...props}
      />
    );
  },
);
