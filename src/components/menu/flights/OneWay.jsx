import moment from "moment";
import React, { useState } from "react";
import { FaRegCalendar } from "react-icons/fa";
import Origin from "./Origin.jsx";
import Destination from "./Destination.jsx";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const OneWay = () => {
  // ORIGIN
  const [from, setFrom] = useState("");
  const [originAirportName, setOriginAirportName] = useState("");

  // DESTINATION
  const [to, setTo] = useState("");
  const [destinationAirportName, setDestinationAirportName] = useState("");

  // DEPARTING DATE
  const [startDate, setStartDate] = useState(new Date());

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

          <div className="flex flex-row items-center justify-between gap-8 w-full">
            <div className="w-[70%] bg-[#f5eefd] p-4 rounded-2xl border-2">
              <p className="font-secondary text-sm text-tertiary">
                Departing Date
              </p>
              <div className=" flex items-center justify-between w-[50%] my-1">
                <ReactDatePicker
                  minDate={new Date()}
                  closeOnScroll={(e) => e.target === document}
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showPreviousMonths={false}
                  monthsShown={2}
                  dropdownMode="select"
                  todayButton="Today"
                  withPortal
                  className="bg-transparent font-primary text-2xl font-medium cursor-pointer focus:outline-none w-full"
                ></ReactDatePicker>
                <FaRegCalendar size={26} />
              </div>
              <p className="font-secondary text-xs font-medium">
                {moment(startDate).format("dddd")}
              </p>
            </div>

            <div className="w-[30%] bg-[#f5eefd] p-4 rounded-2xl border-2">
              <p className="font-secondary text-sm text-tertiary">
                Passenger, Class
              </p>
              <p className="font-primary text-2xl font-medium my-1">
                0 Passenger
              </p>
              <p className="font-secondary text-xs font-medium">Business</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneWay;
