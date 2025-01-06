import React from "react";
import User from "../images/user2.jpg";
import Logout from "../images/logout.svg";
import userBg from "../images/uber-search-2.png";
import uberDriverLogo from "/src/images/UberDriveLogo.svg";
import { Link } from "react-router-dom";

const CaptainRide = () => {
  return (
    <div className="overflow-hidden max-h-[100vh] w-full ">
      <div className="absolute flex  justify-between items-center w-full">
        <img className="w-16  m-6" src={uberDriverLogo} alt="" />
        <Link to="/captain/logout">
          <img
            className="w-10 bg-white  p-2 rounded-full  m-5"
            src={Logout}
            alt=""
          />
        </Link>
      </div>

      <div className={` h-screen w-screen`}>
        <img src={userBg} alt="" />
      </div>
      {/* Main Panel -dashboard- */}
      <div className="absolute bottom-0  bg-white  py-4  rounded-t-xl">
        <div className="w-screen flex gap-4  px-5">
          <img src={User} className="rounded-full" width={40} />

          <div className="flex flex-col">
            <p className="text-[13px] font-medium text-zinc-500 tracking-tighter">
              Pick up at
            </p>
            <h3 className="font-semibold text-[16px] tracking-tighter">
              1599 Curabitur Rd
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainRide;
