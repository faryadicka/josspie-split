import React from "react";

const Button = ({
  title,
  background,
  isPosition = true,
  text = "text-white",
  border = "border border-transparent",
  width = "215px",
  open,
  setOpen,
  padding = "12.5px",
  setTitle,
  label,
}) => {
  return (
    <button
      onClick={() => {
        setOpen(!open);
        setTitle(label);
      }}
      className={`${background} ${text} p-[${padding}] w-[${width}] rounded-full ${
        isPosition && "absolute"
      } bottom-5 ${border}`}
    >
      {title}
    </button>
  );
};

export default Button;
