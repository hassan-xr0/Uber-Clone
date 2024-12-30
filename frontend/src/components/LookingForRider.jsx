import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";


const LookingForRider = ({
  setLookingDirver,
  WideArrow,
  Sqaure,
  PaymentMethod,
  MapPin,
  whiteCar,
}) => {
  const loadingRef = useRef(null);

  useGSAP(() => {
    gsap.to(loadingRef.current, {
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      width: '100vw ',
    });
  });
  return (
    <div>
      <div className="w-screen flex flex-col items-center">
        {" "}
        <div onClick={() => setLookingDirver(false)}>
          <img src={WideArrow} width={20} />
        </div>
        <h2 className="text-lg font-semibold mt-1 mb-2">
          Looking for nearby drivers
        </h2>
        <div  className="bg-blue-200 h-[3px] w-full flex flex-col items-center justify-center">
          {" "}
          {/* <div  className="h-[2px] bg-blue-200 w-full blur-[1px]"></div> */}
          <div ref={loadingRef} className="h-[2px] bg-blue-500 w-[0px] border-[1px] border-blue-300 "></div>
          {/* <div  className="h-[2px] bg-blue-200 w-full blur-[1px]"></div> */}
        </div>
        <div className="">
          <img src={whiteCar} width={110} />
        </div>
        <div className="flex h-[12vh] items-center w-full gap-4 border-t-[1px] border-t-zinc-300 px-4 py-3">
          <div className="w-[5vw]">
            <img src={MapPin} width={20} />
          </div>

          <div className="w-[90vw]">
            <h3 className="text-base font-semibold tracking-tighter">
              562/31-A
            </h3>
            <p className="text-[11px] text-zinc-500 leading-4">
              {" "}
              Nulla St, Miami Beach North
            </p>
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
      </div>
    </div>
  );
};

export default LookingForRider;
