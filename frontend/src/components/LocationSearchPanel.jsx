import React from "react";
import "remixicon/fonts/remixicon.css";

const LocationSearchPanel = ({
  vehiclePanel,
  setVehiclePanel,
  setIsOpenPanel,
  isOpenPanel,
}) => {
  const locations = [
    {
      name: "Brockton Avenue, Abington",
      details:
        "Mankato Mississippi 96522,  Nulla St, Miami Beach North Dakota ",
      streetNo: "Bellingham MA 2019",
    },
    {
      name: "Cecilia Chapman",
      details: "Ullamcorper. Street Roseville,Ap #285 Ullamcorper Avenue ",
      streetNo: "Mankato Mississippi 96522",
    },
    {
      name: "Hedy Greene",
      details: " Viverra. Avenue, Latrobe DE, P.O. Box 132 1599 Curabitur Rd. ",
      streetNo: "Bethlehem Utah 02913",
    },
  ];
  return (
    <div className="space-y-4">
      {/* Sample Data */}
      {locations.map((location, i) => (
        <div
          onClick={() => {
            setVehiclePanel(!vehiclePanel);
            setIsOpenPanel(!isOpenPanel);
          }}
          key={i}
          className="flex items-center gap-2  pr-3"
        >
          <div className="px-4 bg-zinc-200 w-[34px] flex items-center justify-center rounded-full h-[34px]">
            <i class="ri-map-pin-2-fill "></i>
          </div>
          <div className="w-full leading-tight">
            <h2 className="text-[14px] font-semibold text-zinc-900">
              {location.name}
            </h2>
            <h4 className="text-[12px] font-medium text-zinc-800 line-clamp-1">
              {location.details}
            </h4>
            <p className="text-[12px] font-medium text-zinc-800 line-clamp-1">
              {location.streetNo}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
