import React from "react";
import { Link } from "react-router-dom";
import uberLogo from "/src/images/uber-logo.png";
import uberDriverLogo from "/src/images/UberDriveLogo.svg";
import whiteCar from "../images/black-car.webp";
import user from "../images/User.webp";

const CreatingAccount = () => {
  return (
    <div className="p-5">
      <img className="w-20 " src={uberDriverLogo} alt="" />
      <div className="my-4">
        <h1 className="text-2xl tracking-tighter font-semibold">
          Select as your prefrence
        </h1>
      </div>


        <div className="flex justify-between gap-2">
          <Link
            to="/signup"
            className="flex flex-col p-2 items-center gap-2 w-full min-h-[140px] rounded-lg bg-neutral-100 cursor-pointer hover:border-[3px] border-zinc-800 transition-colors   "
          >
            <img
              src={user}
              alt="As User"
              width={100}
              className=" object-contain"
            />
            <h2 className="font-semibold tracking-tight">Continue as user</h2>
          </Link>

          <Link
            to="/captains-signup"
            className="flex flex-col p-2 items-center gap-2 w-full min-h-[140px] rounded-lg bg-neutral-100 cursor-pointer hover:border-[3px] border-zinc-800 transition-colors"
          >
            <img
              src={whiteCar}
              alt="As User"
              width={170}
              className="grayscale object-contain"
            />
            <h2 className="font-semibold tracking-tight">Continue as driver</h2>
          </Link>
        </div>

        <p className="text-zinc-700 text-xs absolute bottom-5 ">
          This site is protected by reCAPTCHA and the Google{" "}
          <span className="text-black underline">Privacy Policy</span>and{" "}
          <span className="text-black underline">Terms of Service</span> apply
        </p>

    </div>
  );
};

export default CreatingAccount;
