import React, { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { PiAirplaneLandingFill } from "react-icons/pi";
import { airportData } from "../../data";
import { TiTimes } from "react-icons/ti";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Destination = ({
  to,
  setTo,
  destinationAirportName,
  setDestinationAirportName,
}) => {
  // Destination
  const [showDestination, setShowDestination] = useState(false);
  const [destinationCountry, setDestinationCountry] = useState(false);
  const [country, setCountry] = useState("Select Country");
  const [destinationAirport, setDestinationAirport] = useState(false);
  const [airport, setAirport] = useState("Select Airport");

  const airportList = airportData?.filter(
    (item) => item?.countryName === country
  );

  const airportDetails = airportList.map((item) => item.airport);

  const handleDestination = (cityName, iatCode, airportName) => {
    setDestinationAirportName(airportName);
    setTo(cityName + " - " + iatCode);
    setAirport(cityName + " - " + iatCode);
    setDestinationAirport(false);
    setShowDestination(false);
  };

  return (
    <div className="relative w-full bg-[#f5eefd] p-4 rounded-2xl border-2">
      <p className="font-secondary text-sm text-tertiary font-normal">To</p>
      {to !== "" && (
        <TiTimes
          size={20}
          className="absolute top-[40px] right-16 text-red-500 cursor-pointer"
          title="Clear"
          onClick={() => {
            setCountry("Select Country"),
              setTo(""),
              setDestinationAirportName("");
            setShowDestination(false);
          }}
        />
      )}
      <PiAirplaneLandingFill size={32} className="absolute top-2 right-4" />
      <input
        readOnly
        className="font-primary text-2xl font-medium bg-transparent outline-none my-1 cursor-pointer"
        type="text"
        placeholder="Select Destination"
        onChange={(e) => setTo(e.target.value)}
        value={to}
        onClick={() => setShowDestination(!showDestination)}
      />

      {/* DESTINATION MENU */}
      {showDestination && (
        <div className="absolute top-28 left-0 w-full border bg-white shadow-md gradient-border">
          <div className="flex items-center justify-between border-b border-gray-200 py-1">
            <p className="font-primary font-medium text-xl flex items-center">
              Destination
            </p>
            <FaRegTimesCircle
              size={20}
              className="text-red-300 hover:text-red-500"
              onClick={() => setShowDestination(false)}
            />
          </div>
          <div className="pb-2">
            <div className="mt-3 border-2 p-2 focus:outline-none rounded-md font-primary grid grid-cols-2">
              <p
                onClick={() => {
                  setDestinationCountry(!destinationCountry),
                    setAirport("Select Airport");
                }}
              >
                {country}
              </p>

              <div className="flex items-center justify-end gap-2">
                {country !== "Select Country" && (
                  <TiTimes
                    className="text-red-500"
                    onClick={() => {
                      setCountry("Select Country"),
                        setTo(""),
                        setDestinationAirportName("");
                      setShowDestination(false);
                    }}
                  />
                )}
                <MdOutlineKeyboardArrowDown
                  onClick={() => setDestinationCountry(!destinationCountry)}
                />
              </div>
            </div>

            <div
              className={`w-full  rounded-md overflow-y-auto ${
                destinationCountry ? "max-h-40" : "max-h-0"
              } transition-[max-height] ease-linear duration-300`}
            >
              {airportData.map((data, index) => (
                <div key={index}>
                  <div
                    className="font-primary border-l-2 border-r-2 border-b-2 p-2"
                    onClick={() => {
                      setCountry(data.countryName),
                        setDestinationCountry(false);
                    }}
                  >
                    {data.countryName}
                  </div>
                </div>
              ))}
            </div>

            {country !== "Select Country" && (
              <>
                <div
                  className="w-full mt-3 border-2 p-2 focus:outline-none rounded-md font-primary flex items-center justify-between"
                  onClick={() => setDestinationAirport(!destinationAirport)}
                >
                  {airport}
                  <div>
                    <MdOutlineKeyboardArrowDown />
                  </div>
                </div>

                <div
                  className={`w-full  rounded-md overflow-y-auto ${
                    destinationAirport ? "max-h-40" : "max-h-0"
                  } transition-[max-height] ease-linear duration-300`}
                >
                  {airportDetails[0]?.map((data, index) => (
                    <div
                      className="flex items-center font-primary border-l-2 border-r-2 border-b-2 p-2"
                      onClick={() =>
                        handleDestination(
                          data.cityName,
                          data.iatCode,
                          data.airportName
                        )
                      }
                      key={index}
                    >
                      {data.cityName} - {data.iatCode}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
      <p className="font-secondary text-xs font-medium">
        {destinationAirportName === "" ? <>{" - "}</> : destinationAirportName}
      </p>
    </div>
  );
};

export default Destination;
