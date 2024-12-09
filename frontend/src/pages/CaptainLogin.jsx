import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UberDriverLogo from "/src/images/UberDriveLogo.svg";
import { useContext } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";


const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate()

  const submitHandler = async(e) => {
    e.preventDefault();
    const captainData = { email: email, password: password };

    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData);
    if(res.status === 200) {
      setCaptain(res.data.captain);
      localStorage.setItem('captain-token', res.data.token);
      navigate("/captains-home");
    }

    console.log(captain);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="uber-move-text py-6 px-4">
      <div className="logo mb-5 mt- w-full flex items-center jstify-center">
        <p className="text-3xl font-medium">Captain SignUp</p>
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
            placeholder="captain@uber.com"
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
            Continue
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
          to="/captains-signup"
          className="bg-neutral-200  block text-center  text-black font-semibold w-full py-3 rounded-lg mt-2"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="bg-yellow-300 block text-center text-black font-semibold w-full py-3 rounded-lg mt-2"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
