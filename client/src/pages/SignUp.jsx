import BrandLogo from "../components/BrandLogo";
import Heading from "../components/Heading";
import InputGroupSignUp from "../components/InputGroupSignUp";

import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="bg-rose-50 flex flex-row justify-center items-center min-h-screen">
      <div className="bg-rose-50 shadow-lg flex flex-col border-2 border-amber-300 rounded-2xl px-24 py-4">
        <BrandLogo>Payments</BrandLogo>
        <Heading>Sign Up</Heading>
        <InputGroupSignUp />
        <p className="flex flex-wrap justify-center items-center text-center md:text-left">
          Already have an account?{" "}
          <Link to="/login">
            <strong className="text-amber-600 cursor-pointer ml-1 hover:underline">
              Log In
            </strong>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
