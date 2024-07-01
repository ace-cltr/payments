
// import { CopyBlock, dracula } from "react-code-blocks";
import { Link } from "react-router-dom";

const LandingPage= () => {
  return (
    <div className="bg-rose-50 flex flex-row justify-center items-center min-h-screen">
      <div className="bg-white shadow-lg flex flex-col  rounded-2xl w-[90vw] h-[90vh]">
        <div className="shadow-lg flex justify-between items-center border-2 border-amber-500 rounded-2xl px-12 py-2 m-4 mb-7">
          <Link to="*">
            <h1 className="font-[pacifico] text-amber-400 flex flex-row justify-center items-center text-4xl m-2 cursor-pointer">
              Payments
            </h1>
          </Link>
          <div className="flex items-center space-x-4">
            <p className="font-mono text-l">New user? first</p>
            <Link to="/signup">
              <button className="font-mono shadow-md border-2 border-black bg-amber-400 p-1 rounded-md">
                Sign up
              </button>
            </Link>
            <Link to="login">
              <button className="font-mono shadow-md border-2 border-black rounded-md bg-amber-400 p-1">
                Login
              </button>
            </Link>
          </div>
        </div>
        <p className="font-mono mx-5">
          Hi there, this Website focuses on how payments work behind the seen in
          the Backend.
          <br /> You might have wondered what will happen if I send two people
          some money at the same time and break the system... wha-t you haven't
          too bad I'm still gonna tell you why this doesn't happens (usually),
          There is a concept called{" "}
          <strong className="text-amber-600 text-xl">Sessions</strong>, <br />{" "}
          What is a Session anyways? and what makes it so useful in the
          situation mentioned above
        </p>
        {/* <code className="w-[70-vw] mx-5">
          <CopyBlock
            language={"text"}
            text={"console.log('hello')"}
            showLineNumbers={true}
            theme={dracula}
          />
        </code> */}
      </div>
    </div>
  );
};

export default LandingPage;
