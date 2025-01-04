import React from 'react'
import DriverPfp from "../images/driver-profile.webp";
import Logout from "../images/logout.svg";
import userBg from "../images/uber-search-2.png";
import uberDriverLogo from "/src/images/UberDriveLogo.svg";
import { Link } from 'react-router-dom';

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
      <div className="absolute bottom-0  bg-white  py-6  rounded-t-xl">
        <div className="w-screen flex gap-4 flex-col items-center px-4">
          <div className="flex items-center   w-full justify-between  leading-5">
            <div className="flex items-center gap-2">
              <img src={DriverPfp} className="rounded-full" width={40} />
              <div className="flex flex-col">
                <h3 className="font-semibold text-[16px] tracking-tighter">
                  Jeremah Curtis
                </h3>
                <p className="text-[13px] text-zinc-500 tracking-tighter">
                  Basic level
                </p>
              </div>
            </div>

            <div className="text-right">
              <h3 className="font-semibold text-[17px] tracking-tighter">
                ₹ 3200
              </h3>
              <p className="text-[13px] text-zinc-500 tracking-tighter">
                Earned
              </p>
            </div>
          </div>
          
        </div>
      </div>


    </div>
  )
}

export default CaptainRide