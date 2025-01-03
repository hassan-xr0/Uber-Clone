import React, { useEffect } from "react";
import uberDriverLogo from "/src/images/UberDriveLogo.svg";
import userBg from "../images/uber-search-2.png";
import MapPin from "../images/map-pin.svg";
import Sqaure from "../images/square.svg";
import PaymentMethod from "../images/bank-card.svg";
import ConfirmRide from "../components/ConfirmRide";
import TotalDistance from "../images/total-distance.svg";
import HoursOnline from "../images/hour.svg";
import TotalJob from "../images/total-job.svg";
import DriverPfp from "../images/driver-profile.webp";
import Logout from "../images/logout.svg";
import User from "../images/user2.jpg";
import Home from "../images/home.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CaptainHome = () => {
  const [isOpenRideDetail, setIsOpenRideDetails] = useState(false);
  const [rideReq, setRideReq] = useState(true);
  const RideReqRef = useRef(null);
  const RideDetialsRef = useRef(null)

  useEffect(() => {
    if(isOpenRideDetail) setRideReq(false)
  }, [rideReq])
  

  useGSAP(() => {
    gsap.to(RideReqRef.current, {
      display: rideReq ? "block" : "none",
      opacity: rideReq ? 1 : 0,
      y: rideReq ? 0 : 200,
      duration: 0.2,
      ease: "power2.out",
    });

    gsap.to(RideDetialsRef.current, {
      display: isOpenRideDetail ? "block" : "none",
      opacity: isOpenRideDetail ? 1 : 0,
      y: isOpenRideDetail ? 0 : 400,
      duration: 0.2,
      ease: "power2.out",
    });

  }, [rideReq, isOpenRideDetail]);

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
              <h3 className="text-base font-semibold tracking-tighter">
                30 KM
              </h3>
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

      {/* Ride Request Panel  */}
      <div
        ref={RideReqRef}
        className="absolute bottom-0  bg-white  py-6  rounded-t-xl"
      >
        <div className="w-screen flex g flex-col items-centr px-4 ">
          <h2 className="text-lg font-semibold my-3">New ride available !</h2>
          <div className="flex items-center  mb-6 w-full justify-between bg-yellow-300 p-3 rounded-lg leading-5">
            <div className="flex items-center gap-2">
              <img src={User} className="rounded-full" width={40} />
              <div className="flex flex-col">
                <h3 className="font-semibold text-[16px] tracking-tighter">
                  Sarah Johnson
                </h3>
              </div>
            </div>

            <div className="text-right">
              <h3 className="font-semibold text-[17px] tracking-tighter">
              ₹ 320
              </h3>
              <p className="text-[13px] text-zinc-500 tracking-tighter">
                1.5 KM
              </p>
            </div>
          </div>

          <div className="mb-2">
            <div className="flex min-h-[5vh] items-center w-full gap-4 border-t-[1px] border-t-zinc-300 px-4 py-2">
              <div className="w-[5vw]">
                <img src={MapPin} width={20} />
              </div>

              <div className="w-[90vw]">
                <h3 className="text-base font-semibold tracking-tighter">
                  562/31-A
                </h3>
                <p className="text-[11px] text-zinc-500 tracking-tight">
                  {" "}
                  Nulla St, Miami Beach North
                </p>
              </div>
            </div>

            <div className="flex min-h-[5vh] items-center justify-between w-full gap-4 border-y-[1px] border-t-zinc-300 px-4 py-2">
              <div className="w-[5vw]  ">
                <img src={Sqaure} width={10} />
              </div>

              <div className="w-[90vw]">
                <h3 className="text-base font-semibold tracking-tighter">
                  Brockton Avenue, Abington
                </h3>
                <p className="text-[11px] text-zinc-500 tracking-tight">
                  {" "}
                  Viverra. Avenue, Latrobe DE, P.O. Box 132 1599 Curabitur Rd.
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-row-reverse items-end mt-3 gap-2">
            <button onClick={() => setIsOpenRideDetails (true)} className=" bg-black border-2 border-black text-white px-[12vw] py-[8px] text-sm rounded-lg ">
              Accept
            </button>
            <button
              onClick={() => setRideReq(false)}
              className=" bg-zinc-100 border-2 border-black text-black px-[12vw] py-[8px] text-sm  rounded-lg "
            >
              Ignore
            </button>
          </div>
        </div>
      </div>

      {/* Ride Details */}
      <div ref={RideDetialsRef} className="absolute bottom-0 bg-red-100 h-[100vh] w-full" ></div>
    </div>
  );
};

export default CaptainHome;
