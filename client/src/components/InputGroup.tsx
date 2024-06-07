import React, { ReactNode } from "react";

interface InputProps {
  placeholder: string;
  type?: string;
  children?: ReactNode;
}
const InputGroup: React.FC<InputProps> = ({ placeholder, type, children }) => {
  return (
    <>
      <h2 className="mt-4 font-mono">{children}</h2>
      <input className="font-mono shadow-inner" placeholder={placeholder} type={type} />
    </>
  );
};

export default InputGroup;
