import { useContext, useState } from "react";
import { AppContext } from "../App";

const InputGroup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { getUserSignupDetails } = useContext(AppContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (!(username && password && firstName && lastName)) return;
    const data = {
      firstName,
      lastName,
      username,
      password,
    };
    getUserSignupDetails(data);
  }

  return (
    <form className="bg-rose-50 flex flex-col" onSubmit={handleSubmit}>
      <h2 className="mt-4 font-mono">First Name</h2>
      <input
        className="font-mono shadow-inner"
        placeholder="John"
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <h2 className="mt-4 font-mono">Last Name</h2>
      <input
        className="font-mono shadow-inner"
        placeholder="Doe"
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <h2 className="mt-4 font-mono">Email</h2>
      <input
        className="font-mono shadow-inner"
        placeholder="example@gmail.com"
        type="email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <h2 className="mt-4 font-mono">Password</h2>
      <input
        className="font-mono shadow-inner"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className=" bg-amber-400 border-2 border-black rounded px-1 mt-6 mb-3"
      >
        Sign Up
      </button>
    </form>
  );
};

export default InputGroup;
