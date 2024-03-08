import moment from "moment";
import React, { useState } from "react";
import { FaRegCalendar } from "react-icons/fa";
import { PiAirplaneLandingFill } from "react-icons/pi";

import Origin from "./Origin";
import Destination from "./Destination";
import ReactDatePicker from "react-datepicker";

const Rountrip = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [originAirportName, setOriginAirportName] = useState("");
  const [destinationAirportName, setDestinationAirportName] = useState("");

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const props = {
    from,
    setFrom,
    to,
    setTo,
    originAirportName,
    setOriginAirportName,
    destinationAirportName,
    setDestinationAirportName,
  };

  return (
    <>
      <div className="animate__animated animate__fadeIn">
        <div className="flex flex-row items-center justify-between gap-8 mt-4">
          <div className="flex flex-row items-center justify-between gap-8 w-full">
            <Origin {...props} />
            <Destination {...props} />
          </div>

          <div className="flex flex-row items-center justify-between gap-8 w-full font-secondary">
            <div className="w-[70%] grid grid-cols-2 bg-[#8b3eea17] p-4 rounded-2xl gap-10">
              <div>
                <p className="text-sm text-gray-400">Depart</p>
                <div className="flex items-center justify-between">
                  <p className="font-primary text-2xl font-medium">
                    {moment().format("MM/DD/YYYY")}
                  </p>
                  <FaRegCalendar size={20} />
                </div>
                <p className="text-xs font-medium">Business</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Return</p>

                <div className="flex items-center justify-between">
                  <ReactDatePicker
                    minDate={new Date()}
                    closeOnScroll={(e) => e.target === document}
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => {
                      setDateRange(update);
                    }}
                    showPreviousMonths={false}
                    showMonthDropdown
                    showYearDropdown
                    monthsShown={2}
                    dropdownMode="select"
                    withPortal
                    className="bg-transparent font-primary text-2xl font-medium cursor-pointer focus:outline-none w-full"
                  ></ReactDatePicker>
                  <FaRegCalendar size={20} />
                </div>
                <p className="text-xs font-medium">Business</p>
              </div>
            </div>
            <div className="w-[30%] bg-[#8b3eea17] p-4 rounded-2xl">
              <p className="text-sm text-gray-400">Passenger, Class</p>
              <p className="font-primary text-2xl font-medium">0 Passenger</p>
              <p className="text-xs font-medium">Business</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rountrip;
