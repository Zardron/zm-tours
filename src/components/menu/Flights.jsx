import React from "react";

const Flights = () => {
  return (
    <div className="flex flex-row items-center justify-between gap-8 mt-4">
      <div className="flex flex-row items-center justify-between gap-8 w-full">
        <div className="w-full bg-[#8b3eea17] p-4 rounded-2xl">
          <p className="font-secondary text-sm text-gray-400">
            Passenger, Class
          </p>
          <p className="font-primary text-2xl font-semibold">0 Passenger</p>
          <p className="font-secondary text-xs font-semibold">Business</p>
        </div>
        <div className="w-full bg-[#8b3eea17] p-4 rounded-2xl">
          <p className="font-secondary text-sm text-gray-400">
            Passenger, Class
          </p>
          <p className="font-primary text-2xl font-semibold">0 Passenger</p>
          <p className="font-secondary text-xs font-semibold">Business</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between gap-8 w-full">
        <div className="w-[70%] bg-[#8b3eea17] p-4 rounded-2xl">
          <p className="font-secondary text-sm text-gray-400">
            Passenger, Class
          </p>
          <p className="font-primary text-2xl font-semibold">0 Passenger</p>
          <p className="font-secondary text-xs font-semibold">Business</p>
        </div>
        <div className="w-[30%] bg-[#8b3eea17] p-4 rounded-2xl">
          <p className="font-secondary text-sm text-gray-400">
            Passenger, Class
          </p>
          <p className="font-primary text-2xl font-semibold">0 Passenger</p>
          <p className="font-secondary text-xs font-semibold">Business</p>
        </div>
      </div>
    </div>
  );
};

export default Flights;