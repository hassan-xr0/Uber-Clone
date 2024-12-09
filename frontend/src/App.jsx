import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainRegister from "./pages/CaptainRegister";
import GettingStarted from "./pages/GettingStarted";
import UserProtectWrapper from "./pages/UserProtectWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtextWrapper from "./pages/CaptainProtectWrapper";
import CaptainLogout from "./pages/CaptainLogout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<GettingStarted />} />
        <Route path="/home" element={<UserProtectWrapper><Home /></UserProtectWrapper>}/>
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserRegister />} />
        <Route path="/captains-login" element={<CaptainLogin />} />
        <Route path="/captains-signup" element={<CaptainRegister />} />
        <Route path='user/logout' element={<UserProtectWrapper><UserLogout /></UserProtectWrapper>} />
        <Route path="/captains-home" element={<CaptainProtextWrapper><CaptainHome /></CaptainProtextWrapper>} />
        <Route path="/captain/logout" element={<CaptainProtextWrapper><CaptainLogout/></CaptainProtextWrapper>} />
      </Routes>
    </>
  );
};

export default App;
