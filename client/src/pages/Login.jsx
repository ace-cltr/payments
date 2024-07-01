import BrandLogo from "../components/BrandLogo";
import Heading from "../components/Heading";
import InputGroupLogin from "../components/InputGroupLogin";

const Login = () => {
  return (
    <div className="bg-rose-50 flex flex-col justify-center items-center min-h-screen md:flex-row">
      <div className="bg-rose-50 shadow-lg flex flex-col border-2 border-amber-300 rounded-2xl px-8 py-4 sm:px-12 md:px-24">
        <BrandLogo>Payments</BrandLogo>
        <Heading>Log In</Heading>
        <InputGroupLogin />
      </div>
    </div>
  );
};

export default Login;
