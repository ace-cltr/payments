import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

const BrandLogo: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Link to="*">
      <h1 className="font-[pacifico] text-amber-400 flex flex-row justify-center items-center text-5xl">
        {children}
      </h1>
    </Link>
  );
};

export default BrandLogo;
