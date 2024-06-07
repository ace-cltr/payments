import React, { PropsWithChildren } from "react";

const BrandLogo: React.FC<PropsWithChildren> = ({ children }) => {
  return <h1 className="font-[pacifico] text-amber-400 flex flex-row justify-center items-center text-5xl">{children}</h1>;
};

export default BrandLogo;
