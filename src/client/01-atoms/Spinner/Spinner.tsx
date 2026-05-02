import "./Spinner.css";

type Props = {
  size?: number;
  width?: number;
};

export const Spinner = ({size = 40, width = 0.25}: Props) => {
  return (
    <div
      className="Spinner"
      style={{
        width: size,
        height: size,
        border: `${width}rem solid var(--fg-color)`,
        borderTop: `${width}rem solid transparent`,
        borderRadius: "50%",
      }}></div>
  );
};
