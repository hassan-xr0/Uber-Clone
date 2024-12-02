import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="uber-move-text">
      <div className="h-screen w-full pt-8  bg-[url(https://plus.unsplash.com/premium_photo-1683568217010-e390b4f34737?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  bg-cover bg-ceter bg-no-repeat  flex justify-between flex-col">
      <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

        <div className="bg-white py-5  px-7">
          <h2 className="text-3xl tracking-tighter font-semibold">Get Started with Uber</h2>
          <Link to='/users/login' className="mt-7 block font-medium text-center bg-black text-white w-full p-[0.9rem] rounded-lg" >Continue</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
