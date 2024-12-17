import React from 'react'
import vehicleCapacity from "../images/vehicleCapacity.svg";

const VehicleCard = ({carImg, carName, carCapacity,carPrice,w, time,about}) => {
  return (
    <div
    className="flex w-[95%] mx-auto h-full p-2 rounded-lg gap-5 cursor-pointer"
  >
    <div className="vehicle-img ">
      <img src={carImg} alt="" width={w} />
    </div>

    <div className="details w-[60% leading-3 flex flex-col justify-center">
      <div className="flex gap-2">
        <h3 className="text-lg font-semibold font-sans">{carName}</h3>
        <div className="flex items-center justify-center">
          <img src={vehicleCapacity} width={13} />
          <p className="capacity text-[13px] pt-1">{carCapacity}</p>
        </div>
      </div>

      <p className="time text-[13px] font-medium text-zinc-900 font-sans mb-1">
        {time}
      </p>
      <p className="about text-[13px] text-zinc-500">
        {about}
      </p>
    </div>

    <div className="price ">
      <p className="price-value text-[17px] tracking-tighter font-sans font-semibold  py-2">
        {carPrice}
      </p>
    </div>
  </div>
  )
}

export default VehicleCard