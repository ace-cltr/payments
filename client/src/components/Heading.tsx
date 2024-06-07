import React, { PropsWithChildren } from "react";

const Heading: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <h1 className="font-sans font-bold flex flex-row justify-center items-center mx-24 mt-6 text-2xl">
      {children}
    </h1>
  );
};

export default Heading;
