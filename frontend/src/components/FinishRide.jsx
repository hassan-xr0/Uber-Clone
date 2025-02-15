import React from "react";
import User from "../images/user2.jpg";
import MapPin from "../images/map-pin.svg";
import Sqaure from "../images/square.svg";
import PaymentMethod from "../images/bank-card.svg";
import WideArrow from "../images/arrow-down-wide.svg";
import { Link } from "react-router-dom";

const FinishRide = ({setIsOpenPanel}) => {
  
  return (
    <div className="w-screen flex g flex-col  px-4 ">
      <div className="flex justify-center" onClick={() => {setIsOpenPanel(false)}}>
        <img src={WideArrow} width={30} />
      </div>
      <h2 className="text-lg font-semibold my-3">Finish this Ride !</h2>

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
          <h3 className="font-semibold text-[17px] tracking-tighter">₹ 320</h3>
          <p className="text-[13px] text-zinc-500 tracking-tighter">1.5 KM</p>
        </div>
      </div>

      <div className="mb-6">
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

      <Link
        to="/captains-home"
        onClick={() => setIsOpenPanel(true)}
        className="text-center bg-black border-2 border-black text-white px-[12vw] py-[8px] text-sm rounded-lg "
      >
        Complete Ride
      </Link>
    </div>
  );
};

export default FinishRide;
