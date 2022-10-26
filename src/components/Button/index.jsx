import React from "react";

const Button = ({ title, background }) => {
  return (
    <button
      className={`${background} text-white p-[12.5px] w-[215px] rounded-full absolute bottom-5`}
    >
      {title}
    </button>
  );
};

export default Button;
