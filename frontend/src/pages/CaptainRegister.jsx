import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UberDriverLogo from "/src/images/UberDriveLogo.svg";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";


const CaptainRegister = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [captainData, setCaptainData] = useState({});

  const [color, setColor] = useState("");
  const [numPlate, setNumPlate] = useState("");
  const [capacity, setCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext)

  const submitHandler = async(e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
      vehicle: {
        color,
        numPlate,
        capacity,
        vehicleType
      },
    };

    const res = await  axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

   
    if (res.status === 201) {
      const data = res.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captains-home')
    }
    // console.log(captainData);

    console.log(captainData);
    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
    setColor("");
    setCapacity(""); 
    setNumPlate("");
    setVehicleType(""); 
  };
  return (
    <div className="uber-move-text py-6 px-4">
      <div className="logo mb-5 mt- w-full flex items-center jstify-center">
        <p className="text-3xl font-medium">Captain SignUp</p>
      </div>

      <div className="login-form">
        <form action="" onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg tracking-tighter font-medium">
            What's your Name
          </h3>
          <div className="name flex justify-between gap-2">
            <input
              className="firstname my-2 w-[50%] outline-none bg-neutral-200 py-3 px-4 rounded-lg"
              type="text"
              required
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="Firstname"
            />
            <input
              className="lastname my-2 w-[50%] outline-none bg-neutral-200 py-3 px-4 rounded-lg"
              type="text"
              required
              name="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Lastname"
            />
          </div>

          <h3 className="text-lg tracking-tighter font-medium">
            What's your email
          </h3>
          <input
            className="email my-2 w-full outline-none bg-neutral-200 py-3 px-4 rounded-lg"
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
            className="password my-2 w-full outline-none bg-neutral-200 py-3 px-4 rounded-lg"
            type="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
          <div className="flex gap-2 mb-2">
            <input
              required
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="Vehicle Color"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
            <input
              required
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="Vehicle Plate"
              value={numPlate}
              onChange={(e) => {
                setNumPlate(e.target.value);
              }}
            />
          </div>
          <div className="flex gap-2 mb-2">
            <input
              required
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
              type="number"
              placeholder="Vehicle Capacity"
              value={capacity}
              onChange={(e) => {
                setCapacity(e.target.value);
              }}
            />
              <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>

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

      <Link
        to="/captains-login"
        className="bg-neutral-200  block text-center  text-black font-semibold w-full py-3 rounded-lg mt-2"
      >
        Login
      </Link>
    </div>
  );
};

export default CaptainRegister;
