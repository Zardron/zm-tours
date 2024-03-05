import React, { useState } from "react";
import { Button } from "flowbite-react";
import Flights from "./menu/Flights";
import { MenuData } from "./menu/data.jsx";
import FlightDetails from "./menu/flights/FlightDetails.jsx";
import Tours from "./menu/Tours.jsx";

const SearchMenu = () => {
  const [activeMenu, setActiveMenu] = useState("Flights");
  const [flightDetails, setFlightDetails] = useState("one-way");

  const flightDetailsProps = { flightDetails, setFlightDetails };

  const renderComponent = (menu) => {
    switch (menu) {
      case "Flights":
        return <Flights {...flightDetailsProps} />;
      case "Tours":
        return <Tours />;
    }
  };
  return (
    <div className="container mx-auto h-[236px]  relative">
      <div className="absolute w-full bg-white dark:bg-black -bottom-10 rounded-2xl shadow-lg dark:shadow-md dark:shadow-white border border-white/75 p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-around gap-2">
            {MenuData.map((data, index) => (
              <div key={index}>
                <Button
                  outline={activeMenu === data.title ? false : true}
                  gradientDuoTone={"purpleToBlue"}
                  className="w-[140px]"
                  onClick={() => setActiveMenu(data.title)}
                >
                  {data.icon} {data.title}
                </Button>
              </div>
            ))}
          </div>

          {activeMenu === "Flights" && (
            <FlightDetails {...flightDetailsProps} />
          )}
        </div>
        {renderComponent(activeMenu)}
      </div>
    </div>
  );
};

export default SearchMenu;
