import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import TransferMoney from "./pages/TransferMoney";
import LandingPage from "./pages/LandingPage";

export const AppContext = createContext("");

const App = () => {
  const [userDetails, setUserDetails] = useState({
    firsName: "",
    lastName: "",
    username: "",
    password: "",
  });

  // useEffect(()=>{
  //   const response = await axios.post()
  // })
  return (
    <AppContext.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<TransferMoney />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
