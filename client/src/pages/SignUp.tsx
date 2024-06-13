import BrandLogo from "../components/BrandLogo";
import Heading from "../components/Heading";
import InputGroupSignUp from "../components/InputGroupSignUp";

import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
  return (
    <div className="bg-rose-50 flex flex-row justify-center items-center min-h-screen">
      <div className="bg-rose-50 shadow-lg flex flex-col border-2 border-amber-300 rounded-2xl px-24 py-4">
        <BrandLogo>Payments</BrandLogo>
        <Heading>Sign Up</Heading>
        <InputGroupSignUp />
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
