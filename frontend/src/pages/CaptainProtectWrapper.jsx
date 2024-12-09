import React from "react";
import { useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";

const CaptainProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("captain-token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/captains-login");
    }
  }, [token]);


  return <div>{children}</div>;
};

export default CaptainProtectWrapper;
