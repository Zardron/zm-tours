import React from "react";

const OneWay = () => {
  return (
    <>
      <div className="animate__animated animate__fadeIn">
        <div className="flex flex-row items-center justify-between gap-8 mt-4">
          <div className="flex flex-row items-center justify-between gap-8 w-full">
            <div className="w-full bg-[#8b3eea17] p-4 rounded-2xl">
              <p className="font-secondary text-sm text-tertiary font-normal">
                From
              </p>
              <p className="font-primary text-2xl font-medium">0 Passenger</p>
              <p className="font-secondary text-xs font-medium">Business</p>
            </div>
            <div className="w-full bg-[#8b3eea17] p-4 rounded-2xl">
              <p className="font-secondary text-sm text-tertiary">
                Passenger, Class
              </p>
              <p className="font-primary text-2xl font-medium">0 Passenger</p>
              <p className="font-secondary text-xs font-medium">Business</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between gap-8 w-full">
            <div className="w-[70%] bg-[#8b3eea17] p-4 rounded-2xl">
              <p className="font-secondary text-sm text-tertiary">
                Passenger, Class
              </p>
              <p className="font-primary text-2xl font-medium">0 Passenger</p>
              <p className="font-secondary text-xs font-medium">Business</p>
            </div>
            <div className="w-[30%] bg-[#8b3eea17] p-4 rounded-2xl">
              <p className="font-secondary text-sm text-tertiary">
                Passenger, Class
              </p>
              <p className="font-primary text-2xl font-medium">0 Passenger</p>
              <p className="font-secondary text-xs font-medium">Business</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneWay;
