import { useState } from "react";
import Header from "./components/Header";
import "animate.css";
import { Button } from "flowbite-react";
import { PiAirplaneTakeoffFill } from "react-icons/pi";
import { FaGlobe, FaHotel, FaPassport } from "react-icons/fa";
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
          <div className="absolute w-full bg-white dark:bg-black -bottom-10 rounded-2xl shadow-lg dark:shadow-md dark:shadow-white border border-white/75">
            <div className="flex items-center justify-between p-8">
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
                  <RiHotelFill size={18} className="mr-1" /> Bus
                </Button>
                <Button outline={true} gradientDuoTone={"purpleToBlue"}>
                  <RiHotelFill size={18} className="mr-1" /> Cruise
                </Button>
              </div>
              <div className="flex items-center gap-6">
                <a href="">One Way</a>
                <a href="">Roundtrip</a>
                <a href="">Multi City</a>
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
