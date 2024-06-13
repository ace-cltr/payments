import Button from "./Button";

const InputGroup: React.FC = () => {
  return (
    <>
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
      <Button>Login</Button>
    </>
  );
};

export default InputGroup;
