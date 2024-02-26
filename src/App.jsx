import { useState } from "react";
import Header from "./components/Header";
import "animate.css";
import { Button } from "flowbite-react";
import { PiAirplaneTakeoffFill } from "react-icons/pi";
import { FaGlobe, FaHotel, FaPassport, FaBus, FaShip } from "react-icons/fa";
import { RiHotelFill } from "react-icons/ri";

const App = () => {
  const [darkMode, setDarkMode] = useState("light");
  const element = document.documentElement;

  switch (darkMode) {
    case "dark":
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      break;

    case "light":
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      break;

    default:
      element.classList.add("light");
      break;
  }

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="bg-white dark:bg-black">
        <div className="container mx-auto h-[236px]  relative">
          <div className="absolute w-full bg-white dark:bg-black -bottom-10 rounded-2xl shadow-lg dark:shadow-md dark:shadow-white border border-white/75 p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-around gap-6">
                <Button gradientDuoTone={"purpleToBlue"}>
                  <PiAirplaneTakeoffFill size={18} className="mr-1" /> Flights
                </Button>
                <Button outline={true} gradientDuoTone={"purpleToBlue"}>
                  <FaGlobe size={18} className="mr-1" /> Tours
                </Button>
                <Button outline={true} gradientDuoTone={"purpleToBlue"}>
                  <FaHotel size={18} className="mr-1" /> Hotels
                </Button>
                <Button outline={true} gradientDuoTone={"purpleToBlue"}>
                  <FaPassport size={18} className="mr-1" /> Visa
                </Button>
                <Button outline={true} gradientDuoTone={"purpleToBlue"}>
                  <RiHotelFill size={18} className="mr-1" /> Apartments
                </Button>
                <Button outline={true} gradientDuoTone={"purpleToBlue"}>
                  <FaBus size={18} className="mr-1" /> Bus
                </Button>
                <Button outline={true} gradientDuoTone={"purpleToBlue"}>
                  <FaShip size={18} className="mr-1" /> Cruise
                </Button>
              </div>
              <div className="flex items-center gap-6">
                <a href="">One Way</a>
                <a href="">Roundtrip</a>
                <a href="">Multi City</a>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between gap-8 mt-4">
              <div className="flex flex-row items-center justify-between gap-8 w-full">
                <div className="w-full bg-[#8b3eea17] p-4 rounded-2xl">
                  <p className="font-secondary text-sm text-gray-400">
                    Passenger, Class
                  </p>
                  <p className="font-primary text-2xl font-semibold">
                    0 Passenger
                  </p>
                  <p className="font-secondary text-xs font-semibold">
                    Business
                  </p>
                </div>
                <div className="w-full bg-[#8b3eea17] p-4 rounded-2xl">
                  <p className="font-secondary text-sm text-gray-400">
                    Passenger, Class
                  </p>
                  <p className="font-primary text-2xl font-semibold">
                    0 Passenger
                  </p>
                  <p className="font-secondary text-xs font-semibold">
                    Business
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between gap-8 w-full">
                <div className="w-[70%] bg-[#8b3eea17] p-4 rounded-2xl">
                  <p className="font-secondary text-sm text-gray-400">
                    Passenger, Class
                  </p>
                  <p className="font-primary text-2xl font-semibold">
                    0 Passenger
                  </p>
                  <p className="font-secondary text-xs font-semibold">
                    Business
                  </p>
                </div>
                <div className="w-[30%] bg-[#8b3eea17] p-4 rounded-2xl">
                  <p className="font-secondary text-sm text-gray-400">
                    Passenger, Class
                  </p>
                  <p className="font-primary text-2xl font-semibold">
                    0 Passenger
                  </p>
                  <p className="font-secondary text-xs font-semibold">
                    Business
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            darkMode === "light"
              ? "popular_destination"
              : "popular_destination-dark"
          } h-screen dark:bg-black`}
        >
          asd
        </div>
      </div>
    </>
  );
};

export default App;
