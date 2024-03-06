import React from "react";
import LOGO from "../assets/logo.png";
import { Button } from "flowbite-react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const NavBar = () => {
  return (
    <div className="container mx-auto  items-center justify-between py-2 hidden lg:flex">
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

            <div className="invisible group-hover:visible absolute -z-50 opacity-0 group-hover:opacity-100 transition-all ease-linear duration-300  left-2 top-20  bg-[#f7f7f7]">
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

            <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all ease-linear duration-300 absolute left-2 top-20  bg-[#f7f7f7]">
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
  );
};

export default NavBar;
