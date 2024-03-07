import React, { useState } from "react";
import { Button } from "flowbite-react";
import Flights from "./menu/Flights";
import { MenuData } from "./menu/data.jsx";
import FlightDetails from "./menu/flights/FlightDetails.jsx";
import Tours from "./menu/Tours.jsx";

const SearchMenu = ({ darkMode }) => {
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
    <div className={`${darkMode === "dark" ? "menu-bg-dark" : "menu-bg"} `}>
      <div className="container mx-auto h-[20px] lg:h-[100px] p-4">
        <div className="relative w-full max-h-[400px] bg-white dark:bg-black -bottom-0 lg:-bottom-20 rounded-2xl shadow-lg dark:shadow-md dark:shadow-white border p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-around gap-2">
              {MenuData.map((data, index) => (
                <div key={index}>
                  <div
                    className={`flex flex-row items-center justify-center w-36 ${
                      activeMenu === data.title
                        ? "active-menu"
                        : darkMode === "dark"
                        ? "gradient-btn-dark"
                        : "gradient-btn"
                    }`}
                    onClick={() => setActiveMenu(data.title)}
                  >
                    {data.icon} {data.title}
                  </div>
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
    </div>
  );
};

export default SearchMenu;
