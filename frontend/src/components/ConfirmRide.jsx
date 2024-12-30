import React from "react";

const ConfirmRide = ({
  setIsOpenConfirm,
  WideArrow,
  Sqaure,
  PaymentMethod,
  MapPin,
  whiteCar,
  setLookingDirver,
}) => {
  return (
    <div className="w-screen flex flex-col items-center">
      {" "}
      <div onClick={() => setIsOpenConfirm(false)}>
        <img src={WideArrow} width={20} />
      </div>
      <h2 className="text-lg font-semibold mt-3">Confirm your ride</h2>
      <div className="">
        <img src={whiteCar} width={110} />
      </div>
      <div className="flex h-[12vh] items-center w-full gap-4 border-t-[1px] border-t-zinc-300 px-4 py-3">
        <div className="w-[5vw]">
          <img src={MapPin} width={20} />
        </div>

        <div className="w-[90vw]">
          <h3 className="text-base font-semibold tracking-tighter">562/31-A</h3>
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
          <h3 className="text-base font-semibold tracking-tighter">₹ 193.2</h3>
          <p className="text-[11px] text-zinc-500 leading-4">Cash Cash</p>
        </div>
      </div>
      <button onClick={()=>setLookingDirver(true)} className="w-[90vw] bg-black text-white py-[7px] text-sm mt-3 rounded-lg ">
        Confirm
      </button>
    </div>
  );
};

export default ConfirmRide;
