import React, { useRef } from "react";
import uberLogo from "/src/images/uber-logo.png";
import { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import LocationSearchPanel from "../components/LocationSearchPanel";
import userBg from "../images/uber-search-2.png";
import whiteCar from "../images/white-car.webp";
import blackCar from "../images/black-car.webp";
import Motorcycle from "../images/UberMotorcycle3.webp";
import UberAuto from "../images/Uber-auto.webp";
import VehicleCard from "../components/VehicleCard";

const Home = () => {
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [isOpenPanel, setIsOpenPanel] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const panelRef = useRef();
  const vehiclePanelRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (isOpenPanel) {
      gsap.to(panelRef.current, {
        duration: 0.2,
        height: "70%",
        display: "block",
        padding: "12px",
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        duration: 0.2,
        display: "none",
        height: "0%",
        padding: "0px",
      });
    }
  }, [isOpenPanel]);

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        duration: 0.2,
        // height: "70%",
        display: "flex",
        y: 0,
        opacity: 1,
      });
      // gsap.to(panelRef.current, {
      //   duration: 0.2,
      //   display: "none",
      //   height: "0%",
      //   padding: "0px",
      // })
    } else {
      gsap.to(vehiclePanelRef.current, {
        duration: 0.2,
        // display: "none",
        y: 350,
      });
    }
  }, [vehiclePanel]);

  return (
    <div className="overflow-hidden">
      <img className="w-20 absolute m-8" src={uberLogo} alt="" />
      <div className={` h-screen w-screen`}>
        <img src={userBg} alt="" />
      </div>

      <div className=" flex flex-col justify-end absolute bottom-0 w-full h-full   rounded-t-2xl">
        <div className="h-[30%] bg-white py-6 px-3">
          <div className="flex justify-between">
            <h3 className={`text-xl font-extrabold tracking-tight mb-4`}>
              Find a trip
            </h3>
            {isOpenPanel && (
              <svg
                onClick={() => setIsOpenPanel(false)}
                className="mb-4  "
                xmlns="http://www.w3.org/2000/svg"
                height="23px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#666666"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            )}
          </div>

          <form
            className="flex flex-col gap-3 mb-5"
            onSubmit={(e) => submitHandler(e)}
          >
            <div className="flex bg-zinc-200  items-center py-3 px-5 rounded-lg gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#00"
              >
                <path d="M440-42v-80q-125-14-214.5-103.5T122-440H42v-80h80q14-125 103.5-214.5T440-838v-80h80v80q125 14 214.5 103.5T838-520h80v80h-80q-14 125-103.5 214.5T520-122v80h-80Zm40-158q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm0-80Z" />
              </svg>
              <input
                type="text"
                className="bg-transparent outline-none "
                onClick={() => setIsOpenPanel(true)}
                onChange={(e) => setPickUp(e.target.value)}
                value={pickUp}
                placeholder="Add a pick up location"
              />
            </div>

            <div className="flex bg-zinc-200  items-center py-3 px-5 rounded-lg gap-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#000"
              >
                <path d="M640-560v-126 126ZM174-132q-20 8-37-4.5T120-170v-560q0-13 7.5-23t20.5-15l212-72 240 84 186-72q20-8 37 4.5t17 33.5v337q-15-23-35.5-42T760-528v-204l-120 46v126q-21 0-41 3.5T560-546v-140l-160-56v523l-226 87Zm26-96 120-46v-468l-120 40v474Zm440-12q34 0 56.5-20t23.5-60q1-34-22.5-57T640-400q-34 0-57 23t-23 57q0 34 23 57t57 23Zm0 80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43.5T778-238l102 102-56 56-102-102q-18 11-38.5 16.5T640-160ZM320-742v468-468Z" />
              </svg>
              <input
                type="text"
                className="bg-transparent outline-none "
                onChange={(e) => setDestination(e.target.value)}
                onClick={() => setIsOpenPanel(true)}
                value={destination}
                placeholder="Enter your destination"
              />
            </div>
          </form>
        </div>
        <div ref={panelRef} className=" opacity-0 bg-white hidden">
          <LocationSearchPanel
            isOpenPanel={isOpenPanel}
            setIsOpenPanel={setIsOpenPanel}
            vehiclePanel={vehiclePanel}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>

      <div
        ref={vehiclePanelRef}
        className="fixed bottom-0  bg-white pt-4 pb-10 gap-2 w-full min-h-[30vh] flex flex-col  rounded-t-3xl"
      >
        <div className="flex justify-between items-center mt-2 mx-4 ">
          <h2 className="text-xl tracking-tight font-semibold ">
            Chose the vehicle
          </h2>
          {vehiclePanel && (
            <svg
              onClick={() => {
                setVehiclePanel(false);
              }}
              className="mb-4  "
              xmlns="http://www.w3.org/2000/svg"
              height="18px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#000"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          )}
        </div>
        <VehicleCard
          carImg={whiteCar}
          w={70}
          carName="UberGo"
          carPrice="192.20"
          carCapacity="4"
          time="2 min away • 15:24"
          about="Affordable compact rides"
        />
        <VehicleCard
          carImg={Motorcycle}
          w={70}
          carName="Moto"
          carPrice="65.12"
          carCapacity="1"
          time="3 min away • 15:24"
          about="Affordable motorcycle rides"
        />
        <VehicleCard
          carImg={UberAuto}
          w={70}
          carName="UberAuto"
          carPrice="118.10"
          carCapacity="4"
          time="2 min away • 15:24"
          about=""
        />
      </div>
    </div>
  );
};

export default Home;
