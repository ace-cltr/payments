import React from "react";
import BrandLogo from "../components/BrandLogo";
import Heading from "../components/Heading";
import InputGroup from "../components/InputGroup";
import Button from "../components/Button";

const Login: React.FC = () => {
  return (
    <div className="bg-rose-50 flex flex-row justify-center items-center min-h-screen">
      <div className="bg-rose-50 shadow-lg flex flex-col border-2 border-amber-300 rounded-2xl px-24 py-4">
        <BrandLogo>Payments</BrandLogo>
        <Heading>Log In</Heading>
        <InputGroup placeholder="example@gmail.com">Email</InputGroup>
        <InputGroup placeholder="password" type="password">
          Password
        </InputGroup>
        <Button>Log In</Button>
      </div>
    </div>
  );
};

export default Login;
