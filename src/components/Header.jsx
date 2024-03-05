import PEOPLE from "../assets/people-banner.png";
import LOGO from "../assets/logo.png";
import { Button } from "flowbite-react";
import { AiOutlineMinus } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { useState } from "react";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <div
      className={`absolute w-full z-50 ${
        darkMode === "dark" ? "bg-[#222222] banner-dark" : "banner"
      }  h-[96vh]`}
    >
      <div className="w-full">
        {/* TOP BAR */}
        <div className="container mx-auto flex items-center justify-between py-1 border-b border-b-gray-200 h-[43px]">
          <div className="dark:text-white flex flex-row items-center">
            <div className="flex items-center gap-2">
              <div className="p-1 cursor-pointer rounded-md hover:bg-gray-300 group">
                <FaFacebookSquare
                  size={20}
                  className="group-hover:text-black"
                />
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
        {/* END OF TOP BAR */}
        {/* NAVBAR */}
        <div className="container mx-auto flex items-center justify-between py-2">
          <div className=" dark:text-white">
            <img src={LOGO} alt="" className=" w-60" />
          </div>
          <div className="w-full dark:text-white flex items-center justify-between">
            <div className="flex items-center mx-20 gap-10">
              <p className="nav-link dark:text-white dark:after:bg-white font-primary cursor-pointer py-1 mx-2">
                Home
              </p>
              <div className="relative flex items-center h-[100px] z-50 group">
                <p className="nav-link dark:text-white dark:after:bg-white font-primary cursor-pointer py-1 mx-2">
                  <div className="flex flex-row items-center gap-1">
                    Categories{" "}
                    <MdOutlineKeyboardArrowDown
                      className={
                        "group-hover:transition-all group-hover:rotate-180 group-hover:duration-300 transition-all rotate-0 duration-300"
                      }
                    />
                  </div>
                </p>

                <div className=" opacity-0 group-hover:opacity-100 transition-all ease-linear duration-300 absolute left-2 top-20  bg-[#f7f7f7]  ">
                  <ul className="border border-gray-200 shadow-md w-40 rounded-md px-4 py-2">
                    <li className="nav-link font-primary cursor-pointer w-full py-2">
                      Categories 1
                    </li>
                    <li className="nav-link font-primary cursor-pointer w-full py-2">
                      Categories 2
                    </li>
                    <li className="nav-link font-primary cursor-pointer w-full py-2">
                      Categories 3
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative flex items-center h-[100px] z-50 group">
                <p className="nav-link dark:text-white dark:after:bg-white font-primary cursor-pointer py-1 mx-2">
                  <div className="flex flex-row items-center gap-1">
                    Pages{" "}
                    <MdOutlineKeyboardArrowDown
                      className={
                        "group-hover:transition-all group-hover:rotate-180 group-hover:duration-300 transition-all rotate-0 duration-300"
                      }
                    />
                  </div>
                </p>

                <div className=" opacity-0 group-hover:opacity-100 transition-all ease-linear duration-300 absolute left-2 top-20  bg-[#f7f7f7]  ">
                  <ul className="border border-gray-200 shadow-md w-40 rounded-md px-4 py-2">
                    <li className="nav-link font-primary cursor-pointer w-full py-2">
                      Pages 1
                    </li>
                    <li className="nav-link font-primary cursor-pointer w-full py-2">
                      Pages 2
                    </li>
                    <li className="nav-link font-primary cursor-pointer w-full py-2">
                      Pages 3
                    </li>
                  </ul>
                </div>
              </div>
              <p className="nav-link dark:text-white dark:after:bg-white font-primary cursor-pointer py-1 mx-2">
                News
              </p>
              <p className="nav-link dark:text-white dark:after:bg-white font-primary cursor-pointer py-1 mx-2">
                Contact
              </p>
            </div>

            <div className="flex items-center gap-4">
              <form className="max-w-md mx-auto">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="font-primary block w-full px-2 py-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search . . ."
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute end-[3px] bottom-[3px] bg-gradient-to-br to-blue-500 from-purple-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </button>
                </div>
              </form>
              <Button className="font-primary" gradientDuoTone="purpleToBlue">
                Become a partner
              </Button>
            </div>
          </div>
        </div>
        {/* END OF NAVBAR */}
      </div>

      <div className="absolute bottom-0 w-full">
        <div className="container mx-auto">
          <div className="flex flex-row items-center justify-between">
            <div className="w-1/2">
              <h1 className="font-primary text-[100px] leading-[120px] font-extrabold dark:text-white bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-l to-blue-500 from-purple-500">
                  LETS TRAVEL THE WORLD WITH US
                </span>
              </h1>

              <p className="font-secondary text-gray-500 text-md dark:text-white tracking-wide mt-4">
                Lorem ipsum dolor sit amet consectetur. Amet enim tincidunt
                mauris tellus nunc eleifend. Odio suspendisse ut arcu eget enim
                vulputate.
              </p>

              <Button outline gradientDuoTone="purpleToBlue" className="mt-10">
                <span className="font-primary text-xl font-normal">
                  Explore more
                </span>{" "}
                <FaArrowRight className="ml-2 text-lg" />
              </Button>
            </div>
            <div>
              <img src={PEOPLE} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
