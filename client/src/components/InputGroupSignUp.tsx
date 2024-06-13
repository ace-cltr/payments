import Button from "./Button";

const InputGroup: React.FC = () => {
  return (
    <>
      <h2 className="mt-4 font-mono">First Name</h2>
      <input
        className="font-mono shadow-inner"
        placeholder="John"
        type="text"
      />
      <h2 className="mt-4 font-mono">Last Name</h2>
      <input className="font-mono shadow-inner" placeholder="Doe" type="text" />
      <h2 className="mt-4 font-mono">Email</h2>
      <input
        className="font-mono shadow-inner"
        placeholder="example@gmail.com"
        type="email"
      />
      <h2 className="mt-4 font-mono">Password</h2>
      <input
        className="font-mono shadow-inner"
        placeholder="Password"
        type="password"
      />
      <Button>Sign Up</Button>
    </>
  );
};

export default InputGroup;
