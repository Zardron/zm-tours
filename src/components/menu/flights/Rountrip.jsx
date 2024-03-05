import moment from "moment";
import React from "react";
import { FaRegCalendar } from "react-icons/fa";
const Rountrip = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between gap-8 w-full font-secondary">
        <div className="w-full bg-[#8b3eea17] p-4 rounded-2xl">
          <p className="text-sm text-gray-400">Passenger, Class</p>
          <p className="font-primary text-2xl font-medium">0 Passenger</p>
          <p className="text-xs font-medium">Business</p>
        </div>
        <div className="w-full bg-[#8b3eea17] p-4 rounded-2xl">
          <p className="text-sm text-gray-400">Passenger, Class</p>
          <p className="font-primary text-2xl font-medium">0 Passenger</p>
          <p className="text-xs font-medium">Business</p>
        </div>
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
              <p className="font-primary text-2xl font-medium">
                {" "}
                {moment().format("MM/DD/YYYY")}
              </p>
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
    </>
  );
};

export default Rountrip;
