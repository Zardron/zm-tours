import React, { useState } from "react";
import { Button } from "flowbite-react";
import Flights from "./menu/Flights";
import { MenuData } from "./menu/data.jsx";

const SearchMenu = () => {
  const [activeMenu, setActiveMenu] = useState("Flights");

  return (
    <div className="container mx-auto h-[236px]  relative">
      <div className="absolute w-full bg-white dark:bg-black -bottom-10 rounded-2xl shadow-lg dark:shadow-md dark:shadow-white border border-white/75 p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-around gap-2">
            {MenuData.map((data, index) => (
              <Button
                outline={activeMenu === data.title ? false : true}
                gradientDuoTone={"purpleToBlue"}
                className="w-[140px]"
                onClick={() => setActiveMenu(data.title)}
              >
                {data.icon} {data.title}
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <a href="">One Way</a>
            <a href="">Roundtrip</a>
            <a href="">Multi City</a>
          </div>
        </div>
        <Flights />
      </div>
    </div>
  );
};

export default SearchMenu;
