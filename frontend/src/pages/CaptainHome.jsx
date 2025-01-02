import React from "react";
import uberDriverLogo from "/src/images/UberDriveLogo.svg";
import userBg from "../images/uber-search-2.png";
import ConfirmRide from "../components/ConfirmRide";
import TotalDistance from "../images/total-distance.svg";
import HoursOnline from "../images/hour.svg";
import TotalJob from "../images/total-job.svg";
import DriverPfp from "../images/driver-profile.webp";
import Home from "../images/home.svg";
import { Link } from "react-router-dom";

const CaptainHome = () => {
  return (
    <div className="overflow-hidden max-h-[100vh] w-full ">
      <div className="absolute flex  justify-between items-center w-full">
        <img className="w-16  m-6" src={uberDriverLogo} alt="" />
        <Link to="/">
          <img
            className="w-10 bg-white  p-2 rounded-full  m-5"
            src={Home}
            alt=""
          />
        </Link>
      </div>

      <div className={` h-screen w-screen`}>
        <img src={userBg} alt="" />
      </div>

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
          <div className=" flex bg-yellow-300 items-center justify-around gap-4 px-3 py-4 rounded-xl w-full">
            <div className="flex flex-col items-center gap-1">
              <img src={HoursOnline} alt="hours-oneline" width={35} />
              <h3 className="text-base font-semibold tracking-tighter">10.2</h3>
              <p className="text-center text-zinc-500 text-[11px]">
                Hours Online
              </p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <img src={TotalDistance} alt="hours-oneline" width={35} />
              <h3 className="text-base font-semibold tracking-tighter">30 KM</h3>
              <p className="text-center text-zinc-500 text-[11px]">
                Hours Distance
              </p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <img src={TotalJob} alt="hours-oneline" width={35} />
              <h3 className="text-base font-semibold tracking-tighter">20</h3>
              <p className="text-center text-zinc-500 text-[11px]">
                Total Jobs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainHome;
