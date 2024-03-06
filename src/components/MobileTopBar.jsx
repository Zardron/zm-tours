import React from "react";
import LOGO from "../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "flowbite-react";
import { LuSunMedium } from "react-icons/lu";
import { FaMoon } from "react-icons/fa6";

const MobileTopBar = ({ darkMode, setDarkMode }) => {
  return (
    <div className="absolute top-0 h-[85px] w-full p-2">
      <div className="flex flex-row items-center justify-between h-full">
        <img src={LOGO} alt="" className="w-36" />

        <div className="flex flex-row items-center gap-4">
          {darkMode === "light" ? (
            <Button
              gradientDuoTone="purpleToBlue"
              className="cursor-pointer h-18 w-16"
              onClick={() => setDarkMode("dark")}
            >
              <FaMoon size={20} />
            </Button>
          ) : (
            <Button
              outline
              gradientDuoTone="purpleToBlue"
              className=" cursor-pointer h-18 w-16 focus:outline-none focus:none"
              onClick={() => setDarkMode("light")}
            >
              <LuSunMedium className="dark:text-yellow-400" size={20} />
            </Button>
          )}
          <RxHamburgerMenu size={60} className="dark:text-white" />
        </div>
      </div>
    </div>
  );
};

export default MobileTopBar;
