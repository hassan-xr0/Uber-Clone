import React, { useRef, useState } from "react";
import User from "../images/user2.jpg";
import Logout from "../images/logout.svg";
import userBg from "../images/uber-search-2.png";
import uberDriverLogo from "/src/images/UberDriveLogo.svg";
import WideArrow from "../images/arrow-down-wide.svg";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CaptainRide = () => {
  const [isOpenPanel, setIsOpenPanel] = useState(false)
  const panelRef = useRef(null)
  useGSAP(()=>{
    gsap.to(panelRef.current, {
      duration: 0.2,
      y: isOpenPanel ? 0 : 360,
      opacity: isOpenPanel ? 1 : 0,
      display: isOpenPanel ? "flex" : "none",
    });
  },[isOpenPanel])
  return (
    <div className="overflow-hidden max-h-[100vh] w-full ">
      {/* header */}
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

      {/* background */}
      <div className={` h-screen w-screen`}>
        <img src={userBg} alt="" />
      </div>

      {/* Main Panel -dashboard- */}
      <div className="absolute bottom-0  bg-white pb-4 pt-1  rounded-t-xl">
        <div className="w-screen flex flex-col items-center  gap-4   px-">
          <div  onClick={() => {setIsOpenPanel(true) 
            console.log('hello')
          }}>
            <img src={WideArrow} width={30} className="rotate-180" />
          </div>
          <div className="flex w-full justify-between items-center px-5">
            
            <div className="flex gap-4 items-center">
            <div><img src={User} className="rounded-full" width={40} /></div>
            <div className="flex flex-col leading-4">
            <p className="text-[11px] font-medium text-zinc-500 tracking-tighter">4.2 km away</p>
              <p className="text-[12px] font-medium text-zinc-500 tracking-tighter">
                Pick up at
              </p>
              <h3 className="font-semibold text-[14px] tracking-tighter">
                1599 Curabitur Rd
              </h3>

            </div>
            </div>

            <button className="text-[12px] bg-black border-2 border-black text-white px-[9px] py-[9px] rounded-lg ">Complete ride</button>
          </div>
            
         

        </div>
      </div>

      {/* complete ride Penal */}
      <div ref={panelRef} className="absolute bottom-0  bg-white pb-4 pt-1  rounded-t-xl">
        <FinishRide setIsOpenPanel={setIsOpenPanel} />
        
      </div>
    </div>
  );
};

export default CaptainRide;
