import PEOPLE from "../assets/people-banner.png";
import { Button } from "flowbite-react";
import { FaArrowRight } from "react-icons/fa6";
import TopBar from "./TopBar";
import GetScreenSize from "./GetScreenSize";
import MobileTopBar from "./MobileTopBar";
import NavBar from "./NavBar";

const Header = ({ darkMode, setDarkMode }) => {
  const props = { darkMode, setDarkMode };

  const screenSize = GetScreenSize();
  return (
    <div
      className={`absolute w-full h-[500px] lg:h-screen ${
        darkMode === "dark" ? "bg-[#222222] banner-dark" : "banner"
      } `}
    >
      <div className="w-full">
        {/* TOP BAR */}
        {screenSize.width <= 768 ? (
          <MobileTopBar {...props} />
        ) : (
          <TopBar {...props} />
        )}
        {/* END OF TOP BAR */}
        <NavBar />
        {/* NAVBAR */}

        {/* END OF NAVBAR */}
      </div>

      <div className="absolute bottom-1/3 translate-y-1/3 p-10 lg:translate-y-0 lg:bottom-0 lg:w-full lg:p-0">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2">
              <h1 className="font-primary text-center text-5xl lg:text-start lg:text-[100px] lg:leading-[120px] font-extrabold dark:text-white bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-l to-blue-500 from-purple-500">
                  LETS TRAVEL THE WORLD WITH US
                </span>
              </h1>

              <p className="font-secondary text-gray-500 text-md text-center lg:text-start dark:text-white tracking-wide mt-6 lg:mt-4">
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
              <img src={PEOPLE} alt="" className="hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
