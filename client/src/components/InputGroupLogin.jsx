// import { useContext } from "react";
// import Button from "./Button";
// import { AppContext } from "../App";

const InputGroup = () => {
  // const { firstName } = useContext(AppContext);
  return (
    <form className="bg-rose-50 flex flex-col">
      <h2 className="mt-4 font-mono">Email</h2>
      <input
        className="font-mono shadow-inner"
        placeholder="Email"
        type="text"
      />
      <h2 className="mt-4 font-mono">Password</h2>
      <input
        className="font-mono shadow-inner"
        placeholder="Password"
        type="password"
      />
      <button className=" bg-amber-400 border-2 border-black rounded px-1 mt-6 mb-3">Login</button>
    </form>
  );
};

export default InputGroup;
