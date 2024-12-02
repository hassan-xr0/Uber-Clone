import React, { useState } from "react";
import { Link } from "react-router-dom";



const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userDate,setUserData] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        setUserData({email,password})
        console.log(userDate)
        setEmail('')
        setPassword('')
    }
  return (
    <div className="uber-move-text py-6 px-4">
      <div className="logo mb-8 mt-5 w-full flex items-center justify-center">
        <img
          className="w-20"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
      </div>

      <div className="login-form">
        <form action="" onSubmit={e=>submitHandler(e)}>
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
        <Link to='/users/register' className="bg-neutral-200  block text-center  text-black font-semibold w-full py-3 rounded-lg mt-2">
          Sign Up
        </Link>
        <Link to='/captains/login' className="bg-green-300 block text-center text-black font-semibold w-full py-3 rounded-lg mt-2">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
