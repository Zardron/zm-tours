import { AiOutlineMinus } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { Button } from "flowbite-react";

const TopBar = ({ darkMode, setDarkMode }) => {
  return (
    <div className="hidden container mx-auto items-center justify-between py-1 border-b border-b-gray-200 h-[43px] lg:flex">
      <div className="dark:text-white flex flex-row items-center">
        <div className="flex items-center gap-2">
          <div className="p-1 cursor-pointer rounded-md hover:bg-gray-300 group">
            <FaFacebookSquare size={20} className="group-hover:text-black" />
          </div>
          <div className="p-1 cursor-pointer rounded-md hover:bg-gray-300 group">
            <FaInstagram size={20} className="group-hover:text-black" />
          </div>
          <div className="p-1 cursor-pointer rounded-md hover:bg-gray-300 group">
            <FaLinkedin size={20} className="group-hover:text-black" />
          </div>
          <div className="p-1 cursor-pointer rounded-md hover:bg-gray-300 group">
            <FaGithub size={20} className="group-hover:text-black" />
          </div>
        </div>
        <div>
          <AiOutlineMinus
            className=" rotate-90 mx-4 text-gray-200 dark:text-white/50"
            size={26}
          />
        </div>
        <p className="font-primary text-sm">+63 916 636 1646</p>
        <div>
          <AiOutlineMinus
            className=" rotate-90 mx-4 text-gray-200 dark:text-white/50"
            size={26}
          />
        </div>
        <p className="font-primary text-sm">contact@zm-tours.com</p>
      </div>
      <div className="dark:text-white flex items-center gap-2">
        <p className="font-primary text-sm">Login</p>
        <div>
          <AiOutlineMinus
            className=" rotate-90 text-gray-200 dark:text-white/50"
            size={26}
          />
        </div>

        <p className="font-primary text-sm ">Register</p>
        <div>
          <AiOutlineMinus
            className=" rotate-90 text-gray-200 dark:text-white/50"
            size={26}
          />
        </div>

        {darkMode === "light" ? (
          <Button
            gradientDuoTone="purpleToBlue"
            className="cursor-pointer h-30 w-16"
            onClick={() => setDarkMode("dark")}
          >
            <FaMoon />
          </Button>
        ) : (
          <Button
            outline
            gradientDuoTone="purpleToBlue"
            className=" cursor-pointer h-30 w-16 focus:outline-none focus:none"
            onClick={() => setDarkMode("light")}
          >
            <LuSunMedium className="dark:text-yellow-400" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default TopBar;
