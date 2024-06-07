// import React, { useEffect, useState } from "react";
import BrandLogo from "../components/BrandLogo";
import Heading from "../components/Heading";
import InputGroup from "../components/InputGroup";
import Button from "../components/Button";
import { Link } from "react-router-dom";
// import axios from "axios";

const SignUp: React.FC = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // useEffect(()=>{
  //   const response = await axios.post()
  // })
  return (
    <div className="bg-rose-50 flex flex-row justify-center items-center min-h-screen">
      <div className="bg-rose-50 shadow-lg flex flex-col border-2 border-amber-300 rounded-2xl px-24 py-4">
        <BrandLogo>Payments</BrandLogo>
        <Heading>Sign Up</Heading>
        <InputGroup placeholder="John">First Name</InputGroup>
        <InputGroup placeholder="Doe">Last Name</InputGroup>
        <InputGroup placeholder="example@gmail.com">Email</InputGroup>
        <InputGroup placeholder="password" type="password">
          Password
        </InputGroup>
        <Button>Sign up</Button>
        <p className="flex flex-row justify-center items-center">
          Already have an account?{" "}
          <Link to="/login">
            <strong className="text-amber-600 cursor-pointer ml-0.5 hover:underline">
              Log In
            </strong>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
