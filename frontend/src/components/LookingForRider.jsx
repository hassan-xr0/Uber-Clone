import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { useState } from "react";

const LookingForRider = ({
  setLookingDirver,
  WideArrow,
  Sqaure,
  PaymentMethod,
  MapPin,
  whiteCar,
  UserPng,
}) => {
  const loadingRef = useRef(null);
  const [driverFound,setDriverFound] = useState(false)

  const RideTimeout = setTimeout(() => {
    setDriverFound(true)
    console.log ('driver found')
  },5000)

  useGSAP(() => {
    gsap.to(loadingRef.current, {
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      width: "100vw ",
    });
  });
  return (
    <div>
      <div className="w-screen flex flex-col items-center">
        {" "}
        <div onClick={() =>{ setLookingDirver(false) 
          setDriverFound(false); clearTimeout(RideTimeout)}}>
          <img src={WideArrow} width={20} />
        </div>
        <h2 className="text-lg font-semibold mt-1 mb-2">
         { driverFound ? 'Waiting for driver' : 'Looking for nearby drivers'}
        </h2>
        {/* loading animation */}
        <div className="bg-blue-200 h-[3px] w-full flex flex-col items-center justify-center">
          {" "}
          <div
            ref={loadingRef}
            className="h-[2px] bg-blue-500 w-[0px] border-[1px] border-blue-300 "
          />
        </div>

        <div className="">
          <img src={whiteCar} width={110} />
        </div>
        <div className="flex h-[12h] items-center w-full gap-4 border-t-[1px] border-t-zinc-300 px-4 py-3">
          <div className={driverFound?'py-2': 'w-[5vw]'}>
            <img src={driverFound ? UserPng : MapPin} width={driverFound ? '70': '20'} />
          </div>

          <div className="w-[90vw]">
            <h3 className="text-lg font-semibold tracking-tighter">
              {driverFound?'Driver Name' : '562/31-A'}
            </h3>
            <p className="text-[11px] text-zinc-500 leading-4">
              {" "}
              {driverFound ? "Vehicle Details" :"Nulla St, Miami Beach North"}
            </p>
          </div>
        </div>
        <div className="flex h-[12vh] items-center justify-between w-full gap-4 border-t-[1px] border-t-zinc-300 px-4 py-3">
          <div className="w-[5vw]  ">
            <img src={driverFound? MapPin : Sqaure} width={driverFound? 90 :20} />
          </div>

          <div className="w-[90vw]">
            <h3 className={`${driverFound?'text-base' :'text-lg'} font-semibold tracking-tighter`}>
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
            <img src={PaymentMethod} width={driverFound? 30 :15} />
          </div>

          <div className="w-[90vw]">
            <h3 className={`${driverFound?'text-base' :'text-lg'} font-semibold tracking-tighter`}>
              ₹ 193.2
            </h3>
            <p className="text-[11px] text-zinc-500 leading-4">Cash Cash</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default LookingForRider;
