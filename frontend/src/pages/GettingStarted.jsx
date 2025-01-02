import React from "react";
import { Link } from "react-router-dom";
import uberLogo from '/src/images/uber-logo.png'


const GettingStarted = () => {
  return (
    <div className="uber-move-text">
      <div className="h-screen w-full pt-8  bg-[url(/src/images/hero-bg.avif)]  bg-cover bg-ceter bg-no-repeat  flex justify-between flex-col">
      <img className='w-16 ml-8' src={uberLogo} alt="" />

        <div className="bg-white py-5  px-7">
          <h2 className="text-3xl tracking-tighter font-semibold">Get Started with Uber</h2>
          <Link to='/select-role' className="mt-7 block font-medium text-center bg-black text-white w-full p-[0.9rem] rounded-lg" >Continue</Link>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
