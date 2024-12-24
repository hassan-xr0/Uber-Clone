import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import uberLogo from "/src/images/uber-logo.png";
import axios from "axios";
import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [userDate,setUserData] = useState({})

  const { user, setUser } = useContext(UserDataContext);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    );
    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div className="uber-move-text py-6 px-4">
      <div className="logo mb-8 mt-5 w-full flex items-center justify-center">
        <img className="w-20" src={uberLogo} alt="" />
      </div>

      <div className="login-form">
        <form action="" onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg tracking-tighter font-medium">
            What's your email
          </h3>
          <input
            className="my-2 w-full outline-none bg-neutral-200 py-3 px-4 rounded-lg"
            type="text"
            required
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user@uber.com"
          />
          <h3 className="text-lg tracking-tighter font-medium">
            What's your Password
          </h3>
          <input
            className="my-2 w-full outline-none bg-neutral-200 py-3 px-4 rounded-lg"
            type="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button className="bg-black text-white w-full py-3 rounded-lg mt-2">
            Login
          </button>
        </form>
      </div>

      <div className="flex items-center my-3">
        <hr className="flex-1 border-t border-2 border-gray-300" />
        <span className="mx-2 text-gray-400">or</span>
        <hr className="flex-1 border-t border-2 border-gray-300" />
      </div>

      <div className="ex-btn">
        <Link
          to="/signup"
          className="bg-neutral-200  block text-center  text-black font-semibold w-full py-3 rounded-lg mt-2"
        >
          Create account
        </Link>
        <Link
          to="/captains-signup"
          className="bg-green-300 block text-center text-black font-semibold w-full py-3 rounded-lg mt-2"
        >
          Become Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
