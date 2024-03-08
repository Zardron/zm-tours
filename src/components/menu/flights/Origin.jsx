import React, { useState } from "react";
import { PiArrowsLeftRightBold, PiAirplaneTakeoffFill } from "react-icons/pi";
import { FaRegTimesCircle } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TiTimes } from "react-icons/ti";

import { airportData } from "../../data.js";

const Origin = ({
  from,
  setFrom,
  to,
  setTo,
  originAirportName,
  setOriginAirportName,
  destinationAirportName,
  setDestinationAirportName,
}) => {
  // Origin
  const [showOrigin, setShowOrigin] = useState(false);
  const [originCountry, setOriginCountry] = useState(false);
  const [country, setCountry] = useState("Select Country");
  const [originAirport, setOriginAirport] = useState(false);
  const [airport, setAirport] = useState("Select Airport");

  const handleChangeFromTo = () => {
    setFrom(to);
    setTo(from);
    setDestinationAirportName(originAirportName);
    setOriginAirportName(destinationAirportName);
  };

  const airportList = airportData?.filter(
    (item) => item?.countryName === country
  );

  const airportDetails = airportList.map((item) => item.airport);

  const handleOrigin = (cityName, iatCode, airportName) => {
    setOriginAirportName(airportName);
    setFrom(cityName + " - " + iatCode);
    setAirport(cityName + " - " + iatCode);
    setOriginAirport(false);
    setShowOrigin(false);
  };

  return (
    <>
      <div className="relative w-full bg-[#f5eefd] p-4 rounded-2xl border-2">
        <p className="font-secondary text-sm text-tertiary font-normal">From</p>
        {from !== "" && (
          <TiTimes
            size={20}
            className="absolute top-[40px] right-16 text-red-500 cursor-pointer"
            title="Clear"
            onClick={() => {
              setCountry("Select Country"),
                setFrom(""),
                setOriginAirportName("");
              setShowOrigin(false);
            }}
          />
        )}
        <PiAirplaneTakeoffFill size={32} className="absolute top-2 right-4" />
        <input
          readOnly
          className="font-primary text-2xl font-medium bg-transparent outline-none my-1"
          type="text"
          placeholder="Select Origin"
          onChange={(e) => setFrom(e.target.value)}
          value={from}
          onClick={() => setShowOrigin(!showOrigin)}
        />

        {/* ORIGIN MENU */}
        {showOrigin && (
          <div className="absolute top-28 left-0 w-full border bg-white shadow-md gradient-border">
            <div className="flex items-center justify-between border-b border-gray-200 py-1">
              <p className="font-primary font-medium text-xl flex items-center">
                Origin
              </p>
              <FaRegTimesCircle
                size={20}
                className="text-red-300 hover:text-red-500"
                onClick={() => setShowOrigin(false)}
              />
            </div>
            <div className="pb-2">
              <div className="mt-3 border-2 p-2 focus:outline-none rounded-md font-primary grid grid-cols-2">
                <p
                  onClick={() => {
                    setOriginCountry(!originCountry),
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
                          setFrom(""),
                          setOriginAirportName("");
                        setShowOrigin(false);
                      }}
                    />
                  )}
                  <MdOutlineKeyboardArrowDown
                    onClick={() => setOriginCountry(!originCountry)}
                  />
                </div>
              </div>

              <div
                className={`w-full  rounded-md overflow-y-auto ${
                  originCountry ? "max-h-40" : "max-h-0"
                } transition-[max-height] ease-linear duration-300`}
              >
                {airportData.map((data, index) => (
                  <div key={index}>
                    <div
                      className="font-primary border-l-2 border-r-2 border-b-2 p-2"
                      onClick={() => {
                        setCountry(data.countryName), setOriginCountry(false);
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
                    onClick={() => setOriginAirport(!originAirport)}
                  >
                    {airport}
                    <div>
                      <MdOutlineKeyboardArrowDown />
                    </div>
                  </div>

                  <div
                    className={`w-full  rounded-md overflow-y-auto ${
                      originAirport ? "max-h-40" : "max-h-0"
                    } transition-[max-height] ease-linear duration-300`}
                  >
                    {airportDetails[0]?.map((data, index) => (
                      <div
                        className="flex items-center font-primary border-l-2 border-r-2 border-b-2 p-2"
                        onClick={() =>
                          handleOrigin(
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
          {originAirportName === "" ? <>{" - "}</> : originAirportName}
        </p>

        <button
          className="absolute top-1/2 -translate-y-1/2 right-[-42px] bg-[#f5eefd] p-2 rounded-full z-10 border-4 border-white dark:border-black"
          onClick={handleChangeFromTo}
        >
          <PiArrowsLeftRightBold className="text-primary" size={30} />
        </button>
      </div>
    </>
  );
};

export default Origin;
