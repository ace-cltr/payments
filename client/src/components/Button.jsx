import React, { ReactNode } from "react";


const Button = ({ children }) => {
  return (
    <button className=" bg-amber-400 border-2 border-black rounded mt-6 mb-3">
      {children}
    </button>
  );
};

export default Button;
