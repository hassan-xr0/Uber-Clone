import React from "react";
import uberLogo from "/src/images/uber-logo.png";
import userBg from "../images/uber-search-2.png";
import ConfirmRide from "../components/ConfirmRide";
import MapPin from "../images/map-pin.svg";
import Sqaure from "../images/square.svg";
import PaymentMethod from "../images/bank-card.svg";
import whiteCar from "../images/white-car.webp";
import Home from "../images/home.svg";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="overflow-hidden max-h-[100vh] w-full">
        <img className="w-20 absolute m-8" src={uberLogo} alt="" />
       <Link to='/home'>
       <img className="w-10 bg-white right-0 p-2 rounded-full absolute m-5" src={Home} alt="" />
       </Link> 
    

      <div   className={` h-screen w-screen`}>
        <img src={userBg} alt="" />
      </div>

      <div className="absolute bottom-0  bg-white  pb-4">
        <div className="w-screen flex flex-col items-center">
          {" "}
          <h2 className="text-lg font-semibold mt-3">Make your payment</h2>
          <div className="flex items-center px-4  w-full justify-between">
            <img src={whiteCar} width={90} />
            <div className="text-right">
            <h3 className="font-semibold text-[17px] tracking-tighter">John Doe</h3>
            <h3 className="font-semibold text-[19px] tracking-tighter">MPA - 3722</h3>
            <p className="text-[13px] text-zinc-500 tracking-tighter">Suzuki Alto</p>
            </div>

          </div>

          <div className="flex h-[12vh] items-center justify-between w-full gap-4 border-t-[1px] border-t-zinc-300 px-4 py-3">
            <div className="w-[5vw]  ">
              <img src={Sqaure} width={10} />
            </div>

            <div className="w-[90vw]">
              <h3 className="text-base font-semibold tracking-tighter">
                Brockton Avenue, Abington
              </h3>
              <p className="text-[11px] text-zinc-500 leading-4">
                {" "}
                Viverra. Avenue, Latrobe DE, P.O. Box 132 1599 Curabitur Rd.
              </p>
            </div>
          </div>
          <div className="flex h-[11vh] items-center justify-between w-full gap-4 border-t-[1px] border-t-zinc-300 px-4 py-3">
            <div className="w-[5vw]  ">
              <img src={PaymentMethod} width={15} />
            </div>

            <div className="w-[90vw]">
              <h3 className="text-base font-semibold tracking-tighter">
                ₹ 193.2
              </h3>
              <p className="text-[11px] text-zinc-500 leading-4">Cash Cash</p>
            </div>
          </div>
          <button
           
            className="w-[90vw] text-center bg-black text-zinc-200 font-semibold py-[9px] text-sm mt-3 rounded-lg "
          >
            Make Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Riding;
