import React from "react";
import Navbar from "../components/Navbar";
import Balance from "../components/Balance";
import UsersSearch from "../components/UsersSearch";
import UsersCard from "../components/UsersCard";

const Dashboard: React.FC = () => {
  return (
    <div className="bg-rose-50 flex flex-row justify-center items-center min-h-screen">
      <div className="bg-rose-50 shadow-lg flex flex-col  rounded-2xl w-[90vw] h-[90vh]">
        <Navbar />
        <Balance />
        <UsersSearch />
        <UsersCard />
      </div>
    </div>
  );
};

export default Dashboard;
