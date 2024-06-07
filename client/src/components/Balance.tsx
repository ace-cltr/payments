import React, { ReactNode } from "react";

interface InputProps {
  placeholder?: string;
  type?: string;
  children?: ReactNode;
}
const Balance: React.FC<InputProps> = () => {
  const balance = 10000;
  return <p className="font-mono mx-12 my-4 text-xl">Your Balance: ₹{balance}</p>;
};

export default Balance;
