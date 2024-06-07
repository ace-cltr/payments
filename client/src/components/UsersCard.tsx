import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface InputProps {
  placeholder?: string;
  type?: string;
  children?: ReactNode;
}
const UsersCard: React.FC<InputProps> = () => {
  return (
    <div className="flex justify-between items-center border-t-2 border-b-2 border-amber-300 px-4 py-2 mx-16 my-4">
      <div className="flex space-x-4">
        <div className="border-2 bg-amber-400 text-xl font-bold cursor-pointer border-amber-500 rounded-full w-14 h-14 flex items-center justify-center">
          U
        </div>
        <div className="font-mono border-blue-500 flex items-center justify-center">
          User 1
        </div>
      </div>
      <Link to="/send">
        <button className="font-mono border-2 border-amber-600 rounded-lg p-2 bg-amber-500 flex items-center justify-center">
          Send Money
        </button>
      </Link>
    </div>
  );
};

export default UsersCard;
