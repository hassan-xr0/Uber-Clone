import React, { useState, navi } from "react";
import { Link, useNavigate } from "react-router-dom";
import uberLogo from "/src/images/uber-logo.png";
import axios from "axios";
import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";

const UserRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [userDate, setUserData] = useState({});

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: { firstname: firstname, lastname: lastname },
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );

    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
  };
  return (
    <div className="uber-move-text py-6 px-4">
      <div className="logo mb-8 mt-5 w-full flex items-center justify-center">
        <img className="w-20" src={uberLogo} alt="" />
      </div>

      <div className="login-form">
        <form action="" onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg tracking-tighter font-medium">
            What's your Name
          </h3>
          <div className="name flex justify-between gap-2">
            <input
              className="my-2 w-[50%] outline-none bg-neutral-200 py-3 px-4 rounded-lg"
              type="text"
              required
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="Firstname"
            />
            <input
              className="my-2 w-[50%] outline-none bg-neutral-200 py-3 px-4 rounded-lg"
              type="text"
              required
              name="email"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Lastname"
            />
          </div>

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
            Create Account
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
          to="/login"
          className="bg-neutral-200  block text-center  text-black font-semibold w-full py-3 rounded-lg mt-2"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default UserRegister;
